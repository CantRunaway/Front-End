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

    const DeleteClicked = () => {
        alert("삭제되었습니다.");
    }

    const TemporalEnrollClicked = () => {
        alert("임시 근로 모집글이 등록되었습니다.");
    }

    const [temporalData, setTemporalData] = useState([])

    const getRecruit = async () => {
        await axios.get("http://localhost:8080/recruit")
        .then((res) => {
            setTemporalData(res.data);
        })
        .catch((err) => {
            console.error({error: err})
        })
        console.log(temporalData);
    }

    useEffect(() => {
        getRecruit();
    }, [])

    const [temData, setTemData] = useState({
        work_start: "",
        work_end: "",
        work_type_name: "",
        recruit_worker: ""
    });

    const plusTemporalData = (e) =>{
        // setTemporalData({
        //     ...temporalData,
        //     [e.target.work_start] : e.target.value,
        // });
        // console.log(temporalData);
        console.log(e.target.value);
        setTemData({
            ...temData,
            [e.work_type_name]: e.target.value
        });
        // console.log(temData);
    }

    function TemporalList(){
        return(
            <div>
            { temporalData.map((data) => (
                <div className='recruit_list_element'>
                    <input type='checkbox'></input>
                    <div className='recruit_elements'>{data.work_start}</div>
                    <div className='recruit_elements'>{data.work_end}</div>
                    <div className='recruit_elements'>{data.work_type_name}</div>
                    <div className='recruit_elements'>{data.recruit_worker}</div>
                </div>
            ))}
            </div>
        )
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
                </div>
                <div className='temporal_time'>
                    <select className='temporal_select'
                    onChange={plusTemporalData}>
                        <option value='am'>오전</option>
                        <option value='pm'>오후</option>
                    </select>
                    <select className='temporal_select'>
                        {hour.map((h) => {
                            return(
                                <option value={h}>{h}시</option>
                            )
                        })}
                    </select>
                    <select className='temporal_select'
                    onChange={plusTemporalData}>
                        <option value={0}>00분</option>
                        <option value={30}>30분</option>
                    </select>
                    <select className='temporal_select'
                    onChange={plusTemporalData}>
                        <option value={'식사확인'}>식사확인</option>
                        <option value={'식기세척'}>식기세척</option>
                        <option value={'운반'}>운반</option>
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