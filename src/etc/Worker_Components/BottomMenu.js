import React from 'react'
import '../css/BottomMenu.css'
import { NavLink } from "react-router-dom";

function BottomMenu() {
  return (
    <div className='bottom-manu'>

      <span className='request-worker-link'>
        <NavLink to=''>
          <img src='/img/RequestWorker_ICON.png' alt='근로요청' />
          임시근로 요청
        </NavLink>
      </span>

      <span className='schedule-table-link'>
        <NavLink to=''>
          <img src='/img/ScheduleTable_ICON.png' alt='시간표' />
          근로 시간표
        </NavLink>
      </span>

      <span className='schedule-register-link'>
        <NavLink to=''>
          <img src='/img/ScheduleRegister_ICON.png' alt='시간표등록' />
          시간표 등록
        </NavLink>
      </span>

      <span className='user-info-link'>
        <NavLink to=''>
          <img src='/img/USER_ICON.png' alt='정보조회' />
          정보조회
        </NavLink>
      </span>

    </div>
  )
}

export default BottomMenu