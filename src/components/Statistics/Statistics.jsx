import React from 'react';
import s from './Statistics.module.css';

class Statistics extends React.Component {
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
    
    // countPositiveFeedbackPercentage()

  render() {
    return (
      <section className={s.container}>
        <h1 className="">Please leave feedback</h1>
        <button type="button" className={s.button} onClick={this.handleGood}>
          Good
        </button>
        <button type="button" className={s.button} onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" className={s.button} onClick={this.handleBad}>
          Bad
        </button>

        <h2 className="">Statistics</h2>
        <ul>
          <li>
            <p className={s.statistic}>Good: {this.state.good}</p>
          </li>
          <li>
            <p className={s.statistic}>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p className={s.statistic}>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p className={s.statistic}>
              Total: {this.countTotalFeedback(
                this.state.good,
                this.state.neutral,
                this.state.bad
              )}
            </p>
                </li>
                          <li>
            <p className={s.statistic}>
              Positive feedback: {this.countTotalFeedback(
                this.state.good,
                this.state.neutral,
                this.state.bad
              )}
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Statistics;
