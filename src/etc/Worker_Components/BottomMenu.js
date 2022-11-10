import React from 'react'
import '../css/WorkerBottomMenu.css'
import { NavLink } from "react-router-dom";

function BottomMenu() {
  return (
    <div className='bottom-manu'>

      <div className='request-worker-link'>
        <NavLink to=''>
          <img src='/img/RequestWorker_ICON.png' alt='근로요청' />
          <span>임시근로 요청</span>
        </NavLink>
      </div>

      <div className='schedule-table-link'>
        <NavLink to=''>
          <img src='/img/ScheduleTable_ICON.png' alt='시간표' />
          <span>근로 시간표</span>
        </NavLink>
      </div>

      <div className='schedule-register-link'>
        <NavLink to='/:username/scheduleenroll'>
          <img src='/img/ScheduleRegister_ICON.png' alt='시간표등록' />
          <span>시간표 등록</span>
        </NavLink>
      </div>

      <div className='user-info-link'>
        <NavLink to='/:username/info'>
          <img src='/img/USER_ICON.png' alt='정보조회' />
          <span>정보조회</span>
        </NavLink>
      </div>

    </div>
  )
}

export default BottomMenu