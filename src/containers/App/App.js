import React, { Component } from "react";
import Table from "../Table/index";
import {connect} from 'react-redux'

import "./App.css";

class App extends Component {
    handleTrinspileBack= () => this.props.onHandleTrinspileBack()
    handleClear= () => this.props.onHandleClear()
  render() {
    return (
      <div className="App">
        <Table />
        <button className="click" onClick={this.handleTrinspileBack}>Save Changes</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default connect (
    state=>({}),
    dispatch=>({
      onHandleTrinspileBack: () => {
          dispatch({ type:"TRINSPILE_BACK" })
      },
      onHandleClear: ()=>{
          dispatch({ type:"CLEAR"})
      }
    }))
(App);
