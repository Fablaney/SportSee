import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Connexion à l'api et récuperation des données
/**
 * @function getUserDatas
 * @param {*} id 
 */
function GetUserDatas(id)
{
    // j'initialise un state data et state data met à jour datas
    const [userDatas, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        axios.get('http://localhost:3000/user/'+ id).then( function(response)
        {
            console.log(response.data.data)

            setDatas({...response.data.data})

            console.log(userDatas)

            setLoading(false)

            console.log(isLoading)
        })
    }, [])

    return userDatas
}

export default GetUserDatas