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

    //근로종류 받아오기
    const [workType, setWorkType] = useState([]);
    const getWorkType = async() => {
        await axios.get("http://localhost:8080/workType")
        .then((res) => {
            setWorkType(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.error({error: err});
          })
    }
    useEffect(() =>{
        getWorkType();
    }, [])

    //삭제, 추가 버튼
    const DeleteClicked = () => {
        alert("삭제되었습니다.");
    }

    const TemporalEnrollClicked = () => {
        alert("임시 근로 모집글이 등록되었습니다.");
    }

    //추가 근로 모집 데이터 불러오기
    const [temporalData, setTemporalData] = useState([])

    const getRecruit = async () => {
        await axios.get("http://localhost:8080/recruit")
        .then((res) => {
            setTemporalData(res.data);
            console.log(res.data);
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
        console.log(e.target.value);
        setTemData({
            ...temData,
            [e.work_type_name]: e.target.value
        });
    }

    function TemporalList(){
        return(
            <div>
            { temporalData.map((data, id) => (
                <div className='recruit_list_element' key={id}>
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

    const [dayData, setDayData] = useState();
    const [startTimeData, setStartTimeData] = useState()
    const [endTimeData, setEndTimeData] = useState()
    const [startDate, setStartDate] = useState(new Date());

    const [recruitData, setRecruitData] = useState({
        recruit_date: "",
        recruit_start: "",
        recruit_end: "",
        work_type_name: "",
    });

    const onChangeTemporal = (e) => {
        setRecruitData({
            ...recruitData,
            [e.target.name]: e.target.value,
        });
    }

  return (
    <div className='TemporalManagementSession'>
        <div className='TemporalManagementMain'>
        <div className='TemporalMngMain-title'>임시 근로 모집 목록</div>
            <div className='currentTime'>
                {year}년 {month}월 {date}일 {day}요일
            </div>
            <div className='TemporalListMain'>
                <div className='TemporalList'>
                {TemporalList()}
                </div>
                <div className='temporalDelete'>
                    <button className='delete_btn'
                    onClick={() => DeleteClicked()}>삭제</button>
                </div>
            </div>
            <div className='TemporalTimeSet'>
                    <input
                        className='temporary-date'
                        type='date' required  
                        // onChange={(e)=>{
                        //     setDayData(e.target.value)
                        //     console.log(e.target.value)
                        // }}
                        onChange={onChangeTemporal}
                        // onChange={onChangeAbsence}
                    />
                <div className='temporal_time'>
                    <div className='start_time'>
                        <input className='temporal_select' name='recruit_start' form='H:mm' type='time' step='1800' required
                        onChange={onChangeTemporal}
                        />
                        <input className='temporal_select' name='recruit_end' form='H:mm' type='time' step='1800' required
                        onChange={onChangeTemporal}
                        />
                    </div>
                    <select 
                        className='temporal_select'
                        onChange={plusTemporalData}>
                        {workType.map((type) => (
                            <option
                                key={type.work_type_index}
                                value={type.work_type_name}>
                                {type.work_type_name}
                            </option>
                        ))}
                    </select>
                    <select 
                        className='temporal_select'
                        onChange={plusTemporalData}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
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