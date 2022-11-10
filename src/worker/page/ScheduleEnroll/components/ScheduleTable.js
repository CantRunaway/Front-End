import React, { useState } from 'react'
import '../css/ScheduleTable.css'

function ScheduleTable() {
    const date = ['일', '월', '화', '수', '목', '금', '토']
    const [checkValue, setCheckValue] = useState([{day:"", time:0}])   

    const clickCheck = (e) => {
        
        checkValue.push(e)
        
        console.log(checkValue)
        console.log(e)
    }

    const timeTable = []
    const setCheckBoxTable = () => {
        
        for(let i=9; i<=18; i+=0.5){
            let temp = []
            for(let j=0; j<date.length; j++){

                if(i%1 != 0){
                    if(j==0){
                        temp.push(
                            <span className={`schedule-timeTable-contant`}></span>
                        )
                    }
                    temp.push(
                        <label className={`schedule-checkBox-Table-contant`}  >
                            <span  >
                                <input 
                                    className='scadule-check' 
                                    type="checkbox"
                                    onClick={()=>clickCheck({day:date[j], time:i})}
                                >
                                </input>
                            </span>
                        </label>

                    )
                }
                else{
                if(j==0){
                    temp.push(
                        <span className={`schedule-timeTable-contant`} key={`time`+i}>{i}</span>
                    )
                }
                temp.push(
                    <label className={`schedule-checkBox-Table-contant`}  >
                        <span >
                            <input 
                                className='scadule-check' 
                                type="checkbox"
                                onClick={()=>clickCheck({day:date[j], time:i})}
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
                    key={i} 
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
              <span className='schedule-week-line' key ={index+`week`}>{days}</span>
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