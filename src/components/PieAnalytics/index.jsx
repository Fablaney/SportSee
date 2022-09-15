// import react
import React, {useState, useEffect} from 'react'

// lecture des données
import axios from 'axios'

// import Recharts
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';

// import perso
import "./style.scss"
import Loader from '../Loader';

/**
 * @component
 * @description Render of the score in Pie Chart
 * @function PieAnalytics
 * @param {*}
 * @returns {jsx}
 */
function PieAnalytics({id})
{
    // j'initialise un state data et state data met à jour datas
    const [userDatas, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        axios.get('http://localhost:3000/user/'+ id).then( function(response)
        {
            // console.log(response.data.data)

            setDatas({...response.data.data})

            // console.log(userDatas)

            setLoading(false)

            // console.log(isLoading)
        })
    }, [])

    // je récupere le score et je sort un % de 0 à 100
    let score = userDatas.score * 100 || userDatas.todayScore * 100

    // je crée l'opposé du score de 100 à 0
    let antiScore = 100 - score
  
    // je crée un tableau avec le % de l'utilisateur et sa différence
    const data = [
        { name: "Group A", value: score },
        { name: "Group B", value: antiScore }
      ]

    // couleur rouge et couleur gris clair
    const COLORS = ["#FF0000", "#FBFBFB"]

    if(isLoading == true)
    {
        return (
            <div className="score-box rounded mb-4">

                <Loader></Loader>

            </div>
        )
    }
    else
    {
        return (
            <div className="score-box rounded mb-4">

                <div className='scrore-title'>Score</div>

                <div className='scrore-count'>
    
                    <div className='score-percent'>{score} %</div>
                    <div className='score-text'>
                        de votre
                        <br/>
                        objectif
                    </div>
    
                </div>

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart width={300} height={300}>

                        <Pie
                            data={data}
                            innerRadius={85}
                            outerRadius={100}
                            paddingAngle={0}
                            dataKey="value"
                            startAngle={180}
                            endAngle={-360}
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        cornerRadius={50}
                                    />
                                ))
                            }
                        </Pie>
                    
                    </PieChart>

                </ResponsiveContainer>
            </div>
        )
    }
   
}

export default PieAnalytics