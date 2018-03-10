import React, { Component } from "react";
import { connect } from 'react-redux'


class CustomBox extends Component {
    constructor() {
        super();
        this.table = document.querySelector('table')
    }
    onMouseOver = event => {
        let {indexes} = this.props;
        if (this.props.state.mouseOver) {this.onClick(indexes)}
    }
    onMouseDown = event => {
        let {indexes} = this.props
        this.props.setState({ mouseOver: true });
        this.onClick(indexes)
        this.table.onmouseup = event => this.handleUp(event);
        event.stopPropagation();
    }
    handleUp = event => {
        this.props.setState({ mouseOver: false });
        this.table.onmousemove = event => event.stopPropagation();
    }
    onClick = payload => this.props.onHandleClick(payload)
    render(){
        let {onMouseDown,onMouseOver,onClick} = this;
        return <td {...{onMouseDown,onMouseOver,onClick}} className={ this.props.status ? 'checked' : null}/>
    }
}
export default connect (
    state => ({}),
    dispatch => ({ onHandleClick: payload => dispatch({ type:"CHECK_HOUR", payload }) })
)(CustomBox);
