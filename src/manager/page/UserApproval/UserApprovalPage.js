import React from 'react'
import '../UserApproval/css/UserApprovalSession.css'
import Header from '../../../etc/components/Header'
import SideMenu from '../../../etc/components/SideMenu'
import UserApprovalSession from './components/UserApprovalSession'

function UserApprovalPage() {
  return (
    <div className='UserApprovalPage'>
        <header>
            <Header/>
        </header>
        <div className='SideMenu'>
            <SideMenu/>
        </div>
        <div className='UserApprovalSession'>
            <UserApprovalSession/>
        </div>
    </div>
  )
}

export default UserApprovalPage