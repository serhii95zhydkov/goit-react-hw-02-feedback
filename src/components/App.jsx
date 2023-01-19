import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    console.log('Оціни мене');

    const { target } = event;
    console.log(event.target);
    console.log(target);
    this.setState((prevState) => {
      console.log(prevState);
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      }
    })
  };

  render() {
    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Bad
          </button>
        </section>
        <section>
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total:</p>
            <p>Positive feedback:</p>
        </section>
      </div>
    );
  }
}

export default App;
