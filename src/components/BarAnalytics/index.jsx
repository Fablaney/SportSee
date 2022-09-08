// import charts
import React from 'react'

// iùport Recharts
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import perso
import "./style.scss"

function BarAnalytics({datas})
{
    return (
        <div className="bar-box">

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

                    <Bar dataKey="kilogram" fill="#282D30" />
                    <Bar dataKey="calories" fill="#E60000" />

                </BarChart>
            </ResponsiveContainer>
                            
        </div>
    )
}

export default BarAnalytics