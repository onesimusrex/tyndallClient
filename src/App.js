import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from 'jquery';
import backgroundVideo from "./content/video/militaryConstruction.mp4"
// import backgroundVideo from "./content/video/tyndallHurricane.mp4"

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
    this.AnimateSearch = this.AnimateSearch.bind(this);
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

  AnimateSearch (){
    // $("#searchInputText").animate({width:'100%'}, 1000)
    // console.log('hi there')
  }
  

  render() {
    // var tempstyle = {

    // }
    // style={tempstyle}
    var logotextInline = {
      color: 'white',
      fontSize: '18px'
    };
    var navbarInline = {
      top: '5px'
    };
    var brandLogo = {
      left: '5px',
      position: 'relative'
    };
    var tempstyle = {
      top : '17vh'
    }

    return (
      <div>
        <header>
          <div className="overlay"></div>

          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={backgroundVideo} type="video/mp4"></source>
          </video>

          <div className="container">
            
            <nav className="navbar navbar-light "style={navbarInline}>
              <a className="navbar-brand logotext" style={logotextInline} href="#">
                  <img src={this.state.logoiconURL} width="22" height="22" alt=""></img>
                    <span style={brandLogo}>{this.state["logo-text"]}</span>
              </a>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="icon-menu-hamburger"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </nav>
            </div>

            <div className="d-flex container flex-column " style= {tempstyle}>
              <div className="d-flex p-2 h-100  text-center">
                <div className="w-100 text-white">
                  <h1 className="helveticaBoldCond">{this.state["taglink-text"]}</h1>
                </div>
              </div>
              <div id="searchInput" className="d-flex input-group mb-3 w-50 mx-auto" onClick={this.AnimateSearch}>
                <input type="text" id="searchInputText" className="form-control" placeholder="Technical Guidelines" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">Quick Search</span>
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