import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const get = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = (person) => {
    return axios.post(baseUrl, person).then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { get, create, remove }