import React, { useState } from 'react'
import '../ScheduleEnroll/css/ScheduleEnrollPage.css'
import BottomMenu from '../../../etc/Worker_Components/BottomMenu'
import WorkScheduleEnrollSession from './components/WorkScheduleEnrollSession'
import ScheduleHeader from './components/ScheduleHeader'
import EducationScheduleEnrollSession from './components/EducationScheduleEnrollSession'

function ScheduleEnrollPage() {
  const [scheduleButton, setscheduleButton] = useState(true);

  const toggleClass = () => {
    setscheduleButton(true)
  }

  const toggleWork = () => {
    setscheduleButton(false)
  }


  return (
    <div className='schedule-enroll-conteiner'>

      <div className='worker-schedule-header'>
        <ScheduleHeader
          scheduleButton ={scheduleButton}
          toggleClass={toggleClass}
          toggleWork={toggleWork}
        />
      </div>
      
      <div className='worker-schedule-main'>
      {
        scheduleButton ? 
        <WorkScheduleEnrollSession /> : <EducationScheduleEnrollSession/>
      }

      </div>

      <div className='BottomMenu'>
        <BottomMenu />
      </div>

    </div>
  )
}

export default ScheduleEnrollPage