import React from "react";
const content = ["","ALL DAY","00","03","06","09",12,15,18,21],
    Сomponent = () =>
        <tr className="time">
            {content.map((item,index)=> <th
            className={(index>1) ? null: 'first'}
            colSpan={(index>1) ? 3 : null}
            >{(index>1)?`${content[index]}:00`:content[index]}</th>)}
        </tr>

export default Сomponent;
