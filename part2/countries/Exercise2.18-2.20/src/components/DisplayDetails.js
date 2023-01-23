 const DisplayDetails = ({ weatherDetails, country }) => {
  /* console.log('<DisplayDetails /> Prop: weatherDetails: ', weatherDetails) */
  if(Object.entries(weatherDetails).length === 0) {
    return null
  }
  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>

      <h4>languages</h4>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={crypto.randomUUID()}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
      <h4>{`Weather in ${country.capital}`}</h4>
      <p>{`temperature feels like ${weatherDetails.main.temp} Celcius`}</p>
      <img 
        src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`} 
        alt= {weatherDetails.weather.description}
      />
      <p>{`wind ${weatherDetails.wind.speed} m/s`}</p>
    </div>
  );
};

export default DisplayDetails