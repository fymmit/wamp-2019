import React from 'react'

const Numbers = (props) => {
    return (
        <div>
            <Header />
            <PersonList 
                persons={props.persons}
                deletePerson={props.deletePerson} />
        </div>
    )
}

const Header = () => {
    return (
        <h2>
            Numbers
        </h2>
    )
}

const PersonList = (props) => {
    const persons = props.persons.map(person => {
        return (
            <Person 
                name={person.name}
                number={person.number}
                key={person.id}
                id={person.id}
                deletePerson={props.deletePerson} />
        )
    })
    return (
        <table>
            {persons}
        </table>
    )
}

const Person = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.number} 
            </td>
            <td>
                <DeleteButton 
                    id={props.id}
                    deletePerson={props.deletePerson} />
            </td>
        </tr>
    )
}

const DeleteButton = (props) => {
    return (
        <button onClick={() => props.deletePerson(props.id)}>Delete</button>
    )
}

export default Numbers