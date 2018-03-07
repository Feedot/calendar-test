import React, { Component } from "react";
import { connect } from "react-redux";
import CustomBox from "../../components/CustomBox"
import "./styles.css";

class Row extends Component {
  handleDaysName = (index) =>{
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
      {data.map((item,index) => {
        return(
            <tr key={index}>
                {this.handleDaysName(index)}
                <td className={'checkBox'}></td>
                {item.map( (status,i)=> <CustomBox key={i} status={status}/>)}
            </tr>
        )
      })}
      </tbody>
    );
  }
}
export default connect(
  state => ({
    data: state.matrix
  }),
  dispatch => ({
    takeData: () => {
      dispatch({ type: "TAKE_DATA" });
    }
  })
)(Row);
