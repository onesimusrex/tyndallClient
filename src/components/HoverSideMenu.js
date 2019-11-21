import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

// import $ from 'jquery';
// import Keyword_link from "./Keyword_link"
// import Concept_link from "./Keyword_link"
import $ from 'jquery';

// see: https://www.codeply.com/go/q0viC0Xu3D/bootstrap-4-multilevel-sidebar-_-hover
// see https://www.geeksforgeeks.org/hide-scroll-bar-but-while-still-being-able-to-scroll-using-css/

const mapStateToProps = state => ({
  ...state
})


class HoverSideMenu extends Component {
    constructor(props) {
      super(props);
      this.state =  { 
      };
      // this.dbApiEvent = this.dbApiEvent.bind(this);
      this.BuildSideMenu = this.BuildSideMenu.bind(this);
      this.LeafClickEvent = this.LeafClickEvent.bind(this);
      this.easeInOutQuad = this.easeInOutQuad.bind(this);
    }


    dbApiEvent (e){
      console.log(this);
      // this.props.GetDataAPI(this.props.keyword)
    }
  
    componentDidMount() {
      this.BuildSideMenu();
      this.LeafClickEvent();
    }

    BuildSideMenu(){
    
    }

    LeafClickEvent(){
      console.log("leaf handler on")
      // $(".sideResult").on("click", function(event){
      //   console.log("leaf clicked");
      //   console.log(event)
      // });
    }

    LeafClick(e){
      console.log(this)
      var _this = this
      e.preventDefault();
      e.stopPropagation();
      // console.log(e.target.id);
      if (e.target.nodeName == "A"){
        console.log("anchor")

        var csiString = "a[csi='"+e.target.id+"']";
        var leafCSI = document.querySelector(csiString);
        console.log(leafCSI)
  
        var duration = 600;
        var sideContainer = document.querySelector("#sidebar")
        var to = leafCSI.offsetTop
        var start = sideContainer.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
  
        var animateScroll= function(){
          console.log("go for anim")
          currentTime += increment;
          var val = _this.easeInOutQuad(currentTime, start, change, duration)
          leafCSI.scrollTop = val;
          if (currentTime < duration){
            setTimeout(animateScroll, increment)
          }
        }
        animateScroll();
      } else console.log("not an anchor")


      // 
    }

    easeInOutQuad(t, b, c, d){
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }

    render () {
      const sideMenu = this.props.sideMenu;
      return ReactDOM.createPortal(
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div id="sidebar">
            <div className="list-group panel">
              {/* <a href="#" className="barTitle" aria-expanded="false"> */}
                <i className=""></i>
                <span className="">
                <h6 className="barTitle"><div>TECHNICAL</div> <div>GUIDELINES</div></h6>
                <p>{JSON.stringify(this.props)}</p>
                </span>

                {/* <div id="searchInput" className="input-group" >
                    <input type="text" id="searchInputText" className="form-control" placeholder="Technical Guidelines" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                    </div>
                  </div> */}
              {/* </a> */}
              {this.props.sideMenu != null && sideMenu.map((level1, index1) =>
                <div>
                <a csi={level1.code} href={"#menu"+(index1+1)} className="list-group-item collapsed sideLink" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
                  <i className=""></i>
                  <span className="hidden-sm-down">
                    {level1.code}
                  </span>
                  <span className="hidden-sm-down">
                    {level1.title.length < 20 ? " | " + level1.title : " | " + level1.title.slice(0,20).trim()+"..."}
                  </span>
                </a>
                {level1.children.map((level2, index2) =>
                  <div className="collapse" id={"menu"+(index1+1)}>
                      <a csi={level2.code} href={"#menu"+(index1+1)+"sub"+(index2+1)} className="list-group-item sideLink" data-toggle="collapse" aria-expanded="false">
                      {/* className="text-white-50" */}
                        <span className="text-white-50">
                          {level2.code}
                        </span>
                        <span >
                        {level2.title.length < 20 ? " | " + level2.title : " | " + level2.title.slice(0,20).trim()+"..."}
                        </span>
                      </a>
                      {/* {console.log(level2)} */}
                      {level2.children.map((level3, index3) => 
                        <div className="collapse" id={"menu"+(index1+1)+"sub"+(index2+1)}>
                          <a csi={level3.code} href={"#menu"+(index1+1)+"sub"+(index2+1)+"sub"+(index3+1)} className="list-group-item sideLink" data-toggle="collapse" aria-expanded="false">

                              <span className="text-white-50">
                                {level3.code}
                              </span>
                              <span >
                                {level3.title.length < 20 ? " | " + level3.title : " | " + level3.title.slice(0,20).trim()+"..."}
                              </span>

                          </a>
                          {level3.children.map((level4, index4) =>
                          // onClick={this.LeafClick.bind(this)}
                            <div className="collapse" id={"menu"+(index1+1)+"sub"+(index2+1)+"sub"+(index3+1)}>
                            <a onClick={this.LeafClick.bind(this)} id={level4.code} csi={level4.code} href="javascript:void(0)" className="list-group-item sideLink sideResult" data-parent={"#menu"+(index1+1)+"sub"+(index2+1)+"sub"+(index3+1)}>
                              <span onClick={this.LeafClick.bind(this)} id={level4.code} className="text-white-50">
                                {level4.code}
                              </span>
                              <span onClick={this.LeafClick.bind(this)} id={level4.code}>
                                {level4.title.length < 20 ? " | " + level4.title : " | " + level4.title.slice(0,20).trim()+"..."}
                              </span>
                            </a>
                        </div>
                          )}
                        </div>
                      )}
                  </div>  
                )}
                </div>
              )}              
            </div>
        </div>
        </div>
      ), document.getElementById('side-panel-wrap');
    }
  }
  
  export default HoverSideMenu;
