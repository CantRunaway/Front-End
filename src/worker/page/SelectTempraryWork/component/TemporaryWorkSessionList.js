import React, { useState } from 'react'
import '../css/TemporaryWorkSessionList.css'

const TemporaryWorkSessionList = ({reqeustList, checkDataHandler}) => {
    console.log(reqeustList);
    return(
        <ul className='temporary-work-session-list-container'>
            {
                reqeustList.map((requist, index) => (
                    <div key={index} className='temporary-work-session-list' onClick={checkDataHandler}>
                        <input type='checkbox' value={index}></input>
                        <li>
                            <span>{requist.work_start}</span>
                            <span>~</span>
                            <span>{requist.work_end}</span>
                            <span>{requist.work_type_name}</span>
                        </li>
                    </div>
                ))
            }
        </ul>
    )
}

export default TemporaryWorkSessionList