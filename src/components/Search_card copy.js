import React, { Component } from "react";
// import $ from 'jquery';



class Search_card extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state =  { 
    //   };
    // }
  
    componentDidMount() {
    }

    render() {
      // var tempstyle = {
  
      // }
      // style={tempstyle}

      // const Keywords = (this.props) =>{
        const keywords = this.props.keywords;
        // console.log(props)
        const KeywordItems = keywords.map((item) => {
          return <a href="#" className="card-link">{item}</a>
        })
      // }

      return (
        <div className="d-flex mb-3 w-75 mx-auto card bg-warning text-white">
          
            <div className = "card-body">
              <h5 className="card-title"><a className="text-white" href='#'>{this.props.csi} | {this.props.title}</a></h5>
              {/* <h6 className="card-subtitle mb-2 text-muted"><a className="text-primary" href='#'>{this.props.keyword}</a> (score: {this.props.relevance})</h6> */}
              {/* <p className="card-text">{this.props.body}</p> */}
              {/* <KdeywordItems/> */}
              {/* <a href="#" className="card-link">{keywords}</a> */}
            </div>
        </div>
      );
    }
  }
  
  export default Search_card;
