import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
      
  }, [])
  

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
