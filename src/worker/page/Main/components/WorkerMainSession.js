import React, {useState} from 'react'
import '../css/WokerMainSession.css'
import Calender from './Calender';
import dayjs from "dayjs";

const WorkerMainPage = () => {
  const [attend, setAttend] = useState(true);
  const [day, setDay] = useState(dayjs);
  const [totalTime, setTotalTime] = useState(0)
  const [totalSalary, setTotalSalary] = useState(0);
  const [selectYear, setSelectYear] = useState(day.get("year"))
  const [selectMonth, setSelectMonth] = useState(day.get("month")+1)
  
  const addDay = () => {
    if(selectMonth+1 > 12){
      setDay(day.set('y', selectYear+1))
      setSelectYear(selectYear+1)

      setDay(day.set('M', 1))
      setSelectMonth(1)
    }
    else{
      setDay(day.set('M', selectMonth+1))
      setSelectMonth(selectMonth+1)
    }
  } 

  const subDay = () => {
    console.log(selectMonth + " " + selectYear)
    if(selectMonth-1 < 1){
      setDay(day.set('y', selectYear-1))
      setSelectYear(selectYear-1)
      
      setDay(day.set('M', 12))
      setSelectMonth(12)
    }
    else{
      setDay(day.set('M', selectMonth-1))
      setSelectMonth(selectMonth-1)
    }
  } 

  return (
    <div className='worker-session-container'>

      <div className='display-attend'>
          {attend ? '붙잡힘' : '도망감...'}
      </div>

      <div className='display-month-year'>
        <button onClick={subDay}>sub</button>
        {selectYear}년 {selectMonth}월
        <button onClick={addDay}>add</button>
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