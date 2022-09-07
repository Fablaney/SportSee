import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import "./style.scss"

function Error()
{
    return (
        <div className="d-flex align-items-center">

            <Footer></Footer>
       
            <div className="container text-center">
          
                <div className="error-number">404</div>

                <h1 className="error-title">Oups! La page que vous demandez n'existe pas.</h1>

                <Link to="/">

                    <div className="error-link">Retourner sur la page d’accueil</div>

                </Link>

            </div>
        </div>
    )
}

export default Error