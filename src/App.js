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
          <div className={"small-"+(this.props.width ? this.props.width : "11") +" cell small-centered columns"}> 
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
            <button className="button apple-podcasts" disabled>Apple TBA</button>
          </div>
          <div className="flex image-container">
              <div className="podcast-logo">
                <img src={logo} className="podcast-logo-image" alt="podcast logo"/>
              </div>
          </div>
          <div className="flex podcast-button-container">
              <button className="button spotify-podcasts" disabled>Spotify TBA</button>
          </div>
          <div className="top-shape-heading-triangle">
          </div>
        </div>
       
        
      </div>
      );
  }
}

class Description extends Component {
  render(){
    return(
      <div>
        <p className="mission">Few things hurt more than disappointing your parents - with one look from Amma, your heart sinks and you feel like you’re a failure. As minorities living with a culture clash between our parents and our society, it’s a chaos we know all too well.  “Disappointing Your Parents” breaks down the different cultural moments where we experience that chaos, and how we attempt to reconcile these complex feelings in our daily lives. <br/><br/>
Look, relationships with our elders are overlaid with decades of tradition and culture shock, leaving many people feeling like they are constantly drowning - we’re hoping to help folks like us navigate the lonely storm that is disappointing your parents.
        </p>
        <h5 className="hosts">Hosted by <a href="//www.avibagla.com">Avi Bagla</a> and <a href="//vedantswarup.com">Vedant Swarup</a></h5>

      </div>
      );
  }
}

class ComingSoon extends Component {
  render(){
    
    return(
      <FoundationSetup width="4">
        <h3 className="coming-soon"> COMING SOON! </h3>
      </FoundationSetup>
    );
  }
}

class ListenToSample extends Component {
  render(){

    return(
      <div className="row">
        <div className="sample">
          <h4 className="sample">Listen to the sample for a taste</h4>
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
        <Description/>
        
        <ListenToSample/>
      </div>
    );
  }
}

export default App;