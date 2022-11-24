import React, { useEffect, useState } from 'react'
import '../ScheduleEnroll/css/ScheduleEnrollPage.css'
import BottomMenu from '../../../etc/Worker_Components/BottomMenu'
import WorkScheduleEnrollSession from './components/WorkScheduleEnrollSession'
import ScheduleHeader from './components/ScheduleHeader'
import EducationScheduleEnrollSession from './components/EducationScheduleEnrollSession'
import AccessScheduleEnroll from './components/AccessScheduleEnroll'
import ScheduleEnrollPageMain from './components/ScheduleEnrollPageMain'
import dayjs from 'dayjs'

function ScheduleEnrollPage() {
  const [startModifiTime, setStartModifiTime] = useState(dayjs(new Date('2022-11-22')));
  const [endModifiTime, setEndtModifiTime] = useState(dayjs(new Date('2022-11-25')));
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [modifyAuthority, setModifyAuthority] = useState(
    startModifiTime <= currentTime && currentTime < endModifiTime.add(1,'day')
    ) 
  const [permission, setPermission] = useState(modifyAuthority);
  return (
    <div>
{
  console.log(modifyAuthority)
}
      {
        permission ? 
          <ScheduleEnrollPageMain
            startModifiTime={startModifiTime}
            endModifiTime={endModifiTime}
            currentTime={currentTime}
            modifyAuthority={modifyAuthority}
            permission={permission}
          />
          :
          <AccessScheduleEnroll
          startModifiTime={startModifiTime.format('YYYY-MM-DD')}
          endModifiTime={endModifiTime.format('YYYY-MM-DD')}
        />  
      }
    </div>
  )
}

export default ScheduleEnrollPage