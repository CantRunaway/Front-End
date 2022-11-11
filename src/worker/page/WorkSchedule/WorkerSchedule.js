import React, { useState } from 'react'
import Header from '../../../etc/Worker_Components/Header'
import BottomMenu from '../../../etc/Worker_Components/BottomMenu'
import ScheduleTable from '../ScheduleEnroll/components/ScheduleTable'
import './css/WorkerSchedule.css'

function WorkerSchedule()  {

  const isClassSchedule = 'readMode'
  const [workerSchedule, setWorkerSchedule] = useState([
    {
      type:'class',
      day:'월',
      time:'11'
    },
    {
      type:'class',
      day:'월',
      time:'11:30'
    },
    {
      type:'class',
      day:'월',
      time:'12'
    },
    {
      type:'work',
      day:'목',
      time:'13'
    },
    {
      type:'work',
      day:'목',
      time:'13:30'
    }
  ])


    return (
        <div className='worker-schedule-conteiner'>
    
          <div className='worker-schedule-header'>
            <Header />
          </div>
          
          <div className='worker-schedule-main' onClick={(e)=> e.preventDefault()}>
            <ScheduleTable 
              isClassSchedule={isClassSchedule}
              workerSchedule={workerSchedule}
            />
          </div>
    
          <div className='worker-schedule-bottomMenu'>
            <BottomMenu />
          </div>
    
        </div>
    )
}
export default WorkerSchedule;