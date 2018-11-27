import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import $ from 'jquery';
import 'foundation-sites'

class FoundationSetup extends Component {
  render(){
    return (
      <div className="row">
          <div className={"small-"+(this.props.width ? this.props.width : "11") +" cell small-centered "}> 
            {this.props.children}
          </div>
        </div>
      )
  }
}

class Header extends Component {
  render(){

    return(
      <div className="top">
        <div className="top-shape-heading-rectangle">
          <FoundationSetup>
            <div className="heading">
              <h2>Disappointing Your Parents</h2>
            </div>
          </FoundationSetup>
        </div>
        <div className="logo-container">
          <FoundationSetup width="4">
              <div className="podcast-logo">
                <img src={logo} className="podcast-logo-image" alt="podcast logo"/>
              </div>
          </FoundationSetup>
          <div className="top-shape-heading-triangle">
          </div>
        </div>
        
      </div>
      );
  }
}

class App extends Component {
  componentDidMount() {
    $(document).foundation();
  }

  render(){
    return(
      <Header/>
    );
  }
}

export default App;


  {/*render() {
    return (
      <div className="App">
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
      </div>
    );
  }*/}