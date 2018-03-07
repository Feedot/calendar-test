import React, { Component } from "react";
import { connect } from "react-redux";


const CustomBox = (props) =>{
    let {status} = props;
    if(status) return <td className={'checked'}/>
    else return <td/>
}
export default CustomBox;
