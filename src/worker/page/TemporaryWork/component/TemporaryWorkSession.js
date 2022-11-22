import React, { useState } from 'react'
import '../css/TemporaryWorkSession.css'
import TemporaryWorkList from './TemporaryWorkList'

function TemporaryWorkSession(){

    const addTemporaryRequist = () => {
        alert("추가 근로 요청")
    }

    const subTemporaryRequist = () => {
        alert("결근 요청")
    }

    return(
        <div className='worker-temporary-session-container'>

            <span className='worker-temporary-session-reaquist-list-title'>요청 처리 상황</span>
            <div className='worker-temporary-session-reaquist-list'>
                <TemporaryWorkList />
            </div>
            
            <form>
            <div className='worker-temporary-session'>

                <input className='temporary-date' type='date' required />
                
                <input className='temporary-start-time-select' type='time' step='1800' required />
                ~
                <input className='temporary-end-time-select' type='time' step='1800' required />

            </div>

            <div className='worker-temporary-session-button-container'>
                <div className='worker-temporary-session-requist-button'>
                    <button className='worker-temporary-add-requist-button' onClick={addTemporaryRequist}>추가근로</button>
                    <button className='worker-temporary-sub-requist-button' onClick={subTemporaryRequist}>결근</button>
                </div>

                <div className='worker-temporary-session-select-button'>
                    <button>모집 근로 조회</button>
                </div>
            </div>
</form>
        </div>
    )
}

export default TemporaryWorkSession;