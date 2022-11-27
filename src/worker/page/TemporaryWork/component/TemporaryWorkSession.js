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

    const getRequestData = async() => {
        await axios.get("http://localhost:8080/absence")
        .then((res) => {
            setRequestList(res.data);
        })
        .catch((err) => {
            console.error({error: err});
        })
    }

    useEffect(() => {
        getRequestData();
    }, [])

    const [plusWork, setPlusWork] = useState({
        overtime_day: "",
        overtime_start: "",
        overtime_end: "",
    });

    const [plusAbsence, setPlusAbsence] = useState({
        absence_start: "",
        absence_end: "",
    });


    const onChangeAbsence = (e) => {
        setPlusAbsence({
            ...plusAbsence,
            [e.target.name]: e.target.value,
        });
    }


    //추가 근로 요청 버튼 이벤트
    const addTemporaryRequist = async() => {
        await axios.post("http://localhost:8080/overtime", plusWork)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log({error:err})
            console.log(plusAbsence)
        })
    }

    //결근 요청 버튼 이벤트
    const subTemporaryRequist = async() => {
        await axios.post("http://localhost:8080/absence", plusAbsence)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log({error:err})
            console.log(plusAbsence)
        })
    }

    const selectTime = () => {
        const timeComboBoxOption = []
        let str = ''
        for(let i=1; i<24; i++){
            if(i < 10){
                str = '0'+i;
            }
            else{
                str=i;
            }
            for(let j=0; j< 2; j++){
                let temp = str
                if(j===0){
                    temp += ':00';
                }
                else{
                    temp += ':30';
                }
                timeComboBoxOption.push(
                    <option value={temp}>{temp}</option>
                )
            }
        }
        return(
            timeComboBoxOption
        )
    }
    return(
        <div className='worker-temporary-session-container'>

            <span className='worker-temporary-session-reaquist-list-title'>요청 처리 상황</span>
            <div className='worker-temporary-session-reaquist-list'>
                <TemporaryWorkList
                    requestList={requestList}
                />
            </div>
            
            <form>
                <div className='worker-temporary-session'>

                    <label className='temporary-date'>
                        <input type='date' required  
                            onChange={(e)=>{
                                setDayData(e.target.value)
                                console.log(e.target.value)
                            }}
                            // onChange={onChangeAbsence}
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
            </form>
        </div>
    )
}

export default TemporaryWorkSession;