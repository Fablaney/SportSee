// import charts
import React, {useState, useEffect} from 'react'

import axios from 'axios'

// iùport Recharts
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import perso
import "./style.scss"

function BarAnalytics({ id})
{
    // j'initialise un state data et state data met à jour datas
    const [datas, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        axios.get('http://localhost:3000/user/'+ id +'/activity').then( function(response)
        {
            // console.log(response.data.data)

            setDatas({...response.data.data})

            console.log(datas)
            // console.log(isLoading)
            setLoading(false)

            console.log(isLoading)
        })
    }, [])
    
    return (     
        <div className="bar-box">
            {
                isLoading === true ? <div>Chargement</div>
                :
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={datas.sessions}
                        margin={{
                            top: 40,
                            right: 10,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="day" />

                        <YAxis />

                        <Tooltip />

                        {/* <Legend /> */}

                        <Bar dataKey="kilogram" fill="#282D30"/>
                        <Bar dataKey="calories" fill="#E60000" />

                    </BarChart>
                </ResponsiveContainer>
            }
            
                            
        </div>
    )
    
   
}

export default BarAnalytics