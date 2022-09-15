// import reacr
import { Link } from 'react-router-dom'

// import perso
import yoga from '../../assets/yoga.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/bike.png'
import poids from '../../assets/poids.png'
import "./style.scss"

/**
 * @component
 * @description Render of the Footer
 * @function footer
 * @param {*}
 * @returns {jsx}
 */
function Footer()
{
    return (
        <footer className='d-flex justify-content-center align-items-center flex-column'>

            <Link to="/">
                <img className='icones' src={yoga} alt="" /> 
            </Link>
            <Link to="/">
                <img className='icones' src={swim} alt="" /> 
            </Link>
            <Link to="/">
                <img className='icones' src={bike} alt="" /> 
            </Link>
            <Link to="/">
                <img className='icones' src={poids} alt="" /> 
            </Link>

            <div className="copyright">Copiryght, SportSee 2020</div>

        </footer>
    )
}

export default Footer