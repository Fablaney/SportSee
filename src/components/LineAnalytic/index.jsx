// import react
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

// import Recharts
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"
import Loader from '../Loader'
import { fetchAverageSessions } from '../../api/api'
import UserSessions from '../../models/session'

/**
 * @component
 * @description Render of the average sessions in Line Chart
 * @function LineAnalytic
 * @param {string} id
 * @returns {jsx}
 */
function LineAnalytic({ id })
{
    // initialize a state data and state loading and get the datas
    const [average, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {

        fetchAverageSessions(id).then((response)=> {

            setDatas(new UserSessions(response.data.data))

            setLoading(false)

        })

    }, [])

    /**
     * @component
     * @description Component for custom tooltip
     * @function AverageSessionsChartTooltip
     * @param {*}
     * @returns {jsx}
     */
    // personnalisation of the tooltip
    function AverageSessionsChartTooltip({ active, payload })
    {
        if (active)
        {
            return <div className='averageSessionsTooltip'>{`${payload[0].value} `} min</div>
        }
        return null
    }

    // create a tab for convert week days
    function days(day)
    {
        const daysTab = ["L", "M", "M", "J", "V", "S", "D"]
        return daysTab[+day -1];
    }

    // if datas not loaded
    if(isLoading === true)
    {
        return (
            <div className="line-box rounded mb-4">

                <Loader />

            </div>
        )
    }
    // if all OK
    else
    {
        return (
            <div className="line-box rounded mb-4">

                <h4 className='average-session-title'>Durée moyenne des sessions</h4>

                <ResponsiveContainer width="100%" height="100%" className='sessions-responsive rounded' >

                    <LineChart
                        height={100}
                        margin={{ top: 70, right: 10, bottom: 0, left: 10 }}
                        data={average.sessions}
                        // background darkest on right
                        onMouseMove={(e) => {
                            const zoneDark = document.getElementsByClassName('sessions-responsive')[0]
                     
                            if (e.isTooltipActive)
                            {
                                const windowWidth = zoneDark.clientWidth

                                const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)

                                zoneDark.style.background = `linear-gradient(to right, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(0,0,0,0.1) ${mouseXpercentage}%, rgba(0,0,0,0.1) 100%)`
                            }
                            else
                            {
                                zoneDark.style.background = `rgba(255,0,0,1)`
                            }
                        }}
                    >

                        <XAxis
                            dataKey="day"
                            tickFormatter={days}
                            stroke="white"
                            opacity={0.5}
                        />

                        <YAxis
                            dataKey='sessionLength'
                            hide={true}
                        />

                        <Tooltip content={<AverageSessionsChartTooltip/>}/>

                        <Line
                            dataKey='sessionLength'
                            type='monotone'
                            stroke='rgba(255, 255, 255, 0.5)'
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                stroke: 'rgba(255, 255, 255, 0.5)',
                                strokeWidth: 10,
                                r: 5,
                            }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>
        )
    }
}

export default LineAnalytic

LineAnalytic.propTypes = {
    id: PropTypes.string.isRequired
}