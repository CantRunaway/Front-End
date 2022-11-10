import React from 'react'
import '../ScheduleEnroll/css/ScheduleEnrollPage.css'
import BottomMenu from '../../../etc/Worker_Components/BottomMenu'
import WorkScheduleEnrollSession from './components/WorkScheduleEnrollSession'
import ScheduleHeader from './components/ScheduleHeader'

function ScheduleEnrollPage() {
  return (
    <div className='ScheduleEnrollPage'>

      <div className='worker-main-header'>
        <ScheduleHeader />
      </div>
      
      <div className='WorkerMainSession'>
        <WorkScheduleEnrollSession />
      </div>

      <div className='BottomMenu'>
        <BottomMenu />
      </div>

    </div>
  )
}

export default ScheduleEnrollPage