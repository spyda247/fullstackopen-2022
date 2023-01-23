import React from 'react'

const Persons = ({ toggle, persons, filteredList }) => {
  return (
    <div>
      {toggle
        ? filteredList.map((person) => (
            <div key={person.name}>
              {person.name} {person.number}
            </div>
          ))
        : persons.map((person) => (
            <div key={person.name}>
              {person.name} {person.number}
            </div>
          ))}
    </div>
  );
}

export default Persons