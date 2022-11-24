import React from 'react'
import ScheduleTable from './ScheduleTable'

function EducationScheduleEnrollSession({isClassSchedule, workerSchedule, setWorkerSchedule}) {
  return (
    <div className='schedule-table-box'>

      <div className='schedule-table'>
        <ScheduleTable 
          isClassSchedule={isClassSchedule}
          workerSchedule={workerSchedule}
          setWorkerSchedule={setWorkerSchedule}
        />
      </div>

      <button className='scheduleEdit-btn'>
        수정
      </button>
  </div>
  )
}

export default EducationScheduleEnrollSession