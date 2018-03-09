import React, { Component } from "react";
import { connect } from 'react-redux'


class CustomBox extends Component {
    constructor() {
        super();
        this.table = document.querySelector('table')
    }
    handleOver = (indexes, event) => {
        if (this.props.state.mouseOver) {this.handleClick(indexes)}
        event.preventDefault()
    }
    handleDown = (indexes,event) => {
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
    handleClick = obj => this.props.onHandleClick(obj)
    render(){
        let {status,indexes} = this.props;
        if(status) return <td
            onMouseDown={ event => this.handleDown(indexes,event)}
            onMouseOver={ event => this.handleOver(indexes,event)}
            onClick={() => this.handleClick(indexes)}
            className={'checked'}/>
        else return <td
            onMouseDown={ event => this.handleDown(indexes,event)}
            onMouseOver={ event => this.handleOver(indexes,event) }
            onClick={() => this.handleClick(indexes)}
        />

    }



}
export default connect (
    state => ({}),
    dispatch => ({
        onHandleClick:obj => {dispatch({ type:"CHECK_HOUR",payload:obj })}
    })
)(CustomBox);
