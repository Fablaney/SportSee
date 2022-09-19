// import react
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

// import Recharts
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// import perso
import "./style.scss"
import Loader from '../Loader'
import { fetchUsermainDatas } from '../../api/api'
import User from '../../models/user';

/**
 * @component
 * @description Render of the score in Pie Chart
 * @function PieAnalytics
 * @param {string} id
 * @returns {jsx}
 */
function PieAnalytics({ id })
{
    // initialize a state data and state loading and get the datas
    const [userDatas, setDatas] = useState({})
    
    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {

        fetchUsermainDatas(id).then((response)=> {

            setDatas(new User(response.data.data))

            setLoading(false)
        })

    }, [])

    // get the score and out the % between 0 and 100
    let score = userDatas.score * 100 || userDatas.todayScore * 100

    // create difference between score and 100, ex: 100 - score 30 = antiscore = 70
    let antiScore = 100 - score
  
    // create tab with score and difference between 100
    const data = [
        { name: "Group A", value: score },
        { name: "Group B", value: antiScore }
      ]

    // color red and smoke
    const COLORS = ["#FF0000", "#FBFBFB"]

    // if the datas not loaded
    if(isLoading == true)
    {
        return (
            <div className="score-box rounded mb-4">

                <Loader />

            </div>
        )
    }
    // if all OK
    else
    {
        return (
            <div className="score-box rounded mb-4">

                <div className='scrore-title'>Score</div>

                <div className='scrore-count'>
    
                    <div className='score-percent'>{score} %</div>
                    <div className='score-text'>
                        de votre
                        <br/>
                        objectif
                    </div>
    
                </div>

                <ResponsiveContainer width="100%" height="100%">

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
                            {
                                data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        cornerRadius={50}
                                    />
                                ))
                            }
                        </Pie>
                    
                    </PieChart>

                </ResponsiveContainer>

            </div>
        )
    }
}

export default PieAnalytics

PieAnalytics.propTypes = {
    id: PropTypes.string.isRequired
}