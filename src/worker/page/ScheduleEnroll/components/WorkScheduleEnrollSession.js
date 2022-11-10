import React from 'react'
import '../css/WorkScheduleEnrollSession.css'
import ScheduleTable from './ScheduleTable'

function WorkScheduleEnrollSession() {
 
  const classSchedule = 
  [
    {
      day:'월',
      startTime:'9:00',
      endTime:'11:00',

    },
    {
      day:'수',
      startTime:'9:00',
      endTime:'11:00',

    },
    {
      day:'목',
      startTime:'13:30',
      endTime:'15:00',

    }
  ]

  return (
    <div className='schedule-table-box'>

      <div className='schedule-table'>
        <ScheduleTable></ScheduleTable>
      </div>

      <button className='schedule-table-sendButton'>
        수정
      </button>
    </div>
  )
}

export default WorkScheduleEnrollSession