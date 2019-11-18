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
import HoverSideMenu from "./components/HoverSideMenu"
// import masterFile from "./scripts/json/masterformat-2016-map.json"
import masterFile from "./scripts/json/masterformat-2016-with-levels.json"
// import zenscroll from 'zenscroll';
// import rotate from "./scripts/jquery.360rotate";

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
      "sideOpen": true,
      "resultNumber": 0,
      "sideMenu": null,
      "currentModal": null, 
      "_360ModalShow": false
    };
    this.AnimateSearch = this.AnimateSearch.bind(this);
    this.openSide = this.openSide.bind(this);
    this.closeSide = this.closeSide.bind(this);
    this.GetDataAPI = this.GetDataAPI.bind(this);
    this.SideBarHandler = this.SideBarHandler.bind(this);
    this.GetSideMenuData = this.GetSideMenuData.bind(this);
    this.SideMenuUtil = this.SideMenuUtil.bind(this);
    this.GetLevel = this.GetLevel.bind(this);
    this._360Modal = this._360Modal.bind(this);
  }
  handleChange(e){
    // console.log(e.target.value)
    clearTimeout(this.state.timeout)
    var _this = this;
    this.state.timeout = setTimeout(function (){
      var val = document.getElementById("searchInputText").value
      if (val !== ""){
        // console.log(val)
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

  SideMenuUtil (){
    var _this = this;
    var menu = []
    // var masterFileL23 = JSON.parse(JSON.stringify(masterFile))
    var masterFileL23 = []
    // Object.keys(masterFile).map(function(key){
    masterFile.map(function(item){  
      var l1 = _this.GetLevel(item.code, 1);
      var l2 = _this.GetLevel(item.code, 2)
      var l3 = _this.GetLevel(item.code, 3)

      if ((l2 == "00") && (l3 == "00")){
        // console.log(true)
        menu.push({code: item.code, title: item.label, children: [], level: item.level})
        // delete masterFileL23[item.code]
      } else masterFileL23.push(item)
      return item.code;
    })
    const masterFileL3 = JSON.parse(JSON.stringify(masterFileL23))
    masterFileL23.map(function(item){
      var l1 = _this.GetLevel(item.code, 1);
      var l2 = _this.GetLevel(item.code, 2)
      var l3 = _this.GetLevel(item.code, 3)
      
      if (item.level == 2 || item.level == 1){
        for (var i=0; i<menu.length; i++){
          if (/*(_this.GetLevel(item.code, 3) == "00") && */(_this.GetLevel(menu[i].code, 1) == _this.GetLevel(item.code, 1))){
            // console.log(true)
            menu[i].children.push({code: item.code, title: item.label, children: [], level: item.level})
          } /*else console.log(false)*/
        }
        //delete masterFileL3[item.code]
      }
      return item;
    })
    masterFile.map(function(item){
      var gl = _this.GetLevel;
      var l1 = _this.GetLevel(item.code, 1);
      var l2 = _this.GetLevel(item.code, 2)
      var l3 = _this.GetLevel(item.code, 3)

      if (item.level == 3 ){
        menu.map(function (level1, l1Index){
          level1.children.map(function(level2, l2Index){
            if( (gl(level2.code, 2).slice(0,1) == gl(item.code, 2).slice(0,1)) && (gl(level2.code, 1) == gl(item.code, 1) ) ){
              level2.children.push({code: item.code, title: item.label, children: [], level: item.level})
            }
          })
        })
      }
    })
    masterFile.map(function(item){
      var gl = _this.GetLevel;
      var l1 = _this.GetLevel(item.code, 1);
      var l2 = _this.GetLevel(item.code, 2)
      var l3 = _this.GetLevel(item.code, 3)

      if (item.level == 4 ){
        menu.map(function (level1, l1Index){
          level1.children.map(function(level2, l2Index){
            level2.children.map(function(level3, l3Index){
              if( (gl(level3.code, 2) == gl(item.code, 2)) && (gl(level3.code, 1) == gl(item.code, 1) ) ){
                level3.children.push({code: item.code, title: item.label, children: [], level: item.level})
              }
            })
          })
        })
      }
    })
    console.log(menu)
    //write menu to file to load offline
    _this.setState({
      "sideMenu": menu
    })
  }

  GetLevel(code, num){
    var level = "";
    switch (num){
      case 1:
        level = code.slice(0,2)  
        break 
      case 2:
        level = code.slice(3,5)  
        break
      case 3:
        level = code.slice(6)  
        break  
    }
    return level;
  }

  GetSideMenuData (){
    // https://github.com/outer-labs/masterformat-json
    // console.log(masterFile)
    var _this = this;
    $.ajax(dataAPIURI+'/sideMenu', {
      method: "GET",
      success: function (res){
        if (res.length == 0){
          console.log("empty")
        }else {
          res = JSON.parse(res)
          console.log("sidemenu data");
          console.log(res)
        }
      }
    })
  }

  componentDidMount() {
    // this.getContent("mainpageimages", this)
    // this.getContent("pdfs", this)
    this.getContent("mainpagetext", this)
    this.SideBarHandler();
    // this.GetSideMenuData();
    this.SideMenuUtil();
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
    // e.preventDefault();
    if (this.state.sideOpen == false){
      $("#wrapper").toggleClass("toggled");
      this.state.sideOpen = true;
    }
    
    /*
    
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
    clearTimeout(this.state.timeout)
    var _this = this;
    this.state.timeout = setTimeout(function (){
      // _this.closeSide();
    }, 1500);
    */
    this.setState({
      "currentModal":e
    })
    var csiString = "[csi='"+e+"']"
    
    var currentCsi = document.querySelector(csiString)
    // console.log(currentCsi)
    // $(csiString).parent().parent().parent().trigger("click");
    
    // var container = document.querySelector('#sidebar-wrapper')
    // var myScroller = zenscroll.createScroller(container, 500, 30)
    // myScroller.intoView(currentCsi)

    $('.sideResult').on("click", function(){
      // zenscroll.to(currentCsi)
      // var container = document.querySelector('#sidebar-wrapper')
      // var myScroller = zenscroll.createScroller(container, 500, 30)
      // myScroller.intoView(currentCsi)
      console.log("boom")
    })

    // console.log($(csiString).parent().parent().parent().parent().children('a').trigger("click"))
    // $(csiString).parent().parent().parent().children('a').trigger("click")
    // $(csiString).parent().parent().children('a').trigger("click")
    $('.sideLink > div').attr({
      'aria-expanded':false
    }).addClass('collapse')
    $('.sideLink').attr({
      'aria-expanded':false
    }).addClass('collapsed')
    $(csiString).parent().siblings('a').delay().trigger("click").parent().siblings('a').trigger("click").parent().siblings('a').trigger("click").parent().siblings('a').trigger("click")

    // $(csiString).parent().siblings('a').delay(6000).trigger("click")
    // $(csiString).parent().siblings('a').parent().siblings('a').delay(4000).trigger("click")
    // $(csiString).parent().siblings('a').parent().siblings('a').parent().siblings('a').delay(2000).trigger("click")
    // $(csiString).parent().siblings('a').parent().siblings('a').parent().siblings('a').parent().siblings('a').delay().trigger("click")
    //zenscroll.to(currentCsi)
  }

  closeSide(){
      // if (this.state.sideOpen == true){
        $("#wrapper").toggleClass("toggled");
        this.state.sideOpen =  !this.state.sideOpen;
      // }
      
      // document.getElementById("mySidenav").style.width = "0";
      // document.getElementById("main").style.marginLeft = "0";
  }

  SideBarHandler(){
    $('.child').hide(); //Hide children by default

    $('.parent').children().click(function (event) {
        event.preventDefault();
        $(this).children('.child').slideToggle('slow');
        $(this).find('span').toggle();
    });
  }

  _360Modal (){
    console.log("modal")
    $('#myModal').modal({show: !this.state._360ModalShow});
    this.setState({
      _360ModalShow: !this.state._360ModalShow
    }) 
    
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

    const topPanelHeight = $('#mainTopPanel').outerHeight(false);
    const windowHeight = $(window).height();
    const searchAreaHeight = windowHeight - topPanelHeight;

    var searchArea = {
      // overflowY: 'scroll',
      paddingTop: '10px',
      height: searchAreaHeight,
      overflowY: 'auto'
    }
    

    var mainTopPanel = {
      // position: 'fixed',
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
        return index<20;
      }).map(function (item1){
        return item1.text;
      })}
      />
    );

    const resultNumMessage = this.state.resultNumber + " results for \"" + this.state.inputVal + "\"";

    return (
      <div>
      {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button> */}

      <div id="myModal" className="modal fade bd-example-modal-md" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div class="demo">
              <p class="load">Now Loading...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex" id="wrapper">
        
        {/* <div > */}
          
          {/* <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a> */}
          {/* <SideBar 
            closeSide = {this.closeSide}
          /> */}
          <HoverSideMenu sideMenu={this.state.sideMenu}/>
        {/* </div> */}
        {/* <div id="main"> */}
        <div id="page-content-wrapper">
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
            <div id="mainTopPanel">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                {/* <button className="btn btn-secondary" onClick={this.closeSide}>MasterFormat Menu</button>
                <button className="btn btn-secondary" onClick={this._360Modal}>Model View</button> */}

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.closeSide} href="javascript:void(0)">MasterFormat<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={this._360Modal} href="javascript:void(0)">Model Viewer</a>
                    </li>
                  </ul>
                </div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </nav>


              <div className="bg-dark" >
                <div className="mx-auto ">
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
                    <div className="input-group-append">
                    {/* <span className="input-group-text" id="basic-addon2">Quick Search</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={searchArea}>
              <p className="text-muted d-flex mb-3 w-75 mx-auto">{(this.state.inputVal != "") && resultNumMessage }</p>
              {numbers.length > 0 && listItems}
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default App;