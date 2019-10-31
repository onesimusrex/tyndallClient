import React, { Component } from "react";
// import $ from 'jquery';



class SideBar extends Component {
    constructor(props) {
      super(props);
      this.state =  { 
      };
      // this.dbApiEvent = this.dbApiEvent.bind(this);
    }

    dbApiEvent (e){
      console.log(this)
      this.props.GetDataAPI(this.props.keyword)
    }
  
    componentDidMount() {
    }

    render() {
      // var tempstyle = {
  
      // }
      // style={tempstyle}

      // const Keywords = (this.props) =>{
        // const keywords = this.props.keywords;
        // // console.log(props)
        // const keywordItems = keywords.map((item) => {
        //   return item
        // })
      // }
      // const bodyText = this.props.body.length<300 ? this.props.body : this.props.body.slice(0,300).trim()+"..." 

      // https://codepen.io/marklsanders/pen/OPZXXv

      return (
        <div id="mySidenav" className="sidenav bg-transparent mb-3">
          <a href="javascript:void(0)" className="closebtn d-flex" onClick={this.props.closeSide}>&times;</a>

          <div className="text-light d-flex flex-column mb-3 w-75" id="accordion">

            <div className="card bg-warning">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body bg-danger">
                This is me now.
              </div>
            </div>

          </div>

          {/*<ul>
            <li className="">
                <a tabindex="-1" href="javascript:void(0)">Test 1</a>
                <ul className="">
                    <li className=""><a tabindex="-1" href="javascript:void(0)">Pre-advice</a></li>
                    <li className=""><a href="javascript:void(0)">Strategy & Technical</a></li>
                    <li className=""><a href="javascript:void(0)">Research</a></li>
                    <li className="">
                        <a href="javascript:void(0)">APL & Products</a>
                        <ul className="parent">
                            <li >
                                <a href="javascript:void(0)">
                                    Approved Product List        
                                </a>

                                <ul className="child">
                                    <li >Platforms</li>
                                    <li >Managed Funds</li>
                                    <li >Wealth Protection</li>
                                    <li >Listed Securities</li>
                                    <li >Wealth Protection</li>
                                    <li >Listed Securities</li>
                                    <li >Listed Securities</li>
                                </ul>

                            </li>
                            <li ><a href="javascript:void(0)">Model Portfolios</a></li>
                            <li ><a href="javascript:void(0)">Non-approved Products</a></li>
                        </ul>
                    </li>
                    <li className=""><a href="javascript:void(0)">Test 2</a></li>
                    <li className=""><a href="javascript:void(0)">Review</a></li>
                    <li className=""><a href="javascript:void(0)">Execution Only</a></li>
                </ul>
            </li>
            <li ><a href="javascript:void(0)">Test 2</a></li>
            <li ><a href="javascript:void(0)">Test 3</a></li>
            <li ><a href="javascript:void(0)">Test 4</a></li>
          </ul>*/}
        </div>
      );
    }
  }
  
  export default SideBar;
