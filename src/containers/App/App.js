import React, { Component } from "react";
import Table from "../Table/index";
import {connect} from 'react-redux'
import "./App.css";

class App extends Component {
    handleTrinspileBack=()=>{
        this.props.onhandleTrinspileBack()
    }
  render() {
    return (
      <div className="App">
        <Table />
        <button onClick={()=>{this.handleTrinspileBack()}}>Save Changes</button>
      </div>
    );
  }
}

export default connect (
    state=>({}),
    dispatch=>({
      onhandleTrinspileBack: () => {
          dispatch({ type:"TRINSPILE_BACK" })
      }
    }))
(App);
