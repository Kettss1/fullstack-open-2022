import { useState, useEffect } from 'react'
import { Filter } from "./components/Filter";
import axios from 'axios';
import { Message } from './components/Message';
import { Countries } from './components/Countries';
import { Country } from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
          .then((response) => setCountries(response.data));
  }, []);
  
  const filterCountries = (filter) => {
    setFilteredCountries(countries);

    const lowerCaseFilter = filter.toLowerCase();

    const newFilteredList = countries.filter(country => country.name.common.toLowerCase().includes(lowerCaseFilter));

    setFilteredCountries(newFilteredList);

    console.log(newFilteredList);
  }

  return (
    <>
      <Filter filterFunc={(event) => filterCountries(event.target.value)}/>
      {filteredCountries.length === 0 ? (
        <Message message={'Add a filter to show countries'}/> 
      ) : (
        <>
          {filteredCountries.length === 1 ? (
            <Country country={filteredCountries[0]}/>
          ) : (
            <>
              {filteredCountries.length > 10 ? (
                <Message message={'Too many matches, specify another filter'}/> 
              ) : (
                <Countries countriesList={filteredCountries} />
              )}
            </>
          )}
        </>

      )}
    </>

  );
}

export default App;
