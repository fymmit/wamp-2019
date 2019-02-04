import React from 'react';

const StatisticRow = props => {
    return (
        <tr>
            <td>{props.label}</td>
            <td>{props.stat}</td>
        </tr>
    )
}

export default StatisticRow;