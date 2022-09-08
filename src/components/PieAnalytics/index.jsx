// import charts
import React from 'react'

// iùport Recharts
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// import perso
import "./style.scss"


function PieAnalytics({datas})
{

    console.log(datas.score || datas.todayScore)
    
    let score = datas.score * 100 || datas.todayScore * 100
    console.log(score)

    let antiScore = 100 - score
    console.log(antiScore)

    // const data = [
    //     { name: 'A1', value: score},
    //     { value: antiScore },
    
    // ];

    const data = [
        { name: "Group A", value: score },
        { name: "Group B", value: antiScore },
        
      ]

    const COLORS = ["#FF0000", "#FFF"]

    // UserMainDatas.todayScore * 100 || UserMainDatas.score * 100
    return (
        <div className="h-100 analityc-box">

            <PieChart width={300} height={300}>

                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                </Pie>
              
            </PieChart>
        
        </div>
    )
}

export default PieAnalytics