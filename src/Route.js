import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  render() {

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