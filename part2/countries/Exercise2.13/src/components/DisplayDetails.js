 const DisplayDetails = ({ result }) => {
  return (
    <div key={crypto.randomUUID()}>
      <h3>{result.name.common}</h3>
      <p>capital: {result.capital}</p>
      <p>area: {result.area}</p>

      <h4>languages</h4>
      <ul>
        {Object.values(result.languages).map((language, index) => (
          <li key={crypto.randomUUID()}>{language}</li>
        ))}
      </ul>
      <img src={result.flags.png} alt={`flag of ${result.name.common}`} />
    </div>
  );
};

export default DisplayDetails