import React from 'react'
import '../Main/css/ManagerMainPage.css';
import Header from '../../../etc/Manager_Components/Header';
import SideMenu from '../../../etc/Manager_Components/SideMenu';
import ManagerSession from '../../../manager/page/Main/components/ManagerMainSession'

function ManagerMainPage() {
  return (
    <div className='ManagerMainPage'>
      {/* 상단 */}
      <header>
          <Header/>
      </header>
      <div className='managermain_session'>
        {/* 사이드 메뉴 */}
        <div className='SideMenu'>
          <SideMenu/>
        </div>
        {/* 관리자 메인 영역 */}
        <div className='ManagerMainSession'>
          <ManagerSession/>
        </div>
      </div>
    </div>
  )
}

export default ManagerMainPage