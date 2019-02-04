import React from 'react';
import FeedbackButton from './FeedbackButton';

const FeedbackButtonContainer = props => {
    const feedbackOptions = props.options.map(option => {
        return (
            <FeedbackButton
            option={option}
            giveFeedback={props.giveFeedback}
            key={option.label} />
        )
    })

    return (
        <div>
            <ul>
                {feedbackOptions}
            </ul>
        </div>
    )
}

export default FeedbackButtonContainer;