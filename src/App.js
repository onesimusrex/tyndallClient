import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from 'jquery';
// import backgroundVideo from "./content/video/militaryConstruction.mp4"
import backgroundVideo from "./content/video/tyndallHurricane.mp4"

var apiURI = "http://localhost:9000/testAPI/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  { 
      "logoiconURL": "",
      "logo-text": "",
      "taglink-text": "",
      "tagline-text": "" 
    };
  }

  callAPI() {
    fetch(apiURI)
      .then(res => res.json())
      .then(res => this.setState({ 
        "logo-text": res["logo-text"],
         "taglink-text": res["taglink-text"],
         "tagline-text": res["tagline-text"] 
      }))
      .then(function (res) {
        console.log(res.text())
      })
      .catch(err => err);
  }

  componentDidMount() {
    // this.callAPI();
    // this.getContent("mainpageimages", this)
    this.getContent("mainpagetext", this)
  }

  getContent (type, _this){
    $.ajax(apiURI, {
      method: "GET",
      data: {type: type},
      success: function (res){
        res = JSON.parse(res)
        if (type == "mainpageimages"){
          // console.log("images only")
        } else if (type == "mainpagetext"){
          _this.setState({ 
            "logoiconURL": res["logoicon"]["url"],
            "logo-text": res["logo-text"],
             "taglink-text": res["taglink-text"],
             "tagline-text": res["tagline-text"] 
          })
          console.log(_this)
        }
      }
    })
  }
  

  render() {
    // var tempstyle = {

    // };
    // style={tempstyle}
    var logotextInline = {
      color: 'white',
      fontSize: '16px'
    };
    var navbarInline = {
      top: '5px'
    };
    var tempstyle = {
      left: '5px',
      position: 'relative'
    };

    return (
      <div>
        <header>
          <div className="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={backgroundVideo} type="video/mp4"></source>
          </video>
          <div className="container h-100">
            <nav class="navbar navbar-light "style={navbarInline}>
              <a class="navbar-brand logotext" style={logotextInline} href="#"><img src={this.state.logoiconURL} width="22" height="22" alt=""></img><span style={tempstyle}>{this.state["logo-text"]}</span></a>
            </nav>
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="helveticaBoldCond">{this.state["taglink-text"]}</h1>
              </div>
            </div>
          </div>
        </header>


            <div className="row blueBox">
              <div className="col-md-7 mx-auto ">
                <p className="paragraphStyle">{this.state["tagline-text"]}</p>
              </div>
            </div>

      </div>
    );
  }
}

export default App;