import React, { Component } from 'react'
import Numbers from './Numbers'
import Form from './Form'
import personService from './services/persons'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			persons: [],
			newPerson: {
				name: '',
				number: ''
			},

		}
	}

	componentDidMount() {
		personService.get().then(persons => {
			this.setState({ persons })
		})
	}

	render() {
		return (
			<div>
				<h2>Telephone Directory</h2>
				<Form
					addPerson={this.addPerson}
					handleNameChange={this.handleNameChange}
					handleNumberChange={this.handleNumberChange}
					newPerson={this.state.newPerson} />
				<Numbers
					deletePerson={this.deletePerson}
					persons={this.state.persons} />
		  </div>
		)
	}

	addPerson = (event) => {
		event.preventDefault()
		if (!this.state.persons.find(person => person.name === this.state.newPerson.name)) {
			personService.create(this.state.newPerson).then(person => {
				let persons = this.state.persons.concat(person)
				this.setState({ 
					persons,
					newPerson: {
						name: '',
						number: ''
					}
				})
			})
		} else {
			alert("Person you're trying already exists in the directory.")
		}
	}

	handleNameChange = (event) => {
		this.setState({
			newPerson: {
				name: event.target.value,
				number: this.state.newPerson.number
			}
		})
	}

	handleNumberChange = (event) => {
		this.setState({
			newPerson: {
				name: this.state.newPerson.name,
				number: event.target.value
			}
		})
	}

	deletePerson = (id) => {
		let persons = this.state.persons.filter(person => person.id !== id)
		personService.remove(id).then(response => {
			this.setState({
				persons
			})
		})
	}
}

export default App
