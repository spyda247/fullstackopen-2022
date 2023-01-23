import { useState, useEffect } from "react";
import axios from "axios";
import Display from './components/Display'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    const filtered = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    if (filtered.length >= 10) {
      setShow(true);
    } else {
      setResults(filtered);
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
      <Display 
        show={show} 
        results={results} />
    </div>
  );
};

export default App;
