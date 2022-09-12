// import charts
import React, {useState, useEffect} from 'react'

// lecture des données
import axios from 'axios'

// import Recharts
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts'

// import perso
import "./style.scss"
import { render } from '@testing-library/react'

function LineAnalytic({ id })
{
    // j'initialise un state data et state data met à jour datas
    const [average, setDatas] = useState({})

    // initialisation du loader
    const [isLoading, setLoading] = useState(true)

    // récuperation des données avec "id" passé en parametre
    useEffect(()=> {
        axios.get('http://localhost:3000/user/'+ id +'/average-sessions').then( function(response)
        {
            // console.log(response.data.data)

            setDatas({...response.data.data})

            // console.log(average)

            setLoading(false)

            // console.log(isLoading)
        })
    }, [])

    // personnalisation du tooltip
    function AverageSessionsChartTooltip({ active, payload })
    {
        if (active)
        {
            return <p className='averageSessionsTooltip'>{`${payload[0].value} `} min</p>
        }
        return null
    }

    // je créer un tableau pour les jours de la semaine
    const daysTab = ["L", "M", "M", "J", "V", "S", "D"]

    // je parcours ce tableau
    const days = daysTab.forEach((index, jour) =>
    {
        return( <span key={index}>{jour}</span> )
    })
   
    // tant qu'on à pas récupéré les données
    if(isLoading === true)
    {
        return (
            <div className="analityc-box container-averageSessionsChart">      
                <div className="chargement">Chargement</div>
            </div>
        )
    }
    else
    {
        return (
            <div className="analityc-box container-averageSessionsChart">

                <h4 className='average-session-title'>Durée moyenne des sessions</h4>

                <LineChart
                    width={320}
                    height={400}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    data={average.sessions}
                >

                    <XAxis
                        axisLine={false}
                        tickLine={false}
                        dataKey='days'
                        stroke='rgba(255, 255, 255, 0.5)'
                        tick={{ fontSize: 12 }}
                        minTickGap={3}
                    />

                    <YAxis
                        hide={true}
                        domain={['dataMin -40', 'dataMax +30']}
                        tickLine={false}
                        type="number"
                    />

                    <Tooltip content ={<AverageSessionsChartTooltip/>}/>

                    <Line
                        dataKey='sessionLength'
                        type='monotone'
                        stroke='rgba(255, 255, 255, 0.5)'
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: 'rgba(255, 255, 255, 0.5)',
                            strokeWidth: 10,
                            r: 5,
                        }}
                    />

                </LineChart>

                <div className="days">{days}</div>

            </div>
        )
    }
}

export default LineAnalytic