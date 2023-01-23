import { useState, useEffect } from "react";
import axios from "axios";
import Display from './components/Display'

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data));
  }, []);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    const filtered = data.filter((item) =>
      item.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
 
    if (filtered.length >= 10) {
      setShow(true);
    } 
    else {
      setCountries(filtered);
      setShow(false);
    }
  };


  return (
    <div>
      <form>
        <label>
          find countries
          <input value={inputValue} onChange={handleInputValue} />
        </label>
      </form>
      {
        inputValue 
        ? <Display show={show} countries={countries} inputValue={inputValue} />
        : ''
      }
    </div>
  );
};

export default App;
