// import react
import React, {useState, useEffect} from 'react'

// lecture des données
import axios from 'axios'

// import charts
import BarAnalytics from "../BarAnalytics"
import LineAnalytic from "../LineAnalytic"
import PerformanceAnalitic from "../PerformanceAnalitic"
import PieAnalytics from "../PieAnalytics"

// import perso
import "./style.scss"
import Informations from "../Informations"
import Loader from '../Loader'

import GetUserDatas from '../../api/api'

function Dashboard({id})
{
    // j'initialise un state data et state data met à jour datas
    // const [userDatas, setDatas] = useState({})

    // const [isLoading, setLoading] = useState(true)

    // useEffect(()=> {
    //     axios.get('http://localhost:3000/user/'+ id).then( function(response)
    //     {
    //         // console.log(response.data.data)

    //         setDatas({...response.data.data})

    //         // console.log(userDatas)

    //         setLoading(false)

    //         console.log(isLoading)
    //     })
    // }, [])

    console.log(id)
    GetUserDatas(id)
    console.log(userDatas)

    return (
        <div className="">
            {
                isLoading === true ? 
                
                <h1 className='titre-dashboard mb-5'>Bonjour <Loader></Loader></h1>
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
                        <PerformanceAnalitic id={id}></PerformanceAnalitic>

                        {/* radial bar */}
                        <PieAnalytics id={id}></PieAnalytics>

                    </div>

                </div>

                {/* bloc droit */}
                {
                    isLoading === true ? 
                    <Loader></Loader>
                    :
                    <Informations datas={userDatas}></Informations>
                }

            </div>
        </div>
    )
}

export default Dashboard