import { Person } from "./Person"

export const PhonebookList = ({ persons }) => {
    return (
        <>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <Person key={person.id  } person={person}/>
            ))}
        </>
    )
}