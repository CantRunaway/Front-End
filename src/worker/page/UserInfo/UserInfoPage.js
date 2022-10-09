import React from 'react'
import '../UserInfo/css/UserInfoPage.css'
import Header from '../../../etc/components/Header'
import SideMenu from '../../../etc/components/SideMenu'
import UserInfoSession from '../UserInfo/components/UserInfoSession'

function UserInfoPage() {
  return (
    <div className='UserInfoPage'>
    {/* 상단 */}
      <header>
        <Header/>
      </header>
      {/* 사이드 메뉴 */}
      <div className='SideMenu'>
        <SideMenu/>
      </div>
      {/* 사용자 정보 조회 영역 */}
      <div className='UserInfoSession'>
        <UserInfoSession/>
      </div>
    </div>
  )
}

export default UserInfoPage