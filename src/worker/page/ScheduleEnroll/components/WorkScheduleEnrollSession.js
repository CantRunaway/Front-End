import React from 'react'
import '../css/WorkerScheduleEnrollSession.css'
import ScheduleTable from './ScheduleTable'


function WorkScheduleEnrollSession({isClassSchedule, workerSchedule, setWorkerSchedule}) {
  return (
    <div className='schedule-table-box'>

      <div className='schedule-table'>
        {<ScheduleTable 
          isClassSchedule={isClassSchedule}
          workerSchedule={workerSchedule}
          setWorkerSchedule={setWorkerSchedule}
        />}
        
      </div>

      <button className='schedule-table-sendButton'>
        수정
      </button>
    </div>
  )
}

export default WorkScheduleEnrollSession