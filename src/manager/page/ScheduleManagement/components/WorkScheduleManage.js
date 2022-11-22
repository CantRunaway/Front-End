import React, {useEffect, useState} from 'react'
import '../css/ClassScheduleManage.css'
import DatePicker ,{ registerLocale } from "react-datepicker";  // 한국어적용
import ko from 'date-fns/locale/ko'; // 한국어적용
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function WorkScheduleManage() {
  registerLocale("ko", ko);

  const [workStartDate, setWorkStartDate] = useState(new Date())
  const [workEndDate, setWorkEndDate] = useState(new Date())

  const [temporal, setTemporal] = useState({})
  
  const getTemporal = async () => {
    await axios.get("http://localhost:8080/temporal")
    .then((res) => {
      setTemporal(res.data[0]);
      setWorkStartDate(Date.parse(temporal.edit_start));
      setWorkEndDate(Date.parse(temporal.edit_end));
    }
    )
    .catch((err) => {
      console.error({error:err})
    })
  }

  useEffect(() => {
    getTemporal()
  }, [])

  const ModificationClicked = () => {
    alert("변경되었습니다.");
  }

  return (
    <div className='WorkScheduleManage'>
      <div className='periodcontents'>
        <div className='periodTitle'>수정 가능 기간</div>
        <div className='periodResult'>
        {//workStartDate.getFullYear() + "년 " + (workStartDate.getMonth()+1) +"월 " + workStartDate.getDate() +"일 "
        }
         ~ 
        {//" "+workEndDate.getFullYear() + "년 " + (workEndDate.getMonth()+1) +"월 " + workEndDate.getDate() +"일"
        }
        </div>
      </div>
      <div className='Modificationperiod'>
        <div className='periodDate'>
          <DatePicker 
            selected={workStartDate}
            dateFormat="yyyy년 MM월 dd일"
            onChange={date => setWorkStartDate(date)}
            locale="ko"
          />
          {console.log(workStartDate)}
        </div>
        <div className='periodMark'>~</div>
        <div className='periodDate'>
          <DatePicker 
            selected={workEndDate}
            dateFormat="yyyy년 MM월 dd일"
            onChange={date => setWorkEndDate(date)}
            locale="ko"
          />
            {console.log(workEndDate)}
        </div>
      </div>
      <div className='modificationBtn'>
        <button className='mofification_btn'
        onClick={() => ModificationClicked()}>변경</button>
      </div>
    </div>
  )
}

export default WorkScheduleManage