import React, {useState} from 'react'
import '../css/ClassScheduleManage.css'
import DatePicker ,{ registerLocale } from "react-datepicker";  // 한국어적용
import ko from 'date-fns/locale/ko'; // 한국어적용
import "react-datepicker/dist/react-datepicker.css";

function ClassScheduleManage() {
  registerLocale("ko", ko);
  const [classStartDate, setClassStartDate] = useState(new Date());
  const [classEndDate, setClassEndDate] = useState(new Date());

  const ModificationClicked = () => {
    alert("변경되었습니다.");
  }

  return (
    <div className='ClassScheduleManage'>
      <div className='periodcontents'>
        <div className='periodTitle'>수정 가능 기간</div>
        <div className='periodResult'>
        {classStartDate.getFullYear() + "년 " + (classStartDate.getMonth()+1) +"월 " + classStartDate.getDate() +"일 "}
         ~ 
        {" "+classEndDate.getFullYear() + "년 " + (classEndDate.getMonth()+1) +"월 " + classEndDate.getDate() +"일"}
        </div>
      </div>
      <div className='Modificationperiod'>
        <div className='periodDate'>
          <DatePicker 
            selected={classStartDate}
            dateFormat="yyyy년 MM월 dd일"
            onChange={date => setClassStartDate(date)}
            locale="ko"
          />
          {console.log(classStartDate)}
        </div>
        <div className='periodMark'>~</div>
        <div className='periodDate'>
          <DatePicker 
            selected={classEndDate}
            dateFormat="yyyy년 MM월 dd일"
            onChange={date => setClassEndDate(date)}
            locale="ko"
          />
            {console.log(classEndDate)}
        </div>
      </div>
      <div className='modificationBtn'>
        <button className='mofification_btn'
        onClick={() => ModificationClicked()}>변경</button>
      </div>
    </div>
  )
}

export default ClassScheduleManage