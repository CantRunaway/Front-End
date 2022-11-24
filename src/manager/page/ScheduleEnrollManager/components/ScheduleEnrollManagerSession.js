import '../css/ScheduleEnrollManagerSession.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios';

function ScheduleEnrollManagerSession() {
    const date = ['일', '월', '화', '수', '목', '금', '토']

    const [userList, setUserList] = useState([]);

    const getUserList = async() => {
        await axios.get("http://localhost:8080/work/worker")
        .then((res) => {
            setUserList(res.data);
        })
        .catch((err) => {
            console.error({error:err})
        })
        console.log(userList);
    }

    useEffect(() => {
        getUserList()
    }, [])

    const ScheduleEidtClicked = () => {
        alert("수정되었습니다.");
      }
      //근로자 명단 + index
    
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