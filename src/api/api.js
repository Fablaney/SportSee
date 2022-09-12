import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Connexion à l'api et récuperation des données

// function getActivity({id})
// {
//     // j'initialise un state data et state data met à jour datas
//     const [activity, setDatas] = useState({})

//     const [isLoading, setLoading] = useState(true)

//     useEffect(()=> {
//         axios.get('http://localhost:3000/user/'+ id +'/activity').then( function(response)
//         {
//             // console.log(response.data.data)

//             setDatas({...response.data.data})

//             console.log(activity)
//             // console.log(isLoading)
//             setLoading(false)

//             console.log(isLoading)
//         })
//     }, [])
// }
// export default getActivity()