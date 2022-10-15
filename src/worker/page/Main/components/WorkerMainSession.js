import React, {useState} from 'react'
import '../css/WokerMainSession.css'
import Calender from './Calender';
import dayjs from "dayjs";

const WorkerMainPage = () => {
  const [attend, setAttend] = useState(true);
  const [day, setDay] = useState(dayjs);
  const [totalTime, setTotalTime] = useState(0)
  const [totalSalary, setTotalSalary] = useState(0);

  return (
    <div className='worker-session-container'>

      <div className='display-attend'>
          {attend ? '붙잡힘' : '도망감...'}
      </div>

      <div className='display-month-year'>
        {day.get("year")}년 {day.get('month')+1}월
      </div>

      <div className='worker-session-schedule-table'>
        <Calender day={day}/>
      </div>

      <div className='worker-session-statistics'>

        <span className='worker-session-statistics-time'>
          <span>월 근로시간 </span>
          <span>
            {totalTime}시간
          </span>
        </span>

        <span className='worker-session-statistics-salary'>
          <span>월 근로장학 금액</span>
          <span>
            {totalSalary}원
          </span> 
        </span>

      </div>

    </div>
  );
}

export default WorkerMainPage