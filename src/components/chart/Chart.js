import React from "react";
import './stats.css'
import {useServerData} from "../hooks/ApiHook";
import {Pie} from "react-chartjs-2";

function Chart(props) {
    const {endpoint, labels, data, title} = props
    const set = useServerData(`http://localhost:5000/api/statictics/${endpoint}`, []);

    const chart = () => {
        return ({
            labels: labels(set),
            datasets: [
                {
                    data: data(set),
                    backgroundColor: [
                        '#ff6384',
                        '#36a2eb',
                        '#cc65fe',
                    ],
                }
            ]
        })
    }

    return <div className='chart'>
        <h3>{title}</h3>
        <Pie data={chart} options={{
            responsive: true
        }}/>
    </div>
}

export default Chart