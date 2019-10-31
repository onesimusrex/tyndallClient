import React, { Component } from "react";
import "./App.css";
import $ from 'jquery';
// import backgroundVideo from "./content/video/militaryConstruction.mp4"
import backgroundVideo from "./content/video/tyndallHurricane.mp4"
// import fs from 'fs'
// import PDFParser from 'pdf2json'
// fs = require ('fs')
import Search_card from "./components/Search_card"
import { restElement } from "@babel/types";    
import SideBar from "./components/SideBar"

var apiURI = "http://localhost:9000/testAPI/"
var dataAPIURI = "http://localhost:9000/dataAPI/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  { 
      "logoiconURL": "",
      "logo-text": "",
      "taglink-text": "",
      "tagline-text": "",
      "inputVal": '',
      "timeout": null,
      "ifsData": [],
      "sideOpen": false,
      "resultNumber": 0 
    };
    this.AnimateSearch = this.AnimateSearch.bind(this);
    this.openSide = this.openSide.bind(this);
    this.closeSide = this.closeSide.bind(this);
    this.GetDataAPI = this.GetDataAPI.bind(this);
    this.SideBarHandler = this.SideBarHandler.bind(this);
  }
  handleChange(e){
    // console.log(e.target.value)
    clearTimeout(this.state.timeout)
    var _this = this;
    this.state.timeout = setTimeout(function (){
      var val = document.getElementById("searchInputText").value
      if (val !== ""){
        console.log(val)
        _this.GetDataAPI(val);

      } else {
        _this.setState({
          "ifsData": [],
          "resultNumber": 0,
          "inputVal": ""
        })
      }
    }, 150);
  }


  componentDidMount() {
    // this.getContent("mainpageimages", this)
    // this.getContent("pdfs", this)
    this.getContent("mainpagetext", this)
    this.SideBarHandler();
  }

  GetDataAPI(keyword){
    // console.log('api fired ')
    if (document.getElementById("searchInputText").value != keyword){
      document.getElementById("searchInputText").value =""
      document.getElementById("searchInputText").value = keyword
    }
    
    var _this = this;
    $.ajax(dataAPIURI, {
      method: "GET",
      data: {keyword: keyword},
      success: function (res){
        // console.log(res.length)
        if (res.length == 0){
          // console.log('it was null')
          var val = document.getElementById("searchInputText").value
          _this.setState({
            "ifsData": [],
            "resultNumber": 0,
            "inputVal": val
          }); 
        } else {
          res = JSON.parse(res)
          var val = document.getElementById("searchInputText").value
            _this.setState({
              "ifsData": res,
              "resultNumber": res.length,
              "inputVal": val
            }); 
        }
        console.log(_this.state.ifsData)
      }
    })
  }

  getContent (type, _this){
    $.ajax(apiURI, {
      method: "GET",
      data: {type: type},
      success: function (res){
        res = JSON.parse(res)
        if (type === "mainpageimages"){
        } else if (type === "mainpagetext"){
          _this.setState({ 
            "logoiconURL": res["logoicon"]["url"],
            "logo-text": res["logo-text"],
             "taglink-text": res["taglink-text"],
             "tagline-text": res["tagline-text"] 
          })
        } else if (type === "pdfs"){
        }
      }
    })
  }

  AnimateSearch (){
    // $("#searchInputText").animate({width:'100%'}, 1000)
    // console.log('hi there')
  }

  openSide(e){
    // console.log(e)
    e.preventDefault();
    this.state.sideOpen = true;
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
    clearTimeout(this.state.timeout)
    var _this = this;
    this.state.timeout = setTimeout(function (){
      // _this.closeSide();
    }, 1500);
  }

  closeSide(){
      this.state.sideOpen = false;
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
  }

  SideBarHandler(){
    $('.child').hide(); //Hide children by default

    $('.parent').children().click(function (event) {
        event.preventDefault();
        $(this).children('.child').slideToggle('slow');
        $(this).find('span').toggle();
    });
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
    var searchArea = {
      // overflowY: 'scroll',
      // paddingTop: '10px'
    }

    const numbers = this.state.ifsData;
    const _this =this;
    const listItems = numbers.map((item) => 
      <Search_card 
      title={item.title} 
      // body={item.body.length<=300 ? '...' : ""}
      body={item.body}
      csi={item.csi}
      keyword={item.keyword}
      openSide={this.openSide}
      relevance = {item.relevance}
      GetDataAPI = {this.GetDataAPI}
      // concepts={item.concepts.filter(function(item1, index){
      //   return index < 5;
      // }).map(function (item1){
      //   return item1.text;
      // })}
      keywords={item.keywords/*.sort(function(a, b){
        return a.relevance - a.relevance
      })*/.filter(function (item1, index){
        return index<5;
      }).map(function (item1){
        return item1.text;
      })}
      />
    );

    const resultNumMessage = this.state.resultNumber + " results for \"" + this.state.inputVal + "\"";

    return (
      <div>
        {/* <div > */}
          
          {/* <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a> */}
          <SideBar 
            closeSide = {this.closeSide}
          />
        {/* </div> */}
        <div id="main">
            <div>
            {/* <div className="overlay"></div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
              <source src={backgroundVideo} type="video/mp4"></source>
            </video>
            <div className="container" >
            <nav className="navbar navbar-light "style={navbarInline}>
              <a className="navbar-brand logotext" style={logotextInline} href="#">
                  <img src={this.state.logoiconURL} width="22" height="22" alt=""></img>
                    <span style={brandLogo}>{this.state["logo-text"]}</span>
              </a>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="icon-menu-hamburger"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </nav>
            </div> */}
            </div>

            <div className="row blueBox bg-dark">
              <div className="col-md-7 mx-auto ">
                <h4 className="paragraphStyle text-white">{this.state["tagline-text"]}</h4>
            </div>

            <div className="d-flex container flex-column " style= {tempstyle}>
              <div className="d-flex p-2 h-100  text-center">
                <div className="w-100 text-white">
                  <h2 className="helveticaBoldCond text-white">{this.state["taglink-text"]}</h2>
                </div>
              </div>
              <div id="searchInput" className="d-flex input-group mb-3 w-50 mx-auto" onClick={this.AnimateSearch}>
                <input onKeyUp={this.handleChange.bind(this)} type="text" id="searchInputText" className="form-control" placeholder="Technical Guidelines" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                {/* <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">Quick Search</span>
                </div> */}
              </div>
            </div>
          </div>
          <div style={searchArea}>
            <p className="text-muted d-flex mb-3 w-75 mx-auto">{(this.state.inputVal != "") && resultNumMessage }</p>
            {numbers.length > 0 && listItems}
          </div>
        </div>
      </div>
    );
  }
}

export default App;