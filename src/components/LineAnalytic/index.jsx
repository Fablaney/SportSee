// import charts
import React from 'react'

// iùport Recharts
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"

function LineAnalytic({datas})
{
    return (
        <div className="analityc-box">

            <ResponsiveContainer>

                <LineChart className='LineChart'
                    width={500}
                    height={200}
                    data={datas.sessions}
                    margin={{
                        top: 70,
                        right: 10,
                        left: 10,
                        bottom: 5,
                    }}
                >

                    <XAxis dataKey="day" />

                    {/* <YAxis /> */}

                    <Tooltip />

                    <Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />

                </LineChart>
            </ResponsiveContainer>
                
        </div>
    )
}

export default LineAnalytic