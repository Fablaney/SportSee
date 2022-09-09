import React from "react"

// import charts
import BarAnalytics from "../BarAnalytics"
import LineAnalytic from "../LineAnalytic"
import PerformanceAnalitic from "../PerformanceAnalitic"
import PieAnalytics from "../PieAnalytics"


// import perso
import "./style.scss"
import Informations from "../Informations"

// datas
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE }  from "../../api/data.js"

function Dashboard({id})
{
    // Je récupere les datas de l'user dont l'id est == id
    let UserMainDatas = USER_MAIN_DATA.find((user) => user.id == id)
    let UserActivity = USER_ACTIVITY.find((user) => user.userId == id)
    let UserAverageSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId == id)
    let UserPerformance = USER_PERFORMANCE.find((user) => user.userId == id)

    // console.log(UserMainDatas)
    // console.log(UserActivity)
    // console.log(UserAverageSessions)
    // console.log(UserPerformance)

    console.log( )

    return (
        <div className="">

            <h1 className='titre-dashboard mb-5'>Bonjour <span className="firstname">{UserMainDatas.userInfos.firstName}</span></h1>

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
                        <div className="col rounded line-box">

                            {/* <div className='line-text'>Durée moyenne des sessions</div> */}

                            <LineAnalytic datas={UserAverageSessions}></LineAnalytic>

                        </div>

                        {/* radar */}
                        <div className="col rounded radar">
                            <PerformanceAnalitic datas={UserPerformance}></PerformanceAnalitic>
                        </div>

                        {/* radial bar */}
                        <div className="col rounded kpi">
                            <PieAnalytics datas={UserMainDatas}></PieAnalytics>
                        </div>

                    </div>

                </div>

                {/* bloc droit */}
                <Informations datas={UserMainDatas}></Informations>
                
            </div>
        </div>
    )
}

export default Dashboard