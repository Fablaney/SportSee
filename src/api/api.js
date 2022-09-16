import axios from "axios"

/**
 * return user mains datas
 * @param {string} id 
 * @returns {promise}
 */
const fetchUsermainDatas = (id) => {
    return axios.get('http://localhost:3000/user/'+ id)
}

/**
 * return user activity
 * @param {string} id 
 * @returns {promise}
 */
 const fetchActivity = (id) => {
    return axios.get('http://localhost:3000/user/'+ id +'/activity')
}

/**
 * return user average sessions
 * @param {string} id 
 * @returns {promise}
 */
 const fetchAverageSessions = (id) => {
    return axios.get('http://localhost:3000/user/'+ id +'/average-sessions')
}

/**
 * return user performances
 * @param {string} id 
 * @returns {promise}
 */
 const fetchPerformance = (id) => {
    return axios.get('http://localhost:3000/user/'+ id +'/performance')
}

export { fetchUsermainDatas, fetchActivity, fetchAverageSessions, fetchPerformance }