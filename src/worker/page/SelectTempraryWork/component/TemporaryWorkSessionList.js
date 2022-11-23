import React, { useState } from 'react'
import '../css/TemporaryWorkSessionList.css'

const TemporaryWorkSessionList = ({requistList, checkDataHandler}) => {
    return(
        <ul className='temporary-work-session-list-container'>
            {
                requistList.map((requist, index) => (
                    <div key={index} className='temporary-work-session-list' onClick={checkDataHandler}>
                        <input type='checkbox' value={index}></input>
                        <li>
                            <span>{requist.day}</span>
                            <span>{requist.startTime}</span>
                            <span>~</span>
                            <span>{requist.endTime}</span>
                            <span>{requist.workType}</span>
                            <span>{requist.requistType}</span>
                        </li>
                    </div>
                ))
            }
        </ul>
    )
}

export default TemporaryWorkSessionList