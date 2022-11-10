import React from 'react'
import '../css/WorkScheduleEnrollSession.css'
import { useNavigate } from 'react-router';

function ScheduleHeader() {
    // 뒤로가기 동작 제거
    const navigate = useNavigate();
    function location_replace(){
      sessionStorage.removeItem('user_id');
      navigate(`/`);
    }

  return (
    <div className='worker-scheduleHeaderheader-container'>
      <div className='worker-scheduleHeaderheader'>

        <button className='scheduleHeaderheader-logout-button' onClick={location_replace}>로그아웃</button>
        <div>시간표 수정 기간</div>
      </div>
    </div>
  )
}
export default ScheduleHeader