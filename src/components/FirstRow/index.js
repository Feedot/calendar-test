import React, { Component } from "react";


class FirstRow extends Component {
    render() {
        return (
            <tr className="App">
                {new Array(10).fill(true).map( item =>{
                    return <td/>
                })}
            </tr>
        );
    }
}

export default FirstRow;