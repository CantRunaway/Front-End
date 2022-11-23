import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import '../css/TemporaryWorkSession.css'
import TemporaryWorkList from './TemporaryWorkList'
import TimeSelctBox from './TimeSelctBox'

function TemporaryWorkSession(){

    const [requistList, setRequistList] = useState(
        [
            {
                day:'2020-12-02',
                startTime: '11:30',
                endTime: '12:30',
                workType: '식기세척',
                requistType: '추가 근로',
            },
            {
                day:'2020-12-05',
                startTime: '13:30',
                endTime: '12:30',
                workType: '식기세척',
                requistType: '추가 근로',
            }
    ])

    const [dayData, setDayData] = useState()
    const [startTimeData, setStartTimeData] = useState()
    const [endTimeData, setEndTimeData] = useState()

    const [startDate, setStartDate] = useState(new Date());

    const addTemporaryRequist = () => {
        alert("추가 근로 요청")
    }

    const subTemporaryRequist = () => {
        alert("결근 요청")
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
                    requistList={requistList}
                />
            </div>
            
            <div className='worker-temporary-session'>

                <label className='temporary-date'>
                    <input type='date' required  
                        onChange={(e)=>{
                            setDayData(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                </label>

                <input className='temporary-start-time-select' form='H:mm' type='time' step='1800' required 
                    onChange={(e)=>{
                        setStartTimeData(e)
                        console.log(e.target.value)
                    }}
                />
                ~
                <input className='temporary-end-time-select' type='time' step='1800' required
                    onChange={(e)=>{
                        setEndTimeData(e.target.value)
                        console.log(e.target.value)
                    }}
                />

            </div>

            <div className='worker-temporary-session-button-container'>
                <div className='worker-temporary-session-requist-button'>
                    <button className='worker-temporary-add-requist-button' onClick={addTemporaryRequist}>추가근로</button>
                    <button className='worker-temporary-sub-requist-button' onClick={subTemporaryRequist}>결근</button>
                </div>

                <div className='worker-temporary-session-select-button'>
                    <Link to='/:username/SelectTempraryWork'>
                        <button>모집 근로 조회</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TemporaryWorkSession;