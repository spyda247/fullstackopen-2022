const Filter = (props) => {
  return (
    <div>
      <p>
        filter shown with
        <input onChange={(e) => props.handleFilteredList(e)} />
      </p>
    </div>
  );
}

export default Filter