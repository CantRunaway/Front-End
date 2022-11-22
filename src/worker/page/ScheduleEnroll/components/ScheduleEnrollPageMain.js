import React, { useEffect, useState } from 'react'
import '../css/ScheduleEnrollPageMain.css'
import BottomMenu from '../../../../etc/Worker_Components/BottomMenu'
import WorkScheduleEnrollSession from './WorkScheduleEnrollSession'
import ScheduleHeader from './ScheduleHeader'
import EducationScheduleEnrollSession from './EducationScheduleEnrollSession'

function ScheduleEnrollPageMain({startModifiTime, endModifiTime, currentTime, modifyAuthority}) {
  const [isClassSchedule, setisClassSchedule] = useState(true);
  const [workerSchedule, setWorkerSchedule] = useState([
    {
      type:'class',
      id:'11:00월',
      day:'월',
      time:'11:00',
    },
    {
      type:'class',
      id:'11:30월',
      day:'월',
      time:'11:30'
    },
    {
      type:'class',
      id:'12:00월',
      day:'월',
      time:'12:00'
    },
    {
      type:'work',
      id:'13:00목',
      day:'목',
      time:'13:00'
    },
    {
      type:'work',
      id:'13:30목',
      day:'목',
      time:'13:30'
    }
  ])

  const toggleClass = () => {
    setisClassSchedule(true)
  }

  const toggleWork = () => {
    setisClassSchedule(false)
  }


  return (
    <div className='schedule-enroll-conteiner'>

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
              workerSchedule={workerSchedule}
              setWorkerSchedule={setWorkerSchedule}
            /> 
            : 
            <EducationScheduleEnrollSession
              isClassSchedule={isClassSchedule}
              workerSchedule={workerSchedule}
              setWorkerSchedule={setWorkerSchedule}
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