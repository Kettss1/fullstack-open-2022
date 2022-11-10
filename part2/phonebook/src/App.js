import { useState, useEffect } from 'react'
import { Filter } from './components/Filter'
import { Form } from './components/Form'
import { PhonebookList } from './components/PhonebookList'
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then((response) => {
      setPersons(response.data)
    })
  }, [])
  
  const [filteredPerson, setFilteredPersons] = useState(persons)
  
  const addNewName = (event) => {
    setNewName(event.target.value)
  }

  const addNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const filterFunction = (event) => {
    filterName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const person = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    if(Object.values(persons).some(person => person.name === newName)) {
      window.alert(`${newName} already added to phonebook. Try a different person.`)
    } else {
      setPersons(persons.concat(person))
    }

    setNewName('')
    setNewNumber('')
  }

  const filterName = (name) => {
    const lowerCaseName = name.toLowerCase();

    const newList = persons.filter(person => person.name.toLowerCase() === lowerCaseName);

    setFilteredPersons(newList);
  }


  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filterFunc={filterFunction} />
      <Form submitFunc={addName} nameValue={newName} setNameFunc={addNewName} numberValue={newNumber} setNumberFunc={addNewNumber} />
      <PhonebookList persons={filteredPerson}/>
    </div>
  )
}

export default App