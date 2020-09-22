import React from "react";
import Chart from "../chart/Chart";
import '../chart/stats.css'

export default function () {

    return (
        <div className='statistics-container'>
            <Chart
                endpoint={'service'}
                title={"Membership statistics"}
                labels={(statistics) => statistics.map(obj => obj.serviceName)}
                data = {(statistics) => statistics.map(obj => obj.usedCount)}/>
            <Chart
                endpoint={'visit'}
                title={"Visit statistics"}
                labels={(statistics) => statistics.map(obj => obj.hour)}
                data = {(statistics) => statistics.map(obj => obj.count)}/>
        </div>
    );
}