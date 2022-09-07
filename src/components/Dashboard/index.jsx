import React from "react";
// import { useParams } from "react-router-dom"

// import perso
import "./style.scss"

// datas
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE }  from "../../api/data.js"

function Dashboard({id})
{
    console.log(id)
    console.log(USER_MAIN_DATA)

    let currentUser = USER_MAIN_DATA.find(user => user.id == id)

    console.log(currentUser)
    // console.log(currentUserDatas)

    // USER_MAIN_DATA.map((user) => {
    //     console.log(user)
    // })

    // USER_ACTIVITY.map((item) => {
    //     console.log(item)
    // })

    // USER_AVERAGE_SESSIONS.map((item) => {
    //     console.log(item)
    // })

    // USER_PERFORMANCE.map((item) => {
    //     console.log(item)
    // })

    

    // const house = Data.find((item) => item.id === id)

    return (
        <div className="test">

            <h1 className=''>Bonjour Thomas</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            {/* layaout */}
            <div className="row">

                {/* block gauche */}
                <div className="col-9">

                    {/* graphique */}
                    <div>Graphique</div>

                    {/* 3 blocks */}
                    <div className="d-flex justify-content-between">
                        <div>courbe</div>
                        <div>hexagone</div>
                        <div>score</div>
                    </div>

                </div>

                {/* bloc droit */}
                {/* colonne 4 données */}
                <div className="col-3 ">

                    <div>kCal</div>
                    <div>155gr</div>
                    <div>290gr</div>
                    <div>50gr</div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard