import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  render() {
    const total = this.countTotalFeedback();
    const goodPercentage = this.countPositiveFeedbackPercentage('good');
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={() => this.leaveFeedback('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.leaveFeedback('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.leaveFeedback('bad')}>
            Bad
          </button>
        </section>
        <section>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {goodPercentage}%</p>
        </section>
      </div>
    );
  }
}

export default App;
