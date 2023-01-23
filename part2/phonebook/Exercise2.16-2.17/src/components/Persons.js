import React from 'react'

const Persons = ({ toggle, persons, filteredList, deletePerson }) => {
  return (
    <div>
      {toggle
        ? filteredList.map((person) => (
            <div key={crypto.randomUUID()}>
              <p>
                {person.name} {person.number}&nbsp;
                <button onClick={() => deletePerson(person.id, person.name)}>
                  Delete
                </button>
              </p>
            </div>
          ))
        : persons.map((person) => (
            <div key={crypto.randomUUID()}>
              <p>
                {person.name} {person.number}&nbsp;
                <button onClick={() => deletePerson(person.id, person.name)}>
                  Delete
                </button>
              </p>
            </div>
          ))}
    </div>
  );
}

export default Persons