import React from 'react'
import '../UserApproval/css/UserApprovalPage.css'
import TopHeader from '../../../etc/Manager_Components/TopHeader';
import Header from '../../../etc/Manager_Components/Header';
import SideMenu from '../../../etc/Manager_Components/SideMenu';
import UserApprovalPageSession from './components/UserApprovalSession';


function UserApprovalPage() {
  return (
    <div className='UserApprovalPage'>
      {/* 최상위 상단 */}
      <header>
          <TopHeader/>
      </header>
      <div className='userapproval_session'>
        {/* 사이드 메뉴 */}
        <div className='SideMenu'>
          <SideMenu/>
        </div>
        <div className='UserApprovalSession'>
          {/* 상단 */}
          <Header/>
          {/* 관리자 메인 영역 */}
          <UserApprovalPageSession/>
        </div>
      </div>
    </div>
  )
}

export default UserApprovalPage