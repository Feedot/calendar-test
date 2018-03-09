let data =  {mo:[],tu:[],we:[],th:[],fr:[],sa:[],su:[]};
export default (array) =>{

    let compileNewData = array.reduce((arr,day)=>{

        if( day.length!==1 || !day.length ){
            let counter = 0;
            let correctDay = day.reduce((ar,obj,index)=>{
                if(day[index+1] !== undefined && obj.bt >= counter){
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

    compileNewData.map((day,index)=>{

        switch (index){
            case 0: data.mo = day; break;
            case 1: data.tu = day; break;
            case 2: data.we = day; break;
            case 3: data.th = day; break;
            case 4: data.fr = day; break;
            case 5: data.sa = day; break;
            case 6: data.su = day; break;
        }

    })

    return data;

}