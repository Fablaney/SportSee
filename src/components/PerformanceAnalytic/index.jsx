// import react
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

// import Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"
import Loader from '../Loader'
import { fetchPerformance } from '../../api/api'
import UserPerformances from '../../models/performance'

/**
 * @component
 * @description Render of the performances in the Radar Chart
 * @function PerformanceAnalytic
 * @param {string} id
 * @returns {jsx}
 */
function PerformanceAnalytic({ id })
{
    // initialize a state data and state loading and get the datas
    const [performance, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {

        fetchPerformance(id).then((response)=> {

            setDatas(new UserPerformances(response.data.data))

            setLoading(false)
        })

    }, [])

    /**
     * @description Render kinds in news tab, used in parameter of PolarAngleAxis
     * @function kinds
     * @param {*} kind 
     * @returns 
     */
    // create kind tab for convert the indexs in words
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

    // if the datas not loaded
    if( isLoading === true )
    {
        return(
            <div className="radar-box rounded mb-4">
                <Loader />
            </div>
        )
    }
    // if all OK
    else
    {
        return (
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

PerformanceAnalytic.propTypes = {
    id: PropTypes.string.isRequired
}