// import charts
import React, {useState, useEffect} from 'react'

// lecture des données
import axios from 'axios'

// import Recharts
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts'

// import perso
import "./style.scss"
import Loader from '../Loader'


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
    function days(day)
    {
        const daysTab = ["L", "M", "M", "J", "V", "S", "D"]
        return daysTab[+day -1];
    }

    // tant qu'on à pas récupéré les données
    if(isLoading === true)
    {
        return (
            <div className="line-box rounded mb-4">
                <Loader></Loader>
            </div>
        )
    }
    else
    {
        return (
            <div className="line-box rounded mb-4">

                <h4 className='average-session-title'>Durée moyenne des sessions</h4>

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart
                        width={400}
                        height={100}
                        margin={{ top: 60, right: 10, bottom: 0, left: 10 }}
                        data={average.sessions}
                    >
                        <XAxis
                            dataKey="day"
                            tickFormatter={days}
                            stroke="white"
                            opacity={0.5}
                        />

                        <YAxis
                            dataKey='sessionLength'
                            hide={true}
                        />

                        <Tooltip content={<AverageSessionsChartTooltip/>}/>

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

                </ResponsiveContainer>

            </div>
        )
    }
}

export default LineAnalytic