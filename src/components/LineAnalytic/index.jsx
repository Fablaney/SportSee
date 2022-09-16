// import react
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

// import Recharts
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// import perso
import "./style.scss"
import Loader from '../Loader'
import { fetchAverageSessions } from '../../api/api'
/**
 * @component
 * @description Render of the average sessions in Line Chart
 * @function LineAnalytic
 * @param {*}
 * @returns {jsx}
 */
function LineAnalytic({ id })
{
    // j'initialise un state data et state data met à jour datas
    const [average, setDatas] = useState({})

    // initialisation du loader
    const [isLoading, setLoading] = useState(true)

    // récuperation des données avec "id" passé en parametre
    useEffect(()=> {

        fetchAverageSessions(id).then((response)=> {
            // console.log(response.data.data)

            setDatas({...response.data.data})

            // console.log(activity)

            setLoading(false)

            // console.log(isLoading)
        })

    }, [])

    /**
     * @component
     * @description Component for custom tooltip
     * @function AverageSessionsChartTooltip
     * @param {*}
     * @returns {jsx}
     */
    // personnalisation du tooltip
    function AverageSessionsChartTooltip({ active, payload })
    {
        if (active)
        {
            return <div className='averageSessionsTooltip'>{`${payload[0].value} `} min</div>
        }
        return null
    }

    // je créer un tableau pour les jours de la semaine
    function days(day)
    {
        const daysTab = ["L", "M", "M", "J", "V", "S", "D"]
        return daysTab[+day -1];
    }

    // tant qu'on à pas récupéré les données
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

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart
                        width={400}
                        height={100}
                        margin={{ top: 60, right: 10, bottom: 0, left: 10 }}
                        data={average.sessions}
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