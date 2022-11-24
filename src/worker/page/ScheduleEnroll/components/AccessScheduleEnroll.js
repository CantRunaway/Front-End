import React from 'react'
import '../css/AccessScheduleEnroll.css'
import { useNavigate } from 'react-router-dom';

function AccessScheduleEnroll({startModifiTime, endModifiTime}) {
  
  const navigate = useNavigate();

  const backSpace = () =>{
    navigate('/:username/main')
  }

    return (
      <div className='access-schedule-enroll-contents'>
        
          <div className='access-schedule-enroll-authority-main'>

            <div className='access-schedule-enroll-title'>
              수정 가능 기간이 아닙니다.
            </div>

            <div className='access-schedule-enroll-modify'>
            {startModifiTime}
              ~
            {endModifiTime}
            </div>

            <div>
              <button className='access-schedule-enroll-submit-button' 
                onClick={backSpace} 
              >
                뒤로가기
              </button>
            </div>

          </div>
      </div>
    );
}

export default AccessScheduleEnroll;