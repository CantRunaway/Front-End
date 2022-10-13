import React from 'react'
import './css/WorkerMainPage.css'
import Header from '../../../etc/Worker_Components/Header'
import BottomMenu from '../../../etc/Worker_Components/BottomMenu'


function WorkerMainPage() {
  return (
    <div className='worker-main-container'>

      <header className='worker-main-header'>
        <Header />
      </header>
      
      <div className='WorkerMainSession'>
        중간
      </div>

      <div className='BottomMenu'>
        <BottomMenu />
      </div>

    </div>
  )
}

export default WorkerMainPage