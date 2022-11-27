import React, { useState } from 'react'
import '../css/TemporaryWorkList.css'

const TemporaryWorkList = ({requestList}) => {
    console.log(requestList);
    return(
        <ul>
        {/* 현재 근로자가 올린 추가근로 혹은 결근 리스트 뜸 */}
            {
                requestList.map((request, index) => (
                    <div key={index} className='temporary-work-list'>
                        <li>
                            <span>{request.absence_start}</span>
                            <span>{request.absence_end}</span>
                            <span>{request.request_type}type</span>
                        </li>
                        <div>처리 중</div>
                    </div>
                ))
            }
        </ul>
    )
}

export default TemporaryWorkList