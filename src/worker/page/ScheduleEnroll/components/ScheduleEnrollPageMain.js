import React, { useEffect, useState } from 'react'
import '../css/ScheduleEnrollPageMain.css'
import BottomMenu from '../../../../etc/Worker_Components/BottomMenu'
import WorkScheduleEnrollSession from './WorkScheduleEnrollSession'
import ScheduleHeader from './ScheduleHeader'
import EducationScheduleEnrollSession from './EducationScheduleEnrollSession'
import axios from 'axios'

function ScheduleEnrollPageMain({startModifiTime, endModifiTime, currentTime, modifyAuthority}) {
  const [isClassSchedule, setisClassSchedule] = useState(true);


  const toggleClass = () => {
    setisClassSchedule(true)
  }

  const toggleWork = () => {
    setisClassSchedule(false)
  }


  return (
    <div className='schedule-enroll-conteiner'>
{
}
      <div className='worker-schedule-enroll-header'>
        <ScheduleHeader
          isClassSchedule ={isClassSchedule}
          toggleClass={toggleClass}
          toggleWork={toggleWork}
          startModifiTime={startModifiTime.format('YYYY.MM.DD')}
          endModifiTime={endModifiTime.format('YYYY.MM.DD')}
        />
      </div>
      
      <div className='user-info-page'>
        <div className='worker-schedule-enroll-main' >
          {
            isClassSchedule ? 
            <WorkScheduleEnrollSession 
              isClassSchedule={isClassSchedule}
            /> 
            : 
            <EducationScheduleEnrollSession
              isClassSchedule={isClassSchedule}
            />
          }
          </div>
    </div>

      <div className='worker-schedule-enrollBottomMenu'>
        <BottomMenu />
      </div>

    </div>
  )
}

export default ScheduleEnrollPageMain