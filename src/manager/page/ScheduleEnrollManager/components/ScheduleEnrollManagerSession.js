import '../css/ScheduleEnrollManagerSession.css'
import React, {useState} from 'react'

function ScheduleEnrollManagerSession() {
    const date = ['일', '월', '화', '수', '목', '금', '토']

    const ScheduleEidtClicked = () => {
        alert("수정되었습니다.");
      }

    
    return (
        <div className='ScheduleEnrollManagerSession'>
            <div className='ScheduleEnrollManagerMain'>
                <div className='main'>
                    <div className='scheduleSearch'>
                        <select className='selectWorker'>
                            <option>홍길동</option>
                        </select>
                    </div>
                    <div className='scheduleAll'>
                        <div className='scheduleTab'>
                            <button className='class-tab'>
                                수업 시간표
                            </button>
                            <button className='work-tab'>
                                근로 시간표
                            </button>
                        </div>
                        <div className='scheduleContents'>
                            {date.map((col) => (
                                <th className='date_header' key={col}>{col}</th>
                            ))}
                        </div>
                        <button className='scheduleEdit-btn' onClick={() => ScheduleEidtClicked()}>수정</button>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ScheduleEnrollManagerSession