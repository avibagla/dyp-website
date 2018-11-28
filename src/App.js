import React, { Component } from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import logo from './logo.svg';
import sample from './media/sample.mp3';
import './App.scss';
import $ from 'jquery';

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
           <div className="flex podcast-button-container">
            <button className="button apple-podcasts">Apple</button>
          </div>
          <div className="flex image-container">
              <div className="podcast-logo">
                <img src={logo} className="podcast-logo-image" alt="podcast logo"/>
              </div>
          </div>
          <div className="flex podcast-button-container">
              <button className="button spotify-podcasts">Spotify</button>
          </div>
          <div className="top-shape-heading-triangle">
          </div>
        </div>
       
        
      </div>
      );
  }
}

class ComingSoon extends Component {
  render(){
    
    return(
      <FoundationSetup width="4">
        <h3 className="coming-soon"> A new podcast, coming soon! </h3>
      </FoundationSetup>
    );
  }
}

class ListenToSample extends Component {
  render(){

    return(
      <div className="row">
        <div className="sample">
          <h4 className="sample coming-soon">Listen to the sample in the meantime</h4>
          <div className="sample">
            <audio controls>
                <source src={sample} type="audio/mpeg"/>
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    );
  }
}




class App extends Component {

  render(){
    return(
      <div>
        <Header/>
        <ComingSoon/>
        <ListenToSample/>
      </div>
    );
  }
}

export default App;