// import react
import React from "react";
import { NavLink } from "react-router-dom";

// import perso
import Logo from '../../assets/logo.png'
import "./style.scss"

/**
 * @component
 * @description Render of the Header
 * @function Header
 * @param {*}
 * @returns {jsx}
 */
function Header()
{
    return (
        <header className='d-flex align-items-center'>
         
            <nav className='w-100 d-flex justify-content-around align-items-center'>
      
                <NavLink className="nav-link" to="/">
                    <img className='accueillogo' src={Logo} alt="" />
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? "nav-link active": "nav-link"} to="/">
                    Accueil
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? "nav-link active": "nav-link"} to="/profil">
                    Profil
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? "nav-link active": "nav-link"} to="/reglages">
                    Reglages
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? "nav-link active": "nav-link"} to="/communaute">
                    Communaute
                </NavLink>

            </nav>
         
        </header>
    )
}
    
export default Header