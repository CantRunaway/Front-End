import React, {useState, useEffect} from 'react'
import '../css/WokerMainSession.css'
import Calender from './Calender';
import axios from 'axios';
import dayjs from "dayjs";

const WorkerMainPage = () => {
  const [attend, setAttend] = useState();
  const [day, setDay] = useState(dayjs);
  const [selectYear, setSelectYear] = useState(day.get("year"))
  const [selectMonth, setSelectMonth] = useState(day.get("month")+1)
  const [totalWorkData, serTotalWorkData] = useState([{}])

  useEffect(()=>{
    isAttend()
    getTotalData()
  },[])

  useEffect(()=>{
    getTotalData()
  },[selectMonth])

  // 출 퇴근 여부
  const isAttend = async() => {
    await axios.get(`http://localhost:8080/users/commute/${sessionStorage.getItem('user_id')}`)
    .then((res) => {
      setAttend(res.data[0].work_state)
    })
    .catch((err) => {
      console.error({error:err})
    })
  }

  // 월 총 시간, 금액
  const getTotalData = async() => {
    await axios.get(`http://localhost:8080/stats/${selectYear}/${selectMonth}/${sessionStorage.getItem('user_id')}`)
    .then((res) => {
      serTotalWorkData(res.data[0])
      console.log(res.data[0])
    })
    .catch((err) => {
      console.error({error:err})
    })
  }


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
          {
            attend===1 ?
            "출근"
             : 
            "퇴근"
          }
      </div>

      <div className='display-month-year'>
        <button onClick={subDay} className='display-month-left-allow'><img src='/img/Shedule_Left_Arrow.png'></img></button>
        {selectYear}년 {selectMonth}월
        <button onClick={addDay} className='display-month-ringt-allow'><img src='/img/Shedule_Right_Arrow.png'></img></button>
      </div>

      <div className='worker-session-schedule-table'>
        <Calender 
          day={day}
          selectYear={selectYear}
          selectMonth={selectMonth}
        />
      </div>

      <div className='worker-session-statistics'>

        <span className='worker-session-statistics-time'>
          <span>월 근로시간 </span>
          <span>
            {
              totalWorkData.hour ? totalWorkData.hour : '0'
            }
            시간
          </span>
        </span>

        <span className='worker-session-statistics-salary'>
          <span>월 근로장학 금액</span>
          <span>
            {
              totalWorkData.wage ? totalWorkData.wage : '0'
            }
            원
          </span> 
        </span>

      </div>

    </div>
  );
}

export default WorkerMainPage