import React, { Component } from 'react';
import { Section } from './Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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
        handleIncrementGood={this.handleIncrementGood}
        handleIncrementNeutral={this.handleIncrementNeutral}
        handleIncrementBad={this.handleIncrementBad}
        result={this.state}
        total={countTotalFeedback}
        positive={countPositiveFeedbackPercentage}
      ></Section>
    );
  }
}

export default Feedback;
