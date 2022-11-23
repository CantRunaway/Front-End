import React, { useState } from 'react'
import '../css/TemporaryWorkList.css'

const TemporaryWorkList = ({requistList}) => {
    return(
        <ul>
            {
                requistList.map((requist, index) => (
                    <div key={index} className='temporary-work-list'>
                        <li>
                            <span>{requist.day}</span>
                            <span>{requist.startTime}</span>
                            <span>~</span>
                            <span>{requist.endTime}</span>
                            <span>{requist.workType}</span>
                            <span>{requist.requistType}</span>
                        </li>
                        <div>처리 중</div>
                    </div>
                ))
            }
        </ul>
    )
}

export default TemporaryWorkList