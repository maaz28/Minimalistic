import React from 'react';
import './App.css';
import Container1 from './Container1';
import Container2 from './Container2';

export default class App extends React.Component {

  state = {
    isApproveBtnClicked: false
  }

  approveBtnHandler = () => {
    console.log("approve clicked")
    this.setState({
      isApproveBtnClicked: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            SWAP TOKENS
          </h1>
          {
            this.state.isApproveBtnClicked ?
              <Container2 /> :
              <Container1 handler={this.approveBtnHandler} />
          }
        </header>
      </div>
    );
  }
}


