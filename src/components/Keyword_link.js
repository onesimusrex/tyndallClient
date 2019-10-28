import React, { Component } from "react";
// import $ from 'jquery';



class Keyword_link extends Component {
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

      return (
        <a onClick={this.dbApiEvent.bind(this)} href="javascript:void(0)" className="card-link">{this.props.keyword}</a>
      );
    }
  }
  
  export default Keyword_link;
