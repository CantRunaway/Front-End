import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/TemporaryWorkSession.css'

function TemporaryWorkSession(){
    
    // useEffect(() => {
    //     getRequeAbsencetData()
    // }, [])

    // //  결근 요청 데이터 받아오기
    // const getRequeAbsencetData = async() => {
    //     await axios.get(`http://localhost:8080/absence/${sessionStorage.getItem('user_id')}`)
    //     .then((res) => {
    //         (res.data);
    //     })
    //     .catch((err) => {
    //         console.error({error: err});
    //     })
    // }

    return(
        <div className='worker-temporary-session-container'>
            <div className='worker-temporary-session-requist-button'>
                <button className='worker-temporary-sub-requist-button' >결근 요청</button>
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