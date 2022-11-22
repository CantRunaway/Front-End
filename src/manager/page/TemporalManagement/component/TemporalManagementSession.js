import '../css/TemporalManagementSession.css'
import React, { useEffect, useState } from 'react'
import DatePicker ,{ registerLocale } from "react-datepicker";  // 한국어적용
import ko from 'date-fns/locale/ko'; // 한국어적용
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function TemporalManagementSession() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const daylist = ['일', '월', '화', '수', '목', '금', '토'];
    const hour = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 , 10, 11, 12];
    const day = daylist[today.getDay()];
    const [recruitDate, setRecruitDate] = useState(new Date());
    registerLocale("ko", ko);

    // const temporalData = [
    //     {
    //         recruitDate : '2022-11-08',
    //         recruitDay : '화',
    //         recruitTime : '17:30-19:30',
    //         workType : '식기세척',
    //         recruitNum : 3
    //     },
    //     {
    //         recruitDate : '2022-11-09',
    //         recruitDay : '수',
    //         recruitTime : '17:30-19:30',
    //         workType : '식기세척',
    //         recruitNum : 1
    //     },
    //     {
    //         recruitDate : '2022-11-10',
    //         recruitDay : '목',
    //         recruitTime : '17:30-19:30',
    //         workType : '식사확인',
    //         recruitNum : 1
    //     }
    // ]

    const [temporalData, setTemporalData] = useState([])

    const getRecruit = async () => {
        await axios.get("http://localhost:8080/recruit")
        .then((res) => {
            setTemporalData(res.data);
        })
        .catch((err) => {
            console.error({error: err})
        })
    }

    useEffect(() => {
        getRecruit();
    }, [])

    function TemporalList(){
        return(
            temporalData.map((data) => 
            <div className='recruit_list_element'>
                <input type='checkbox'></input>
                <div className='recruit_elements'>{data.recruitDate}</div>
                <div className='recruit_elements'>{data.recruitDay}</div>
                <div className='recruit_elements'>{data.recruitTime}</div>
                <div className='recruit_elements'>{data.workType}</div>
                <div className='recruit_elements'>{data.recruitNum}명</div>
            </div>
            ))
    }

    const DeleteClicked = () => {
        alert("삭제되었습니다.");
    }

    const TemporalEnrollClicked = () => {
        alert("임시 근로 모집글이 등록되었습니다.");
    }

  return (
    <div className='TemporalManagementSession'>
        <div className='TemporalManagementMain'>
            <div className='currentTime'>
                {year}년 {month}월 {date}일 {day}요일
            </div>
            <div className='TemporalList'>
                {TemporalList()}
                <div className='temporalDelete'>
                    <button className='delete_btn'
                    onClick={() => DeleteClicked()}>삭제</button>
                </div>
            </div>
            <div className='TemporalTimeSet'>
                <div className='temporal_date'>
                    <DatePicker
                    className='datepick'
                    selected={recruitDate}
                    dateFormat="yyyy년 MM월 dd일"
                    onChange={date => setRecruitDate(date)}
                    locale="ko"
                    />
                    {console.log(recruitDate)}
                </div>
                <div className='temporal_time'>
                    <select className='temporal_select'>
                        <option value='am'>오전</option>
                        <option value='pm'>오후</option>
                    </select>
                    <select className='temporal_select'>
                        {hour.map((h) => {
                            return(
                                <option>{h}시</option>
                            )
                        })}
                    </select>
                    <select className='temporal_select'>
                        <option value={0}>00분</option>
                        <option value={30}>30분</option>
                    </select>
                    <select className='temporal_select'>
                        <option value={1}>식사확인</option>
                        <option value={2}>식기세척</option>
                    </select>
                    
                    <div className='temporal_enroll'>
                        <button className='temporal_enroll_btn'
                        onClick={() => TemporalEnrollClicked()}>임시근로 모집</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemporalManagementSession