import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    value1,
    value2,
    value3,
	proposedAnswer,
    numCorrect,
    numQuestions,
  }
  
handleAnswer = answer => {
	const v1 = Math.floor(Math.random() * 100);
	const v2 = Math.floor(Math.random() * 100);
	const v3 = Math.floor(Math.random() * 100);
	const propAnswer = Math.floor(Math.random() * 3) + v1 + v2 + v3;
  
  	this.setState(prevState => ({
      numCorrect: ((prevState.value1 + prevState.value2 + prevState.value3 === prevState.proposedAnswer && answer === true) || (prevState.value1 + prevState.value2 + prevState.value3 !== prevState.proposedAnswer && answer === false)) ? prevState.numCorrect + 1 : prevState.numCorrect,
      numQuestions: prevState.numQuestions + 1,
      value1: v1,
      value2: v2,
      value3: v3,
      proposedAnswer: propAnswer,
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.handleAnswer(true)}>True</button>
          <button onClick={() => this.handleAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
