import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/personsService";
import Notification from "../src/components/Notification";
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);


  useEffect(() => {
    personsService.getAll().then((response) => setPersons(response));
  }, []);

  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewNumber = (event) => setNewNumber(event.target.value);

  const checkIfNameExists = (name) =>
    persons.some((person) => person.name === name);
    
  const checkIfIdExists = (id) =>
    persons.some((person) => person.id === id);

  const updatePerson = (newName, newNumber) => {
    const target = persons.find(person => person.name === newName)
    const changedPerson = {...target, number:newNumber}

    personsService.update(target.id, changedPerson).then(returnedPerson => {
      setPersons(persons.map(person => person.id !== target.id ? person : returnedPerson))
    }) 
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log(newNumber)
    const newPersonObject = {
      name: newName,
      number: newNumber,
    };
    

    if (checkIfNameExists(newName)) {
      const userResponse = window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`);
      if(userResponse) {
       updatePerson(newName, newNumber)
      }
    } else {
      personsService
        .create(newPersonObject)
        .then((response) => {
          setPersons(persons.concat(response))
          setMessage(`Added ${newName}`);
          setSuccess(true)
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
    }
  };

  const deletePerson = (id, name) => {
    if (checkIfIdExists(id)) {
      const userResponse = window.confirm(`Delete ${name} ?`)
    if (userResponse) {
         const newArr = persons.filter((person) => person.id !== id);
     personsService
       .remove(id)
       .then(() => {
         setPersons(newArr);
         setFilteredList([]);
       })
       .catch((error) => {
         console.log(error.message);
          setMessage(
            `Information of ${name} has already been removed from the server`
          );
          setSuccess(false);
          setTimeout(() => {
           setMessage(null);
         }, 5000);
       });  
      }
     }
    }

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
    <div className="wrapper">
      <h2>Phonebook</h2>
      <Notification message={message} success={success}/>

      <Filter handleFilteredList={handleFilteredList} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
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
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
