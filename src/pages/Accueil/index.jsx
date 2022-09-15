// import react
import React from 'react'
import { Link } from "react-router-dom"

// import perso
import "./style.scss"

// datas
import { USER_MAIN_DATA }  from "../../api/data.js"

/**
 * Render of Accueil page
 * @function Accueil
 * @param {*}
 * @returns {jsx}
 */
function Accueil()
{
    return (
        <div className="d-flex align-items-center page">

            <div className='container-xl'>

                <h1>Accueil</h1> 

                {
                    USER_MAIN_DATA.map(user => (
                        <Link className='d-block lien-card' to={`/profil/${user.id}`} key={user.id} >
                            Voir le profil de {user.userInfos.firstName}
                        </Link>
                    ))
                }

            </div>

        </div>
    )
}

export default Accueil