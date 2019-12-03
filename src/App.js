import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { simpleAction } from './redux/actions/simpleAction';

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
import smenu from "./scripts/json/sidemenu.json";
// import zenscroll from 'zenscroll';
// import rotate from "./scripts/jquery.360rotate";
const sideBarRoot = document.getElementById('side-panel-wrap');



var apiURI = "http://localhost:9000/testAPI/"
var dataAPIURI = "http://localhost:9000/dataAPI/"

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch (simpleAction())
})

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
    this.openSide = this.openSide.bind(this);
    this.closeSide = this.closeSide.bind(this);
    this.GetDataAPI = this.GetDataAPI.bind(this);
    this.SideBarHandler = this.SideBarHandler.bind(this);
    this.GetSideMenuData = this.GetSideMenuData.bind(this);
    this.SideMenuUtil = this.SideMenuUtil.bind(this);
    this.GetLevel = this.GetLevel.bind(this);
    this._360Modal = this._360Modal.bind(this);
    this.processSmenu = this.processSmenu.bind(this);
  }

  componentDidMount() {
    // this.getContent("mainpageimages", this)
    // this.getContent("pdfs", this)
    // this.GetSideMenuData();
    // /*
    this.getContent("mainpagetext", this)
    this.SideBarHandler();
    this.processSmenu(masterFile);
    // */
    // ;
  }

  processSmenu(masterFile){
    var _this = this;
    $.ajax("http://localhost:9000/dataAPI/sidebarDL", {
      method: "GET",
      success: function (res){
        res = JSON.parse(res)
        console.log(res)
        var filtered = []
        // var filtered = masterFile.filter((item) =>{
        for (var j=0; j<masterFile.length; j++){

       
          for (var i=0; i<res.length; i++){
            // console.log(masterFile[j].code + " | " + res[i].csi)
            if (masterFile[j].code == res[i].csi){
              // console.log(true)
              filtered.push(masterFile[j])
              // return true
            } else {
              // console.log(false)
              // return false
            }
          }
        }
        // })
        console.log(filtered)
        _this.SideMenuUtil(filtered);
        // return filtered
      }
    })
  }

  simpleAction = (event) => {
    this.props.simpleAction();
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

  SideMenuUtil (masterFile){
    // console.log(masterFile)
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
        // console.log(res)
        // res = JSON.parse(res)
        if (type === "mainpageimages"){
          res = JSON.parse(res)
        } else if (type === "mainpagetext"){
          res = JSON.parse(res)
          _this.setState({ 
            "logoiconURL": res["logoicon"]["url"],
            "logo-text": res["logo-text"],
             "taglink-text": res["taglink-text"],
             "tagline-text": res["tagline-text"] 
          })
        } else if (type === "pdfs"){
          // res = JSON.parse(res)
          console.log(res)
        }
      }
    })
  }

  openSide(e){
    // console.log(e)
    // e.preventDefault();
    if (this.state.sideOpen == false){
      $("#wrapper").toggleClass("toggled");
      this.state.sideOpen = true;
    }
    
    this.setState({
      "currentModal":e
    })
    var csiString = "[csi='"+e+"']"
    
    var currentCsi = document.querySelector(csiString)

    $('.sideResult').on("click", function(){
      // zenscroll.to(currentCsi)
      // var container = document.querySelector('#sidebar-wrapper')
      // var myScroller = zenscroll.createScroller(container, 500, 30)
      // myScroller.intoView(currentCsi)
      console.log("boom")
    })


    $('.sideLink > div').attr({
      'aria-expanded':false
    }).addClass('collapse')
    $('.sideLink').attr({
      'aria-expanded':false
    }).addClass('collapsed')
    $(csiString).parent().siblings('a').delay().trigger("click").parent().siblings('a').trigger("click").parent().siblings('a').trigger("click").parent().siblings('a').trigger("click")
  }

  closeSide(){
        $("#wrapper").toggleClass("toggled");
        this.state.sideOpen =  !this.state.sideOpen;
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
        {/* <pre>
          {JSON.stringify(this.props)}
        </pre> */}

        <SideContent>
          <HoverSideMenu sideMenu={this.state.sideMenu}/>
        </SideContent>
        {/* <button onClick={this.simpleAction}>Test redux action</button> */}
      {/* <HoverSideMenu sideMenu={this.state.sideMenu} /> */}


      </div>
    );
  }
}

class SideContent extends Component {
  constructor(props){
    super(props);
    this.el = document.createElement('div');
    // this.txt = document.createTextNode("lorem ipsum");
    // this.el.appendChild(this.txt);
  }

  componentDidMount(){
    sideBarRoot.appendChild(this.el)
  }

  componentWillUnmount(){
    sideBarRoot.removeChild(this.el)
  }

  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

function Child(){
  return (
    <div className="cool">
      <button>Click</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (App);