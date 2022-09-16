// import react
import React, {useState, useEffect} from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'

// lecture des données
import axios from 'axios'

// import charts
import BarAnalytics from "../BarAnalytics"
import LineAnalytic from "../LineAnalytic"
import PerformanceAnalytic from "../PerformanceAnalytic"
import PieAnalytics from "../PieAnalytics"

// import perso
import "./style.scss"
import Informations from "../Informations"
import Loader from '../Loader'
import User from '../../models/user'

/**
 * @component
 * @description Render of the dashboard, he call the others components inside, informations, barchart, linechart, radarchart, piechart
 * @function Dashboard
 * @param {*}
 * @returns {jsx}
 */
function Dashboard()
{
    const { id } = useParams()

    // j'initialise un state data et state data met à jour datas
    const [userDatas, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    const [error, setError] = useState(false)

    useEffect(()=> {
        axios.get('http://localhost:3000/user/'+ id).then( function(response)
        {
            // console.log(response.data.data)

            setDatas(new User(response.data.data))

            // let user = new User(response.data.data)
            // console.log(user)
            console.log(userDatas)

            setLoading(false)

            // console.l og(isLoading)
        })
        .catch((error) => {
            // console.log(error)
            setError(true);
            
        })
    }, [])

    if( error === true)
    {
        return <Navigate to="/Error" />
    }

    return (
        <div className="">
            {
                isLoading === true ? 
                
                <h1 className='titre-dashboard mb-5'>Bonjour <Loader/></h1>
                :
                <h1 className='titre-dashboard mb-5'>Bonjour <span className="firstname">{userDatas.userInfos.firstName}</span></h1>
            }


            <p className="mb-5">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="row">

                {/* block gauche */}
                <div className="col-lg-9">

                    {/* graphique barres */}
                    <div className="graphique mb-5 p-4">
               
                        <div className="d-flex">
                            <div className="me-auto">Activité quotidienne</div>
                            <div className="px-3  d-flex align-items-center"><div className="point-rouge"></div>&nbsp; Poids (kg)</div>
                            <div className="d-flex align-items-center"><div className="point-noir"></div>&nbsp; Calories brûlées (kCal)</div>
                        </div>

                        {/* bars */}
                        <BarAnalytics id={id} ></BarAnalytics>

                    </div>

                    {/* 3 blocks */}
                    <div className="donnees gap-2">

                        {/* line */}
                        <LineAnalytic id={id}></LineAnalytic>

                        {/* radar */}
                        <PerformanceAnalytic id={id}></PerformanceAnalytic>

                        {/* radial bar */}
                        <PieAnalytics id={id}></PieAnalytics>

                    </div>

                </div>

                {/* bloc droit */}
                {
                    isLoading === true ? 
                    <Loader />
                    :
                    <Informations datas={userDatas}></Informations>
                }

            </div>
        </div>
    )
}

export default Dashboard
