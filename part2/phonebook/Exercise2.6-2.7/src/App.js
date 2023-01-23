import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const checkIfNameExists = (name) => {
    const includedIn = persons.filter(
      person => person.name === name
    )
    return includedIn.length !== 0 

  }

  const addName = (event) => {
    event.preventDefault()
    const newPersonObject = {
      name: newName
    }
    checkIfNameExists(newName) 
      ? alert(`${newName} is already in the phonebook`)
      : setPersons(persons.concat(newPersonObject))    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <div key={person.name}>{person.name}</div>
        ))}
      </div>

    </div>
  )
}

export default App;
