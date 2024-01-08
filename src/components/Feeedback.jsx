import React, { Component } from 'react';
import { Section } from './section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    let countTotalFeedback = good + neutral + bad;
    let countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );
    return (
      <Section
        title={'Please leave your Feedback'}
        handleIncrementFeedback={this.handleIncrementFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
        result={this.state}
        total={countTotalFeedback}
        positive={countPositiveFeedbackPercentage}
      ></Section>
    );
  }
}

export default Feedback;
