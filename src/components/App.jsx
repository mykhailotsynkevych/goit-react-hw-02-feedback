import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (a, b, c) => {
    let procentNumber = Math.round((a / (a + b + c)) * 100);
    return procentNumber > 0 ? procentNumber : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          onLeaveFeedback={[this.handleGood, this.handleNeutral, this.handleBad]}
        ></FeedbackOptions>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercentage={this.countPositiveFeedbackPercentage(good, neutral, bad)}
          ></Statistics>
          <Notification message="There is no feedback"></Notification>
        </Section>
        </>
    );
  }
}
