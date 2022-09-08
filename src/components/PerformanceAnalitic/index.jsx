// import charts
import React from 'react';

// iùport Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"

function PerformanceAnalitic({datas})
{
    return (
        <div className="h-100 analityc-box">

            <ResponsiveContainer>
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={datas.data}
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
                
        </div>
    )
}

export default PerformanceAnalitic