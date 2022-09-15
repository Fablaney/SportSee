// import react
import React, {useState, useEffect} from 'react'

// lecture des données
import axios from 'axios'

// import Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"
import Loader from '../Loader'

/**
 * @component
 * @description Render of the performances in the Radar Chart
 * @function PerformanceAnalytic
 * @param {*}
 * @returns {jsx}
 */
function PerformanceAnalytic({ id })
{
    // j'initialise un state data et state data met à jour datas
    const [performance, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        axios.get('http://localhost:3000/user/'+ id +'/performance').then( function(response)
        {
            // console.log(response.data.data)

            setDatas({...response.data.data})

            // console.log(performance)

            setLoading(false)

            // console.log(isLoading)
        })
    }, [])

    /**
     * @description Render kinds in news tab, used in parameter of PolarAngleAxis
     * @function kinds
     * @param {*} kind 
     * @returns 
     */
    // je créer un tableau pour les kinds
    function kinds(kind)
    {
        const kindsTab = [  'cardio',
                            'energy',
                            'endurance',
                            'strength',
                            'speed',
                            'intensity'
        ]
        return kindsTab[+kind -1];
    }
 
    if( isLoading === true )
    {
        return(
            <div className="radar-box rounded mb-4">
                <Loader></Loader>
            </div>
        )
    }
    else
    {
        return(
            <div className="radar-box rounded mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={performance.data}
                    >
                        <PolarGrid 
                            radialLines={false}
                        />

                        <PolarAngleAxis
                            dataKey="kind"
                            tickFormatter={kinds}
                            stroke={`#fff`}
                            dy={4}
                            tickLine={false}
                            style={{
                            fontSize: '12px',
                            }}
                        />

                        <Radar 
                            dataKey="value" 
                            fill={`#ff0000`}
                            fillOpacity={0.7}
                        />

                    </RadarChart>

                </ResponsiveContainer>
            </div>
        )
    }
}

export default PerformanceAnalytic