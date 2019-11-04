import React, { Component } from "react";
// import $ from 'jquery';
// import Keyword_link from "./Keyword_link"
// import Concept_link from "./Keyword_link"



class HoverSideMenu extends Component {
    constructor(props) {
      super(props);
      this.state =  { 
      };
      // this.dbApiEvent = this.dbApiEvent.bind(this);
      this.BuildSideMenu = this.BuildSideMenu.bind(this);
    }

    dbApiEvent (e){
      console.log(this)
      // this.props.GetDataAPI(this.props.keyword)
    }
  
    componentDidMount() {
      this.BuildSideMenu();
    }

    BuildSideMenu(){
    
    }

    render() {
      // var tempstyle = {
  
      // }
      // style={tempstyle}

      // const Keywords = (this.props) =>{
        // const keywords = this.props.keywords;
        // console.log(props)
        // const keywordItems = keywords.map((item) => 
        // <Keyword_link 
        //   GetDataAPI = {this.props.GetDataAPI}
        //   keyword = {item}
        // />
        
        // const concepts = this.props.concepts;
        // const conceptItems = concepts.map((item)=>
        //   <Keyword_link
        //     GetDataAPI = {this.props.GetDataAPI}
        //     keyword = {item}
        //   > 
        // )
      // }
      // const bodyText = this.props.body.length<300 ? this.props.body : this.props.body.slice(0,300).trim()+"..." 

      return (
        // <div className="d-flex mb-3 w-75 mx-auto card bg-warning text-white">

          <div className="bg-light border-right" id="sidebar-wrapper">
          <div id="sidebar">
          {/* //   <div className="sidebar-heading">Start Bootstrap </div>
          //   <div className="list-group list-group-flush">
          //     <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
          //     <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
          //     <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
          //     <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
          //     <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
          //     <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
          //   </div>
          // </div> */}

            <div className="list-group panel">
                <a href="#menu1" className="list-group-item collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i className="fa fa-dashboard"></i> <span className="hidden-sm-down">Item 1</span> </a>
                <div className="collapse" id="menu1">
                    <a href="#menu1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 1 </a>
                    <div className="collapse" id="menu1sub1">
                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 2 b</a>
                        <a href="#menu1sub1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 3 c </a>
                        <div className="collapse" id="menu1sub1sub1">
                            <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.1</a>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.2</a>
                        </div>
                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 4 d</a>
                        <a href="#menu1sub1sub2" className="list-group-item" data-toggle="collapse"  aria-expanded="false">Subitem 5 e </a>
                        <div className="collapse" id="menu1sub1sub2">
                            <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.1</a>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.2</a>
                        </div>
                    </div>
                    <a href="#" className="list-group-item" data-parent="#menu1">Subitem 2</a>
                    <a href="#" className="list-group-item" data-parent="#menu1">Subitem 3</a>
                </div>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                <a href="#menu3" className="list-group-item collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i className="fa fa-book"></i> <span className="hidden-sm-down">Item 3 </span></a>
                <div className="collapse" id="menu3">
                    <a href="#" className="list-group-item" data-parent="#menu3">3.1</a>
                    <a href="#menu3sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">3.2 </a>
                    <div className="collapse" id="menu3sub2">
                        <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 a</a>
                        <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 b</a>
                        <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 c</a>
                    </div>
                    <a href="#" className="list-group-item" data-parent="#menu3">3.3</a>
                </div>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-heart"></i> <span className="hidden-sm-down">Item 4</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-list"></i> <span className="hidden-sm-down">Item 5</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-clock-o"></i> <span className="hidden-sm-down">Link</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-th"></i> <span className="hidden-sm-down">Link</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-gear"></i> <span className="hidden-sm-down">Link</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-calendar"></i> <span className="hidden-sm-down">Link</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-envelope"></i> <span className="hidden-sm-down">Link</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-bar-chart-o"></i> <span className="hidden-sm-down">Link</span></a>
                <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-star"></i> <span className="hidden-sm-down">Link</span></a>
         
        </div>

        </div>
        </div>
      );
    }
  }
  
  export default HoverSideMenu;
