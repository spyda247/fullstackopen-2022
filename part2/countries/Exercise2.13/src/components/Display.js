import { useState } from 'react'
import DisplayDetails from './DisplayDetails';

const Display = ({ show, results }) => {
  const [toggle, setToggle] = useState(false)
  const [selected, setSelected] = useState({})
 
  const message = "Too many matches, specify another filter";

  const handleClick = (e, result) => {
    setSelected(result)
    setToggle(true)
  };
  
  return (
    <div>
      {show ? (
        message
      ) : results.length === 1 ? (
        <DisplayDetails result={results[0]} />
      ) : (
        results.map((result) => (
          <div key={crypto.randomUUID()}>
            {result.name.common}&nbsp;
            <button
              value={result.name.common}
              onClick={(e) => handleClick(e, result)}
            >
              show
            </button>
          </div>
        ))
      )}
      {toggle && <DisplayDetails result={selected} />}
    </div>
  );
};

export default Display;
