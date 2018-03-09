import React, { Component } from "react";
import { connect } from "react-redux";
import CustomBox from "../../components/CustomBox"
import FirstRow from '../../components/FirstRow'
import "./styles.css";

class Row extends Component {
    constructor() {
        super();
        this.state = {
            mouseOver: false
        };
    }

    handleCheckDay = dayIndex => this.props.onHandleCheckDay(dayIndex);
    handleDaysName = index => {
      switch (index) {
          case 0: return <td className={'name'}>{"MO"}</td> ; break;
          case 1: return <td className={'name'}>{"TU"}</td>; break
          case 2: return <td className={'name'}>{"WE"}</td>; break;
          case 3: return <td className={'name'}>{"TH"}</td>;break;
          case 4: return <td className={'name'}>{"FR"}</td>; break;
          case 5: return <td className={'name'}>{"SA"}</td>; break;
          case 6 :return <td className={'name'}>{"SA"}</td>; break;
      }
    }
  componentWillMount() {
    let { data , takeData } = this.props;
    if (!data.length) takeData();
  }
  render() {
    let { data } = this.props
    return (
      <tbody>
      <FirstRow/>
      {data.map((item,dayIndex) => {
        return(
            <tr key={dayIndex}>
                {this.handleDaysName(dayIndex)}
                <td onClick={()=>{this.handleCheckDay(dayIndex)}} className='checkBox'></td>
                {item.map( (status,hourIndex)=> <CustomBox
                    setState={this.setState.bind(this)}
                    state={this.state}
                    key={hourIndex}
                    status={status}
                    indexes = {{dayIndex,hourIndex}}
                />)}
            </tr>
        )
      })}

      </tbody>
    );
  }
}
export default connect(
  state => ({
      state:state,
    data: state.matrix
  }),
  dispatch => ({
    takeData: () => {
      dispatch({ type: "TAKE_DATA" });
    },
    onHandleClick:obj => {
        dispatch({ type:"CHECK_HOUR",payload:obj })
    },
    onHandleCheckDay: index => {
        dispatch({ type:"CHECK_DAY",payload:index })
    }
  })
)(Row);
