import axios from 'axios';

const url = 'http://localhost:3001/persons';

export const getAllPersons = () => {
    return axios.get(url).then(resp => resp.data);
}

export const createNewPerson = (newPerson) => {
    return axios.post(url, newPerson).then(resp => resp.data);
}

export const updatePerson = (id, updatedPerson) => {
    return axios.put(`${url}/${id}`, updatedPerson).then(resp => resp.data);
}

export const deletePerson = (id) => {
    return axios.delete(`${url}/${id}`).then(resp => resp.data);
}