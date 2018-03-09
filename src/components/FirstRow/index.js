import React from "react";
import './styles.css'

let component = () => {
    return (
        <tr className="time">
            <th className="first"></th>
            <th className="first">ALL DAY</th>
            <th colspan="3">00:00</th>
            <th colspan="3">03:00</th>
            <th colspan="3">06:00</th>
            <th colspan="3">09:00</th>
            <th colspan="3">12:00</th>
            <th colspan="3">15:00</th>
            <th colspan="3">18:00</th>
            <th colspan="3">21:00</th>
        </tr>
    );
}
export default component;
