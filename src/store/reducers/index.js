import CreateMatrix from "../../functions/createMatrix";
import toDoSameRow from '../../functions/toDoSameRow'
import trinspileBack from '../../functions/trinspileBack'

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      state.matrix = CreateMatrix(payload);
      break;
      case "CHECK_HOUR":

        let {dayIndex,hourIndex} = payload

        state.matrix.map( (day,index) => {
            if (dayIndex === index) day[hourIndex] =!day[hourIndex]
            return day
        })
        break;
      case "CHECK_DAY":
          let matrix = state.matrix[payload],
              counter = matrix.reduce((sum,status)=>{ if (status) sum++; return sum },0),
              day;
          if(counter !== 24 ) day = toDoSameRow(matrix,true)
          else day = toDoSameRow (matrix,false)
          state.matrix[payload] = day;
          break;

      case "TRINSPILE_BACK":
           let array = state.matrix.reduce((row,item)=>{

                let indexes = item.reduce( (arr,hour,hourIndex) => { if (hour) arr.push(hourIndex); return arr},[]);
                row.push(indexes); return row },[]),

              arrayObj = array.reduce((arr,item)=>{
                  if(item.length === 24)arr.push ([{bt:0,et:1439}])
                  else {
                      let arrayMinutes = item.reduce((ar,hour) => {
                      ar.push ({bt:hour*60,et:hour*60+59}); return ar }, [])
                      arr.push(arrayMinutes)
                  }

              return arr },[])

          let data = trinspileBack(arrayObj)
            console.log(data)
          break;
  }

  return { ...state };
};
