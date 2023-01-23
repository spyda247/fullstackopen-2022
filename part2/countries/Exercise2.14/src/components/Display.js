import { useState, useEffect } from "react";
import axios from "axios";
import DisplayDetails from "./DisplayDetails";

const api_key = process.env.REACT_APP_API_KEY;

const Display = ({ show, countries }) => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState({});
  const [weatherDetails, setWeatherDetails] = useState({});

  const message = "Too many matches, specify another filter";
  
  useEffect(() => {
    /* console.log('<Display /> Prop: Selected', selected); */
    if (Object.entries(selected).length !== 0) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${selected.latlng[0]}&lon=${selected.latlng[1]}&appid=${api_key}`
        )
        .then((response) => {
          setWeatherDetails(response.data);
        });
    } else if (countries.length !== 0) {
       axios
         .get(
           `https://api.openweathermap.org/data/2.5/weather?lat=${countries[0].latlng[0]}&lon=${countries[0].latlng[1]}&appid=${api_key}`
         )
         .then((response) => {
           setWeatherDetails(response.data);
         });
    }
  }, [selected, countries]);

  const handleClick = (e, country) => {
    e.preventDefault()
    setSelected(country);
    setToggle(true);
  };

  return (
    <div>
      {show ? (
        message
      ) : countries.length === 1 ? (
        <DisplayDetails weatherDetails={weatherDetails} country={countries[0]} />
      ) : (
        countries.map((country) => (
          <div key={crypto.randomUUID()}>
            {country.name.common}&nbsp;
            <button
              value={country.name.common}
              onClick={(e) => handleClick(e, country)}
            >
              show
            </button>
          </div>
        ))
      )}

      {toggle && (
        <DisplayDetails weatherDetails={weatherDetails} country={selected} />
      )}
    </div>
  );
};

export default Display;
