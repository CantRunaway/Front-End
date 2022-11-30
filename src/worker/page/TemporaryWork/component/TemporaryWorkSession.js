import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/TemporaryWorkSession.css'
import WorkList from './WorkList'

function TemporaryWorkSession(){
    const [selectDate, setSelectDate] = useState()
    const [checkData, setCheckData] = useState([])


    
    const selectDateHandler = (e) => {
        setSelectDate(e.target.value)
    }

    const requistAsenseHandler = () => {
        if(!selectDate){
            alert('날짜를 선택하세요')
        }
        else{
            console.log(checkData)
        }
    }
    
    return(
        <div className='worker-temporary-session-container'>

            <div className='worker-temporary-session-select-date'>
                <input type='date' onChange={selectDateHandler}></input>
                {
                    selectDate ? 
                        '' 
                    :
                    <span>결근 신청 날짜 선택</span>
                }
            </div>

            <div className='worker-temporary-session-select-list'>
                <WorkList
                    selectDate={selectDate}
                    setCheckData={setCheckData}
                    checkData={checkData}
                />
            </div>

            <div className='worker-temporary-session-requist-button'>
                <button className='worker-temporary-sub-requist-button' onClick={requistAsenseHandler}>결근 요청</button>
            </div>

            <div className='worker-temporary-session-select-button'>
                <Link to='/SelectTempraryWork'>
                    <button>모집 근로 조회</button>
                </Link>
            </div>
        </div>
    )
}

export default TemporaryWorkSession;