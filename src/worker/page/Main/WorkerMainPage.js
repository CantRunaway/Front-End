import React from 'react'
import './css/WorkerMainPage.css'
import Header from '../../../etc/Worker_Components/Header'
import BottomMenu from '../../../etc/Worker_Components/BottomMenu'


function WorkerMainPage() {
  return (
    <div className='ScheduleEnrollPage'>

      <header>
        <Header />
      </header>

      <div className='BottomMenu'>
        <BottomMenu />
      </div>

      <div className='WorkerMainSession'>
      </div>
    </div>
  )
}

export default WorkerMainPage