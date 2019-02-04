import React from 'react';
import StatisticRow from './StatisticRow';

const Statistics = props => {
    const feedbackOptions = props.options.map(option => {
        return (
            <StatisticRow
                key={option.label}
                label={option.label}
                stat={option.count} />
        )
    })
    const average = () => {
        let sum = 0;
        let count = 0;
        props.options.forEach(option => {
            sum += option.count * option.value;
            count += option.count;
        })
        return sum/count;
    }
    const positive = () => {
        let goodCount = 0;
        let totalCount = 0;
        for (const option of props.options) {
            if (option.label === "good") {
                goodCount = option.count;
            }
            totalCount += option.count;
        }
        return (goodCount/totalCount) * 100 + " %";
    }

    return (
        <table>
            <tbody>
                {feedbackOptions}
                <StatisticRow
                    label="average"
                    stat={average()} />
                <StatisticRow
                    label="positive"
                    stat={positive()} />
            </tbody>
        </table>
    )
}

export default Statistics;