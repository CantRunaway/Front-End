import React from 'react'
import '../ScheduleEnroll/css/ScheduleEnrollPage.css'
import Header from '../../../etc/components/Header'
import SideMenu from '../../../etc/components/SideMenu'
import EducationScheduleEnrollSession from './components/EducationScheduleEnrollSession'
import WorkScheduleEnrollSession from './components/WorkScheduleEnrollSession'

function ScheduleEnrollPage() {
  return (
    <div className='ScheduleEnrollPage'>
    {/* 상단 */}
      <header>
        <Header/>
      </header>
      {/* 사이드 매뉴 */}
      <div className='SideMenu'>
        <SideMenu/>
      </div>
      {/* 수업 시간표 등록 영역 */}
      <div className='EducationScheduleEnrollSession'>
        <EducationScheduleEnrollSession/>
      </div>
      {/* 근로 시간표 등록 영역 */}
      <div className='WorkScheduleEnrollSession'>
        <WorkScheduleEnrollSession/>
      </div>
    </div>
  )
}

export default ScheduleEnrollPage