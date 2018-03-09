import React, { Component } from "react";
import { connect } from "react-redux";
import CustomBox from "../../components/CustomBox"
import FirstRow from '../../components/FirstRow'
import "./styles.css";

class Row extends Component {
    constructor() {
        super();
        this.state = { mouseOver: false }
    }
    handleCheckDay = dayIndex => this.props.onHandleCheckDay(dayIndex);
    handleDaysName = (index,days) => <td className={'name'}>{days[index]}</td>
  componentWillMount() {
    let { data , takeData } = this.props;
    if ( !data.length ) takeData();
  }
  render() {
    let { data } = this.props, {setState , state } = this,
         days =  ["MO","TU","WE","TH","FR","SA","SU"];
        setState = setState.bind(this)
    return (
      <tbody>
      <FirstRow/>
      {data.map((item,dayIndex) => {
        return(
            <tr key={dayIndex}>
                {this.handleDaysName(dayIndex,days)}
                <td onClick={()=>{this.handleCheckDay(dayIndex)}} className='checkBox'>Check</td>
                {item.map((status,hourIndex) => <CustomBox {...{setState,state,status,key:hourIndex,indexes:{dayIndex,hourIndex}}}/>)}
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
    takeData: () => dispatch({ type: "TAKE_DATA" }),
    onHandleCheckDay: index => dispatch({ type:"CHECK_DAY",payload:index })
  })
)(Row);
