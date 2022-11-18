import { useState, useEffect } from 'react'
import { Filter } from './components/Filter'
import { Form } from './components/Form'
import { Notification } from './components/Message';
import { PhonebookList } from './components/PhonebookList'
import { createNewPerson, deletePerson, getAllPersons } from './services/phones';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPerson, setFilteredPersons] = useState(persons);
  const [message, setMessage] = useState({message: 'some error happened', isError: true});
  
  useEffect(() => {
    getAllPersons().then(resp => { setPersons(resp); setFilteredPersons(resp)})
  }, [])

  const deleteNumber = (event) => {
    if(window.confirm('Delete person?')) {
      deletePerson(Number(event.target.id)).then(() => getAllPersons().then(resp => setFilteredPersons(resp)))
    }
  }
  
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
      createNewPerson(person).then(() => {
        getAllPersons().then(resp => setFilteredPersons(resp));
        setMessage({
          message: `Added ${person.name}`,
          isError: false
        })
      })
    }

    setNewName('')
    setNewNumber('')
  }

  const filterName = (name) => {
    const lowerCaseName = name.toLowerCase();

    const newList = persons.filter(person => person.name.toLowerCase().includes(lowerCaseName));

    setFilteredPersons(newList);
  }


  return (
    <div>
      <h2>PhoneBook</h2>
      <Notification message={message.message} isError={message.isError} />
      <Filter filterFunc={filterFunction} />
      <Form submitFunc={addName} nameValue={newName} setNameFunc={addNewName} numberValue={newNumber} setNumberFunc={addNewNumber} />
      <PhonebookList persons={filteredPerson} deleteFunction={deleteNumber}/>
    </div>
  )
}

export default App