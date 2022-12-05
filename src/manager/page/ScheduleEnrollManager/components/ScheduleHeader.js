import React from 'react'

const ScheduleHeader = ({toggleClass, toggleWork, isClassSchedule}) => {

  return (
    <div className='schedule-header-container'>
        <div className='schedule-header-button'>
          <button 
            className='enroll-button' 
            style ={{background : `${isClassSchedule ? "#E0D1FF" : "none"}`}}
            onClick={toggleClass}
          >
              수업 시간표 수정
          </button>
          <button 
            className='enroll-button' 
            style ={{background : `${isClassSchedule ? "none" : "#E0D1FF"}`}} 
            onClick={toggleWork}
          >
            근로 시간표 수정
          </button>

        </div>
    </div>
  )
}
export default ScheduleHeader