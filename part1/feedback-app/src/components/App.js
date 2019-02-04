import React, { Component } from 'react';
import FeedbackButtonContainer from './FeedbackButtonContainer';
import Statistics from './Statistics';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedback: {
                options: [
                    {
                        label: "good",
                        value: 1,
                        count: 0
                    },
                    {
                        label: "neutral",
                        value: 0,
                        count: 0
                    },
                    {
                        label: "poor",
                        value: -1,
                        count: 0
                    }
                ]
            },
            feedbackReceived: false
        }
    }

    render() {
        const feedbackReceived = this.state.feedbackReceived;
        let stats;
        if (feedbackReceived) {
            stats = <Statistics options={this.state.feedback.options} />
        } else {
            stats = <div>No feedback has been given.</div>
        }
        return (
            <div>
                <h1>Give feedback</h1>
                <FeedbackButtonContainer
                    options={this.state.feedback.options}
                    giveFeedback={this.giveFeedback.bind(this)} />
                <h2>Statistics</h2>
                {stats}
            </div>
        )
    }

    giveFeedback(option) {
        let feedback = this.state.feedback;
        for (const feedbackOption of feedback.options) {
            if (option.label === feedbackOption.label) {
                feedbackOption.count++;
            }
        }
        this.setState({feedback: feedback})
        if (!this.state.feedbackReceived) {
            this.setState({feedbackReceived: true});
        }
    }
}

export default App;