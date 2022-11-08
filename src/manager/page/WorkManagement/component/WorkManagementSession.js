import React, {useState} from 'react'
import DatePicker ,{ registerLocale } from "react-datepicker";  // 한국어적용
import ko from 'date-fns/locale/ko'; // 한국어적용
import "react-datepicker/dist/react-datepicker.css";
import '../css/WorkManagementSession.css'

function WorkManagementSession() {
  const [editDate, setEditDate] = useState(new Date());
  const [hourlyWage, setHourlyWage] = useState();
  registerLocale("ko", ko);

  //임시 데이터
  const typeData = [
    {
      type : '식사확인',
      date : '2022-11-09',
      wage : 9160
    },
    {
      type : '식기세척',
      date : '2022-11-09',
      wage : 11450
    },
    {
      type : '운반',
      date : '2022-11-09',
      wage : 11450
    },
  ]
  const Wage = (e) => {
    setHourlyWage(e.target.value);
  };

  const plusClicked = () => {
    alert("추가되었습니다.");
  }
  
  const workTypeDelete = () => {
    alert("삭제되었습니다.");
  }

  function workTypeTable() {
    return (
      <table>
        <tbody className='workTypetbody'>
          {typeData.map(({type, date, wage }) => (
            <tr>
              <input type="checkbox" className='checkbox'/>
              <td className='worktype_items'>{type}</td>
              <td className='worktype_items'>{date}</td>
              <td className='worktype_items'>{wage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className='WorkManagementSession'>
      <div className='WorkManagementMain'>
          <div className='workmngTitle'>근로 항목 및 시급 관리</div>
          <div className='workTypeList'>
            <div className='workTypeTable'>
              {workTypeTable()}
            </div>
            <button className='workTypeDelete_btn' onClick={() => workTypeDelete()}>삭제</button>
          </div>
          <div className='workTypePlus'>
            <select className='workType'>
              <option value={1}>식사확인</option>
              <option value={2}>식기세척</option>
              <option value={3}>청소 및 운반</option>
            </select>
            <DatePicker
              className='enrolldatepick'
              selected={editDate}
              dateFormat="yyyy년 MM월 dd일"
              onChange={date => setEditDate(date)}
              locale="ko"
              width="300px"
              />
            {console.log(editDate)}
            <input className='amount'
            type="text"
            placeholder='0'
            value={hourlyWage}
            onChange={Wage}></input>
            <div className='amuont_won'>원</div>
            <button className='workplus_btn' onClick={() => plusClicked()}>추가</button>
          </div>
      </div>
    </div>
  )
}

export default WorkManagementSession