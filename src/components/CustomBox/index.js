import React, { Component } from "react";
import { connect } from 'react-redux'


class CustomBox extends Component {
    constructor() {
        super();
        this.table = document.querySelector('table')
    }
    handleOver = event => {
        let {indexes} = this.props;
        if (this.props.state.mouseOver) {this.handleClick(indexes)}
        event.preventDefault()
    }
    handleDown = event => {
        let {indexes} = this.props;
        this.props.setState({ mouseOver: true });
        this.handleClick(indexes)
        event.target.onmouseup = () => this.handleClick(indexes)
        this.table.onmouseup = event => this.handleUp(event);
        event.stopPropagation();
    }
    handleUp = event => {
        this.props.setState({ mouseOver: false });
        this.table.onmousemove = event => event.stopPropagation();
    }
    handleClick = () => {
        let {indexes} = this.props;
        this.props.onHandleClick(indexes)
    }
    render(){
        let {status} = this.props;
        if(status) return <td
            onMouseDown={this.handleDown}
            onMouseOver={this.handleOver}
            onClick={this.handleClick}
            className='checked'/>
        else return <td
            onMouseDown={this.handleDown}
            onMouseOver={this.handleOver }
            onClick={this.handleClick}
        />

    }



}
export default connect (
    state => ({}),
    dispatch => ({
        onHandleClick:payload => dispatch({ type:"CHECK_HOUR", payload })
    })
)(CustomBox);
