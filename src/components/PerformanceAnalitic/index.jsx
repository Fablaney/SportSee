// import charts
import React, {useState, useEffect} from 'react'

// lecture des données
import axios from 'axios'

// import Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"

function PerformanceAnalitic({ id })
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

    return (
        <div className="h-100 analityc-box">
            {
                isLoading === true ? <div className="chargement">Chargement</div>
                :
                <ResponsiveContainer>
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={performance.data}
                    >
                        <PolarGrid 
                        
                        />

                        <PolarAngleAxis
                            dataKey="kind"
                        />

                        <PolarRadiusAxis
                            angle={90}
                            domain={[0, 150]}
                        />
                        
                        <Radar 
                            dataKey="value" 
                            fill="#ff0101" 
                            fillOpacity={0.5} 
                        />
        
                    </RadarChart>

                </ResponsiveContainer>
            } 
        </div>
    )
}

export default PerformanceAnalitic