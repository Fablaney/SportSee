import { useParams } from "react-router-dom"

// import perso
import "./style.scss"
import Dashboard from "../../components/Dashboard"

function Profil()
{
    // je récupere l'id passée en parametre de l'url /profil/:id
    const { id } = useParams()

    return (
        <div className="d-flex align-items-center">

            <div className='container-xl'>

                <h1 className=''>Profil</h1>

                {/* j'appelle le dashboard et je lui passe l'id en parametre */}
                <Dashboard id={id}></Dashboard>

            </div>

        </div>
    )
}

export default Profil