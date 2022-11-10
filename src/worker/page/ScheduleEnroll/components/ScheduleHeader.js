import React from 'react'
import '../css/ScheduleHeader.css'
import { useNavigate } from 'react-router';
import { useState , useEffect} from 'react'

const ScheduleHeader = ({toggleClass, toggleWork, scheduleButton}) => {
    // 뒤로가기 동작 제거
  const navigate = useNavigate();
  function location_replace(){
    sessionStorage.removeItem('user_id');
    navigate(`/`);
  }
  const [startModifiTime, setStartModifiTime] = useState('2022.9.1');
  const [endModifiTime, setEndtModifiTime] = useState('2022.10.1');
  
  return (
    <div className='worker-scheduleHeaderheader-container'>

        <button className='scheduleHeaderheader-logout-button' onClick={location_replace}>로그아웃</button>
        
        <div className='scheduleHeaderheader-modifiable-box'>
          <div className='modifiable-title'>시간표 수정 기간</div>
          <div className='modifiable-time'>
            {startModifiTime}
            ~
            {endModifiTime}
          </div>
        </div>
        <div className='scheduleHeaderheader-modify-button-box'>

          <button 
            className='class-button' 
            style ={{background : `${scheduleButton ? "#E0D1FF" : "none"}`}}
            onClick={toggleClass}
          >
              수업 시간표 수정
          </button>

          <button 
            className='work-button' 
            style ={{background : `${scheduleButton ? "none" : "#E0D1FF"}`}} 
            onClick={toggleWork}
          >
            근로 시간표 수정
          </button>

        </div>
    </div>
  )
}
export default ScheduleHeader