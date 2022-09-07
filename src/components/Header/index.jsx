import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import "./style.scss"

function Header()
{
    return (
        <header className='d-flex align-items-center'>
         
            <nav className='w-100 d-flex justify-content-around align-items-center'>

                <Link className='nav-link' to="/">
                    <img className='Accueillogo' src={Logo} alt="" />
                </Link>

                <Link className='nav-link' to="/">
                    Accueil
                </Link>

                <Link className='nav-link' to="/profil">
                    Profil
                </Link>

                <Link className='nav-link' to="/reglages">
                    Reglages
                </Link>

                <Link className='nav-link' to="/communaute">
                    Communaute
                </Link>

            </nav>
         
        </header>
    )
}
    
export default Header