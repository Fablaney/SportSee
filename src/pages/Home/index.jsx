import "./style.scss"
import Footer from "../../components/Footer"

function Home()
{
    return (
        <div className="d-flex align-items-center">

            <Footer></Footer>

            <div className='container-xl test'>
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
            </div>

        </div>
    )
}

export default Home