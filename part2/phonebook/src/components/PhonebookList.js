import { Person } from "./Person"

export const PhonebookList = ({ persons, deleteFunction }) => {
    return (
        <>
            <h2>Numbers</h2>
            {persons?.map((person) => (
                <div key={person.id}>
                    <Person person={person} deleteFunction={deleteFunction}/>
                    <button id={person.id} onClick={deleteFunction}>delete</button>
                </div>
            ))}
        </>
    )
}