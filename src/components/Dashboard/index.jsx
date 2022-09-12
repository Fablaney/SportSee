// import charts
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

// datas
// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE }  from "../../api/data.js"

function Dashboard({id})
{
    // j'initialise un state data et state data met à jour datas
    const [userDatas, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        axios.get('http://localhost:3000/user/'+ id).then( function(response)
        {
            // console.log(response.data.data)

            setDatas({...response.data.data})

            // console.log(userDatas)

            setLoading(false)

            console.log(isLoading)
        })
    }, [])

    // Je récupere les datas de l'user dont l'id est == id
    // let UserMainDatas = USER_MAIN_DATA.find((user) => user.id == id)
    // let UserActivity = USER_ACTIVITY.find((user) => user.userId == id)
    // let UserAverageSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId == id)
    // let UserPerformance = USER_PERFORMANCE.find((user) => user.userId == id)

    // console.log(UserMainDatas)
    // console.log(UserActivity)
    // console.log(UserAverageSessions)
    // console.log(UserPerformance)

    // console.log("userDatas")
    // console.log(userDatas)

    return (
        <div className="">
            {
                isLoading === true ? <div className="chargement">Chargement</div>
                :
                <h1 className='titre-dashboard mb-5'>Bonjour <span className="firstname">{userDatas.userInfos.firstName}</span></h1>
            }

            <p className="mb-5">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="row">

                {/* block gauche */}
                <div className="col-9">

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
                    <div className="d-flex justify-content-between donnes gap-4">

                        {/* line */}
                        <div className="col-4 rounded line-box">

                            {/* <div className='line-text'>Durée moyenne des sessions</div> */}

                            <LineAnalytic id={id}></LineAnalytic>

                        </div>

                        {/* radar */}
                        <div className="col-4 rounded radar">
                            <PerformanceAnalitic id={id}></PerformanceAnalitic>
                        </div>

                        {/* radial bar */}
                        <div className="col-4 rounded kpi">
                           
                            <PieAnalytics id={id}></PieAnalytics>
                            
                        </div>

                    </div>

                </div>

                {/* bloc droit */}
                {
                    isLoading === true ? <div className="chargement">Chargement</div>
                    :
                    <Informations datas={userDatas}></Informations>
                }

            </div>
        </div>
    )
}

export default Dashboard