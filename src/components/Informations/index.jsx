// import react
import React from "react"

// import perso
import calories from '../../assets/calories-icon.png'
import proteines from '../../assets/proteines-icon.png'
import glucides from '../../assets/glucides-icon.png'
import lipides from '../../assets/lipides-icon.png'
import "./style.scss"

/**
 * @component
 * @description Render of the Right column
 * @function Informations
 * @param {*}
 * @returns {jsx}
 */
function Informations({datas})
{
    return (
        <div className="col-lg-3 colonne-droite">
     
            <div className="d-flex justify-content-evenly align-items-center mb-5">

                <img className="" src={calories} alt="" />

                <div>
                    <div className="count">{datas.keyData.calorieCount} kCal</div>
                    <div className="type">Calories</div>
                </div>

            </div>

            <div className="d-flex justify-content-evenly align-items-center mb-5">

                <img className="" src={proteines} alt="" />

                <div>
                    <div className="count">{datas.keyData.proteinCount} g</div>
                    <div className="type">Proteines</div>
                </div>

            </div>

            <div className="d-flex justify-content-evenly align-items-center mb-5">

                <img className="" src={glucides} alt="" />

                <div>
                    <div className="count">{datas.keyData.carbohydrateCount} g</div>
                    <div className="type">Glucides</div>
                </div>

            </div>

            <div className="d-flex justify-content-evenly align-items-center mb-5">

                <img className="" src={lipides} alt="" />

                <div>
                    <div className="count">{datas.keyData.lipidCount} g</div>
                    <div className="type">Lipides</div>
                </div>

            </div>

        </div>
    )
}

export default Informations