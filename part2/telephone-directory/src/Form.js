import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                Name:
                <input
                    onChange={props.handleNameChange}
                    value={props.newPerson.name}
                    name="name" />
            </div>
            <div>
                Number:
                <input
                    onChange={props.handleNumberChange}
                    value={props.newPerson.number}
                    name="number" />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form