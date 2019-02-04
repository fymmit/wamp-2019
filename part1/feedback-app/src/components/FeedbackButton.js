import React from 'react';

const FeedbackButton = props => {
    return (
        <button
            onClick={() => props.giveFeedback(props.option)}>{props.option.label}</button>
    )
}

export default FeedbackButton;