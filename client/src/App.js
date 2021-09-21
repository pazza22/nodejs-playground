import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAuth from './components/googleauth';
import logo from './logo.svg';
import './App.css';
var config = require('dotenv').config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount(){
    console.log(this.refs["googleauth"]);
  }

  whatIsMyIP() {
    fetch("http://localhost:9000/ip/whatismyip")
      .then(res => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  render() {
    return (
      <div className="App">

        <button id="btn_ip" onClick={this.whatIsMyIP.bind(this)}>What is my IP?</button>
        <div>What is my IP? {this.state.apiResponse}</div>
        <GoogleAuth />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <footer>
          This is just a play app. Since you are here, how about check out a random
          <a href="https://www.commitstrip.com/?random=1">dev comic</a>
        </footer>
      </div>
    );
  }
}

export default App;
