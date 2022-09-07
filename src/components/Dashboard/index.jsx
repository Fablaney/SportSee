import React from "react";
import calories from '../../assets/calories-icon.png'
import proteines from '../../assets/proteines-icon.png'
import glucides from '../../assets/glucides-icon.png'
import lipides from '../../assets/lipides-icon.png'
// import { useParams } from "react-router-dom"

// import perso
import "./style.scss"

// datas
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE }  from "../../api/data.js"

function Dashboard({id})
{
    // Je récupere les datas de l'user dont l'id est == id
    let currentUserMainDatas = USER_MAIN_DATA.find((user) => user.id == id)
    let currentUserActivity = USER_ACTIVITY.find((user) => user.userId == id)
    let currentUserAverageSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId == id)
    let currentUserPerformance = USER_PERFORMANCE.find((user) => user.userId == id)

    // console.log(currentUserMainDatas)
    // console.log(currentUserActivity)
    // console.log(currentUserAverageSessions)
    // console.log(currentUserPerformance)

    // const house = Data.find((item) => item.id === id)

    return (
        <div className="test">

            <h1 className='titre-dashboard mb-5'>Bonjour <span className="firstname">{currentUserMainDatas.userInfos.firstName}</span></h1>

            <p className="mb-5">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            {/* layaout */}
            <div className="row">

                {/* block gauche */}
                <div className="col-9">

                    {/* graphique */}
                    <div className="graphique mb-5 p-4 test ">

                        <div className="d-flex">
                            <div className="me-auto">Activité quotidienne</div>
                            <div className="pr-2">Poids (kg)</div>
                            <div>Calories brûlées (kCal)</div>
                        </div>

                    </div>

                    {/* 3 blocks */}
                    <div className="d-flex justify-content-between donnes">
                        <div className="col test">courbe</div>
                        <div className="col test">hexagone</div>
                        <div className="col test">score</div>
                    </div>

                </div>

                {/* bloc droit */}
                {/* colonne 4 données */}
                <div className="col-3 colonne-droite">

                    <div className="d-flex justify-content-evenly align-items-center mb-5">

                        <img className="" src={calories} alt="" />

                        <div>
                            <div className="count">{currentUserMainDatas.keyData.calorieCount} kCal</div>
                            <div className="type">Calories</div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-evenly align-items-center mb-5">

                        <img className="" src={proteines} alt="" />

                        <div>
                            <div className="count">{currentUserMainDatas.keyData.proteinCount} g</div>
                            <div className="type">Proteines</div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-evenly align-items-center mb-5">

                        <img className="" src={glucides} alt="" />

                        <div>
                            <div className="count">{currentUserMainDatas.keyData.carbohydrateCount} g</div>
                            <div className="type">Glucides</div>
                        </div>
                        
                    </div>

                    <div className="d-flex justify-content-evenly align-items-center mb-5">

                        <img className="" src={lipides} alt="" />

                        <div>
                            <div className="count">{currentUserMainDatas.keyData.lipidCount} g</div>
                            <div className="type">Lipides</div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard