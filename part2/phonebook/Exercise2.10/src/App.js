import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleNewName = (event) => setNewName(event.target.value);

  const handleNewNumber = (event) => setNewNumber(event.target.value);

  const checkIfNameExists = (name) =>
    persons.some((person) => person.name === name);

  const addName = (event) => {
    event.preventDefault();
    const newPersonObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    checkIfNameExists(newName)
      ? alert(`${newName} is already in the phonebook`)
      : setPersons(persons.concat(newPersonObject));
  };

  const handleFilteredList = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const list = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );

    if (list.length !== 0) {
      setFilteredList(list);
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilteredList ={handleFilteredList} />
     
      <h3>Add a new</h3>

      <PersonForm 
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>

      <Persons 
        toggle={toggle}
        persons={persons}
        filteredList={filteredList}
      />

    </div>
  );
};

export default App;
