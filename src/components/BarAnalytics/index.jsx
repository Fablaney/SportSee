// import charts
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

// import Recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"
import Loader from '../Loader'
import { fetchActivity } from '../../api/api'
import UserActivity from '../../models/activity'

/**
 * @component
 * @description Render of the activity in Bar Chart
 * @function BarAnalytics
 * @param {string} id
 * @returns {jsx}
 */
function BarAnalytics({ id })
{
    // initialize a state data and state loading and get the datas
    const [activity, setDatas] = useState({})

    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {

        fetchActivity(id).then((response)=> {

            setDatas(new UserActivity(response.data.data))

            setLoading(false)
        })

    }, [])

    /**
     * @component
     * @description Component for custom tooltip
     * @function CustomTooltipActivity
     * @param {*}
     * @returns {jsx}
     */
    const CustomTooltipActivity = ({ active, payload }) => {
        if (active && payload && payload.length)
        {
            return (
                <div className='custom-tooltip-activity py-3 px-2'>
                    <div> {`${payload[0].value}kg`}</div>
                    <div> {`${payload[1].value}kCal`}</div>
                </div>
            )
        }
        return null
    }

    // if the datas not loaded
    if(isLoading === true)
    {
        return (
            <div className="bar-box">

                <Loader />

            </div>
        )
    }
    // if all OK
    else
    {
        return (     
            <div className="bar-box">
            
                    <ResponsiveContainer width="100%" height="100%">

                        <BarChart
                            width='50%'
                            height='50%'
                            data={activity.sessions}
                            margin={{
                                top: 40,
                                right: 10,
                                left: 10,
                                bottom: 10,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="day" />

                            <YAxis
                                yAxisId='kg'
                                datakey='kilogram'
                                orientation='right'
                                axisLine={false}
                                tickLine={false}
                                tickCount={3}
                            />

                            <YAxis
                                yAxisId='cal'
                                datakey='calories'
                                orientation='false'
                                axisLine={false}
                                tickLine={false}
                                hide={true}
                            />
                        
                            <Tooltip content={<CustomTooltipActivity />} />

                            <Bar
                                className='activity-bars'
                                dataKey="kilogram"
                                barSize={7}
                                radius={[50, 50, 0, 0]}
                                yAxisId='kg'
                                fill="#282D30"/>
                            <Bar
                                className='activity-bars'
                                dataKey="calories"
                                barSize={7}
                                radius={[50, 50, 0, 0]}
                                yAxisId='cal'
                                fill="#E60000" />

                        </BarChart>

                    </ResponsiveContainer>
                
                
            </div>
        )
    }  
}

export default BarAnalytics

BarAnalytics.propTypes = {
    id: PropTypes.string.isRequired
}