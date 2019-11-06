import React, { Component } from "react";
// import $ from 'jquery';
import Keyword_link from "./Keyword_link"
import Concept_link from "./Keyword_link"



class Search_card extends Component {
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
        const keywords = this.props.keywords;
        // console.log(props)
        const keywordItems = keywords.map((item) => 
        <Keyword_link 
          GetDataAPI = {this.props.GetDataAPI}
          keyword = {item}
        />
        )
        // const concepts = this.props.concepts;
        // const conceptItems = concepts.map((item)=>
        //   <Keyword_link
        //     GetDataAPI = {this.props.GetDataAPI}
        //     keyword = {item}
        //   > 
        // )
      // }
      const bodyText = this.props.body.length<300 ? this.props.body : this.props.body.slice(0,300).trim()+"..." 

      return (
        <div className="d-flex mb-3 w-75 mx-auto card bg-dark text-white">
          
            <div  className = "card-body">
              <h5 onClick={this.props.openSide} className="card-title"><a className="text-white" href='#'>{this.props.csi} | {this.props.title}</a></h5>
              <h6 onClick={this.dbApiEvent.bind(this)} className="card-subtitle mb-2 text-muted"><a className="text-primary" href='javascript:void(0)'>{this.props.keyword}</a> (score: {this.props.relevance})</h6>
              <p className="card-text">{bodyText}</p>
              {this.props.keywords.length > 0 && keywordItems}
              {/* {this.props.keywords.length > 0 && conceptItems} */}
              {/* <a href="#" className="card-link">{keywords}</a> */}
            </div>
        </div>
      );
    }
  }
  
  export default Search_card;
