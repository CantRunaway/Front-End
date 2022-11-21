import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/ScheduleTable.css'

function ScheduleTable({isClassSchedule, workerSchedule}) {

    const date = ['일', '월', '화', '수', '목', '금', '토']

    useEffect(()=>{
        settingTable()
    },[])

    const settingTable = () => {
        let target = '';
        let id = '';
        for(let j=0; ; j++){
            if(workerSchedule[j] == null) break;

            id = workerSchedule[j].time + workerSchedule[j].day;
            target = document.getElementById(id);

            if(workerSchedule[j].type === "class"){
                 target.style.background='#828282';
            }
            else{
                target.style.background='#E0D1FF';
            }

        }
    }


    const setCheckBoxTable = () => {
        const timeTable = []

        for(let i=9; i<=18; i+=0.5){
            let temp = []
            for(let j=0; j<date.length; j++){
                let time = i;

                if(i%1 !== 0){
                    time = i-0.5+':30'
                    if(j===0){
                        temp.push(
                            <span key={i+date[j]+3} className={`worker-schedule-timeTable-contant`} ></span>
                        )
                    }
                    temp.push(
                        <label 
                            key={i+date[j]+1} 
                            className={`worker-schedule-checkBox-Table-contant`} 
                            id={time+date[j]}
                        >
                            <span>
                                <input 
                                    className='worker-schedule-check' 
                                    type="checkbox"
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
                            <span key={i+':00'+date[j]+3}  className={`worker-schedule-timeTable-contant`} >{i}</span>
                        )
                    }
                    temp.push(
                        <label 
                            key={i+date[j]+1} 
                            className={`worker-schedule-checkBox-Table-contant`}  
                            id={time+date[j]}
                        >
                            <span>
                                <input 
                                    className='worker-schedule-check' 
                                    type="checkbox"
                                >
                                </input>
                            </span>
                        </label>

                    )
                }
            }

            timeTable.push(
                <div 
                    className={`worker-schedule-checkBox-Table-contants`} 
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
    <div className='worker-schedule-container'>
      <div className='worker-schedule-week-line-container'>
          {    
            date.map((days, index) => (
              <span className='worker-schedule-week-line' key ={index+'w'}>{days}</span>
            ))
          }
      </div>

      <div className='worker-schedule-table-container'>
        <div className='worker-schedule-checkBox-Table-container'>
            {
                setCheckBoxTable()
            }
        </div>

      </div>
    </div>
  )
}

export default ScheduleTable