import { secondsToMilliseconds } from 'date-fns'
import React, { useState, useEffect } from 'react'
import '../css/ScheduleTable.css'

function ScheduleTable({isClassSchedule, workerSchedule}) {
    const [checkValue, setCheckValue] = useState([])   
    const [temp, setTempe] = useState()

    const date = ['일', '월', '화', '수', '목', '금', '토']
    useEffect(()=>{
        settingTable()
    },[])
    
    const settingTable = () => {
        let targetTag = '';
        let i = '';
        let t = '';
        let d = '';
        for(let j=0; j<workerSchedule.value; j++){
            t = workerSchedule[j].time
            d = workerSchedule[j].day
            if(t.includes(':')){
                i = t.split(':')[0]+'.5'+d;
            }
            else{
                i = t + d;
            }
            setTempe({ id:i, day:d, time:t })
            console.log(temp)
            setCheckValue([...checkValue, temp])
        }
        console.log(checkValue)
    }


    const onClickHandler = (e, v, t, d) =>{
        if(isClassSchedule !== 'readMode'){
            onCheckedSchedule(e, v, t, d)
        }

    }

    const onCheckedSchedule = (e, v, t, d) =>{
        let checked = e.target.checked
        const newValue = { id:v, day:d, time:t };

        if(v){
            changeBoxColor(v, checked)
        }

        if(checked){
            const newArr = [...checkValue, newValue];
            setCheckValue(newArr);
        }
        else{
            setCheckValue(checkValue.filter((arr)=> arr.id !== v ))
        }

    }

    const changeBoxColor = (id, check) => {
        if(check){
            let targetTag = document.getElementById(id)
            if(isClassSchedule){
                targetTag.style.background='#828282';
            }
            else{
                targetTag.style.background='#E0D1FF';
            }
        }
        else{
            let targetTag = document.getElementById(id)
            targetTag.style.background='';
        }
        console.log('cha', checkValue)

    }

    const timeTable = []
    const setCheckBoxTable = () => {
        
        for(let i=9; i<=18; i+=0.5){
            let temp = []
            for(let j=0; j<date.length; j++){
                let time = i;
                let day = date[j];

                if(i%1 !== 0){
                    time = i-0.5+':30'
                    if(j===0){
                        temp.push(
                            <span key={i+date[j]+3} className={`schedule-timeTable-contant`}></span>
                        )
                    }
                    temp.push(
                        <label 
                            key={i+date[j]+1} 
                            className={`schedule-checkBox-Table-contant`} 
                            id={i+date[j]}
                            onClick={(e)=>
                                onClickHandler(e, e.target.value, time, day)
                            }
                        >
                            <span>
                                <input 
                                    className='scadule-check' 
                                    type="checkbox"
                                    value={i+date[j]}
                                >
                                </input>
                            </span>
                        </label>

                    )
                }
                else{
                    if(j===0){
                        temp.push(
                            <span key={i+date[j]+3}  className={`schedule-timeTable-contant`} >{i}</span>
                        )
                    }
                    temp.push(
                        <label 
                            key={i+date[j]+1} 
                            className={`schedule-checkBox-Table-contant`}  
                            id={i+date[j]}
                            onClick={(e)=>
                                onClickHandler(e, e.target.value, time, day)
                            }
                        >
                            <span>
                                <input 
                                    className='scadule-check' 
                                    type="checkbox"
                                    value={i+date[j]}
                                >
                                </input>
                            </span>
                        </label>

                    )
                }
            }

            timeTable.push(
                <div 
                    className={`schedule-checkBox-Table-contants`} 
                    key={i+'t'} 
                >
                    {temp}
                </div>
            )

        }

        return(
            timeTable
        )
    }


  return (
    <div className='schedule-container'>
      <div className='schedule-week-line-container'>
          {    
            date.map((days, index) => (
              <span className='schedule-week-line' key ={index+'w'}>{days}</span>
            ))
          }
      </div>

      <div className='schedule-table-container'>
        <div className='schedule-checkBox-Table-container'>
            {
                setCheckBoxTable()
            }
        </div>

      </div>
    </div>
  )
}

export default ScheduleTable