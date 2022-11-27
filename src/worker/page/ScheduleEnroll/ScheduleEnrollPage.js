import React, { useEffect, useState } from 'react'
import '../ScheduleEnroll/css/ScheduleEnrollPage.css'
import AccessScheduleEnroll from './components/AccessScheduleEnroll'
import ScheduleEnrollPageMain from './components/ScheduleEnrollPageMain'
import dayjs from 'dayjs'
import axios from 'axios'

function ScheduleEnrollPage() {
  const [timeData, setTimeData] = useState({})
  const [startModifiTime, setStartModifiTime] = useState(dayjs(new Date()));
  const [endModifiTime, setEndtModifiTime] = useState(dayjs(new Date()));
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [modifyAuthority, setModifyAuthority] = useState(
    startModifiTime <= currentTime && currentTime < endModifiTime.add(1,'day')
    ) 
  const [permission, setPermission] = useState(modifyAuthority);

  const getTimeData = async() => {
    await axios.get("http://localhost:8080/temporal/")
    .then((res) => {
      setTimeData((res.data[0]))
    })
    .catch((err) => {
      console.error("error: " + {error: err} )
    })
  }

  useEffect(() => {
    getTimeData()
    console.log(timeData)
    setStartModifiTime(dayjs(new Date(timeData.edit_start)))
    setEndtModifiTime(dayjs(new Date(timeData.edit_end)))
  }, [])

  return (
    <div>
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