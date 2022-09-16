import axios from "axios"

/**
 * 
 * @param {string} id 
 * @returns {promise}
 */
const fetchActivity = (id) => {
    return axios.get('http://localhost:3000/user/'+ id +'/activity')
}


export {fetchActivity}