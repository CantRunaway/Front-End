import React, { useEffect, useState } from 'react'
import '../ScheduleEnroll/css/ScheduleEnrollPage.css'
import BottomMenu from '../../../etc/Worker_Components/BottomMenu'
import WorkScheduleEnrollSession from './components/WorkScheduleEnrollSession'
import ScheduleHeader from './components/ScheduleHeader'
import EducationScheduleEnrollSession from './components/EducationScheduleEnrollSession'
import dayjs from 'dayjs'

function ScheduleEnrollPage() {
  const [isClassSchedule, setisClassSchedule] = useState(true);
  const [startModifiTime, setStartModifiTime] = useState(dayjs(new Date('2022-09-01')));
  const [endModifiTime, setEndtModifiTime] = useState(dayjs(new Date('2022-12-01')));
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [modifyAuthority, setModifyAuthority] = useState(
    startModifiTime <= currentTime && currentTime <= endModifiTime
    ) // 클릭 이벤트 막기용
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

  

  const preventModify = (e) =>{
    if(!modifyAuthority){
      e.preventDefault()
      alert('수정 가능 날짜가 아닙니다.')
    }
  }



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
      
      <div className='worker-schedule-enroll-main' onClick={preventModify}>
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

      <div className='worker-schedule-enrollBottomMenu'>
        <BottomMenu />
      </div>

    </div>
  )
}

export default ScheduleEnrollPage