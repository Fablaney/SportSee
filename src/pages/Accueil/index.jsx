import { Link } from "react-router-dom"

// import perso
import "./style.scss"

// datas
import { USER_MAIN_DATA }  from "../../api/data.js"

function Accueil()
{
    // USER_MAIN_DATA.map(user => {
    //     console.log(user.id)
    //     console.log(user.userInfos.firstName)
    // })

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