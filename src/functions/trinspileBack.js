let keys = ["mo","tu","we","th","fr","sa","su"],
    data =  {}
export default array =>{

    let compileNewData = array.reduce((arr,day)=>{

        if( day.length > 1 ){
            let counter = 0,
                correctDay = day.reduce((ar,obj,index)=>{
                if( day[index+1] !== undefined && obj.bt >= counter){
                    if(obj.et+1 !== day[index+1].bt) ar.push(obj)
                    else {
                        obj.et = day[index+1].et;
                        for(let i = index+1; i+1 < day.length; i++ ) {
                            if (obj.et+1 !== day[i+1].bt) break;
                            else  obj.et = day[i+1].et
                        }
                        counter = obj.et;
                        ar.push(obj);
                    }
                }
                return ar },[])

            arr.push(correctDay)

        }else arr.push(day)
        return arr
    },[])

    compileNewData.map( (day,index)=> data[keys[index]] = day )

    return data;

}