import React from 'react'
import '../ScheduleManagement/css/ScheduleManagementPage.css'
import Header from '../../../etc/Manager_Components/Header'
import SideMenu from '../../../etc/Manager_Components/SideMenu'
import ScheduleManagementSession from '../../../manager/page/ScheduleManagement/components/ScheduleManagementSession'

function ScheduleManagementPage() {
  return (
    <div className='ScheduleManagementPage'>
      {/* 상단 */}
      <header>
        <Header/>
      </header>
      {/* 사이드 메뉴 */}
      <div className='SideMenu'>
        <SideMenu/>
      </div>
      {/* 시간표 수정기간 설정 영역 */}
      <div className='ScheduleManagementSession'>
        <ScheduleManagementSession/>
      </div>
    </div>
  )
}

export default ScheduleManagementPage