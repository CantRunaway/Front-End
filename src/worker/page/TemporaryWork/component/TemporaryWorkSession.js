import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import '../css/TemporaryWorkSession.css'
import TemporaryWorkList from './TemporaryWorkList'
import TimeSelctBox from './TimeSelctBox'

function TemporaryWorkSession(){
    const [dayData, setDayData] = useState()
    const [startTimeData, setStartTimeData] = useState()
    const [endTimeData, setEndTimeData] = useState()
    const [startDate, setStartDate] = useState(new Date());
    
    //근로자가 요청한 추가근로와 결근 리스트
    const [requestList, setRequestList] = useState([]);

    useEffect(() => {
        getRequestData()
    }, [])

    const getRequestData = () => {
        getRequeAbsencetData()
        getRequeOvertimetData()
    }
    const getRequeAbsencetData = async() => {
        await axios.get(`http://localhost:8080/absence/${sessionStorage.getItem('user_id')}`)
        .then((res) => {
            console.log(res.data[0])
            setRequestList(res.data);
        })
        .catch((err) => {
            console.error({error: err});
        })
    }

    const getRequeOvertimetData = async() => {
        await axios.get(`http://localhost:8080/overtime/${sessionStorage.getItem('user_id')}`)
        .then((res) => {
            console.log(res.data[0])
            setRequestList(res.data);
        })
        .catch((err) => {
            console.error({error: err});
        })
    }

    const [plusAbsence, setPlusAbsence] = useState({
        overtime_day: "",
        absence_start: "",
        absence_end: "",
    });


    const onChangeAbsence = (e) => {
        setPlusAbsence({
            ...plusAbsence,
            [e.target.name]: e.target.value,
        });
        console.log(plusAbsence)
    }


    //추가 근로 요청 버튼 이벤트
    const addTemporaryRequist = async() => {
        console.log(plusAbsence.absence_start < plusAbsence.absence_end) 
        console.log(plusAbsence.absence_start[3])
        if(plusAbsence.absence_start[3] === 3 && plusAbsence.absence_start[3] === 0 && plusAbsence.absence_start < plusAbsence.absence_end){
            await axios.post("http://localhost:8080/overtime", plusAbsence)
            .then((res) => {
                getRequestData()
            })
            .catch((err) => {
                console.log({error:err})
                console.log(plusAbsence)
            })
            console.log("보냄")
        }
        else{
            alert("30분 단위로 입력하세요 :30 또는 :00분")
        }

    }

    //결근 요청 버튼 이벤트
    const subTemporaryRequist = async() => {
        if(plusAbsence.absence_start[3] === 3 && plusAbsence.absence_start[3] === 0 && plusAbsence.absence_start < plusAbsence.absence_end){
            await axios.post("http://localhost:8080/absence", plusAbsence)
            .then((res) => {
                getRequestData()
            })
            .catch((err) => {
                console.log({error:err})
                console.log(plusAbsence)
            })
        }
        else{
            alert("30분 단위로 입력하세요 :30 또는 :00분")
        }
    }
    return(
        <div className='worker-temporary-session-container'>

            <span className='worker-temporary-session-reaquist-list-title'>요청 처리 상황</span>
            <div className='worker-temporary-session-reaquist-list'>
                <TemporaryWorkList
                    requestList={requestList}
                />
            </div>
            
                <div className='worker-temporary-session'>

                    <label className='temporary-date'>
                        <input type='date' required  name='overtime_day'
                            onChange={onChangeAbsence}
                        />
                    </label>

                    <input className='temporary-start-time-select' name='absence_start' type='time' step='1800' required 
                        onChange={onChangeAbsence}
                    />
                    ~
                    <input className='temporary-end-time-select' name='absence_end' type='time' step='1800' required
                        onChange={onChangeAbsence}
                    />
                </div>

                <div className='worker-temporary-session-button-container'>
                    <div className='worker-temporary-session-requist-button'>
                        <button className='worker-temporary-add-requist-button' onClick={addTemporaryRequist}>추가근로 요청</button>
                        <button className='worker-temporary-sub-requist-button' onClick={subTemporaryRequist}>결근 요청</button>
                    </div>

                    <div className='worker-temporary-session-select-button'>
                        <Link to='/SelectTempraryWork'>
                            <button>모집 근로 조회</button>
                        </Link>
                    </div>

                </div>
        </div>
    )
}

export default TemporaryWorkSession;