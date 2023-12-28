import React, { Component } from 'react';
import axios from 'axios';
import "./App.css"

export default class App extends Component {
  state = { advice: '' };

  componentDidMount() {
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const advice = response.data.slip.advice;
        console.log(advice);
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(`THE ERROR IS ${error}`);
      });
  }

  handleNewAdviceClick = () => {
    this.fetchAdvice();
  }

  render() {
    const advice = this.state.advice;

    return (
      <div className="card">
        <div className="card-content">
          <h2>Advice:</h2>
          <p>{advice}</p>
          <button onClick={this.handleNewAdviceClick}>Get New Advice</button>
        </div>
      </div>
    );
  }
}
