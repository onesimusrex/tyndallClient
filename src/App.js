import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import backgroundVideo from "./content/video/militaryConstruction.mp4"

var apiURI = "http://localhost:9000/testAPI/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  { 
      "logo-text": "",
      "taglink-text": "",
      "tagline-text": "" 
    };
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
    this.callAPI();
  }

  getImage(apiId){
    var uri = apiURI + apiId
    fetch(uri)
      .then(res => res.text())
      .catch(err => err);
  }

  render() {
    var divStyle = {
      color: 'white',
      position: 'absolute',
      top: "10px",
      fontSize: "15px"
    };
    return (
      <div>

        <header>

          <div className="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={backgroundVideo} type="video/mp4"></source>
          </video>
          <div className="container h-100">

          {/*<ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
    </ul>*/}

          <nav class="navbar navbar-light">
            <a class="navbar-brand" style={divStyle} href="#">{this.state["logo-text"]}</a>
          </nav>

            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="helveticaBoldCond">{this.state["taglink-text"]}</h1>
              </div>
            </div>
          </div>
        </header>


            <div className="row blueBox">
              <div className="col-md-9 mx-auto ">
                <p className="paragraphStyle">{this.state["tagline-text"]}</p>
              </div>
            </div>

      </div>
    );
  }
}

export default App;