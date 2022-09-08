// import charts
import React from 'react'

// iùport Recharts
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';

// import perso
import "./style.scss"


function PieAnalytics({datas})
{

    console.log(datas.score || datas.todayScore)
    
    // je récupere le score et je sort un % de 0 à 100
    let score = datas.score * 100 || datas.todayScore * 100

    // je crée l'opposé du score de 100 à 0
    let antiScore = 100 - score
  
    // je crée un tableau avec le % de l'utilisateur et sa différence
    const data = [
        { name: "Group A", value: score },
        { name: "Group B", value: antiScore }
      ]

    // couleur rouge et couleur gris clair
    const COLORS = ["#FF0000", "#FBFBFB"]

    return (
        <div className="h-100 analityc-box">

            <div className='scrore-title'>Score</div>

            <div className='scrore-count'>

                <div className='score-percent'>{score} %</div>
                <div className='score-text'>
                    de votre
                    <br/>
                    objectif
                </div>

            </div>

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

                    {/* <Label value={labelChild} className='label-line' position="center"></Label> */}

                    {
                        data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))
                    }
                </Pie>
              
            </PieChart>
        
        </div>
    )
}

export default PieAnalytics