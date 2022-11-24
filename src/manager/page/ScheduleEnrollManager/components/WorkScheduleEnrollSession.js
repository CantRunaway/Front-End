import React from 'react'
import axios from 'axios';
import ScheduleTable from './ScheduleTable'

function WorkScheduleEnrollSession({isClassSchedule, workerSchedule, setWorkerSchedule}) {

  //스케줄 전달 (X)
  const editWorkSchedule = async() => {
    await axios.post("http://localhost:8080/")
    .then((res) => {
      setWorkerSchedule(res.data);
    })
    .catch((err) => {
      console.error({error:err})
  })
    console.log(workerSchedule);
  }
    return (
        <div className='schedule-table-box'>
    
          <div className='schedule-table'>
            {<ScheduleTable 
              isClassSchedule={isClassSchedule}
              workerSchedule={workerSchedule}
              setWorkerSchedule={setWorkerSchedule}
            />}
            
          </div>
    
          <button className='scheduleEdit-btn' onClick={editWorkSchedule}>
            수정
          </button>
        </div>
      )
}

export default WorkScheduleEnrollSession