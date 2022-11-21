import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../css/ScheduleTable.css'

function ScheduleTable({isClassSchedule, workerSchedule, setWorkerSchedule}) {
    let [checkValue, setCheckValue] = useState([])   

    const date = ['일', '월', '화', '수', '목', '금', '토']

    useEffect(()=>{
        settingTable()
        getEnrollment();
    },[])
    
    const [getEnrollmentDay, setUseEnrollmentDay] = useState({})

    const getEnrollment = async () => {
        
        axios.get(`http://localhost:8080/enrollment/${sessionStorage.getItem('user_id')}`)
        .then((res) => {
            console.log(res.data);

            setUseEnrollmentDay(res.data);
        })
        .catch((err) => {
            console.error({error:err});
        })
    }

    
    
    const settingTable = () => {
        
        let arr = []
        for(let j=0; ; j++){
            if(workerSchedule[j] == null) break;
            document.getElementById(workerSchedule[j].time + workerSchedule[j].day).click();
        }
        const newArr = [...workerSchedule];
        setCheckValue(newArr)
        return (arr)
    }

    const onClickHandler = (e, i, t, d) =>{
        let checked = e.target.checked
        let type = isClassSchedule ? "class" : "work"
        const newValue = { tpye:type, id:i, day:d, time:t };
        if(i === undefined) return

        if(i){
            changeBoxColor(i, checked)
        }

        if(checked){
            const newArr = [...checkValue, newValue];
            setCheckValue(newArr);
        }
        else{
            setCheckValue(checkValue.filter((arr)=> arr.id !== i ))
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
        console.log('check', checkValue)

    }

    const setCheckBoxTable = () => {
        const timeTable = []

        for(let i=9; i<=18; i+=0.5){
            let temp = []
            for(let j=0; j<date.length; j++){
                let time = i;
                let day = date[j];

                if(i%1 !== 0){
                    time = i-0.5+':30'
                    if(j===0){
                        temp.push(
                            <span key={i+date[j]+3} className={`schedule-timeTable-contant`} ></span>
                        )
                    }
                    temp.push(
                        <label 
                            key={i+date[j]+1} 
                            className={`schedule-checkBox-Table-contant`} 
                            id={time+date[j]}
                            onClick={(e)=>
                                onClickHandler(e, e.target.value, time, day)
                            }
                        >
                            <span>
                                <input 
                                    className='scadule-check' 
                                    type="checkbox"
                                    value={time+date[j]}
                                >
                                </input>
                            </span>
                        </label>

                    )
                }
                else{
                    time = i+':00'
                    if(j===0){
                        temp.push(
                            <span key={i+':00'+date[j]+3}  className={`schedule-timeTable-contant`} >{i}</span>
                        )
                    }
                    temp.push(
                        <label 
                            key={i+date[j]+1} 
                            className={`schedule-checkBox-Table-contant`}  
                            id={time+date[j]}
                            onClick={(e)=>
                                onClickHandler(e, e.target.value, time, day)
                            }
                        >
                            <span>
                                <input 
                                    className='scadule-check' 
                                    type="checkbox"
                                    value={time+date[j]}
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