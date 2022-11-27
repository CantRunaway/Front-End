import '../css/ScheduleEnrollManagerSession.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import WorkScheduleEnrollSession from './WorkScheduleEnrollSession';
import EducationScheduleEnrollSession from './EducationScheduleEnrollSession';
import '../css/ScheduleEnrollManagerSession.css'

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

      const [isClassSchedule, setisClassSchedule] = useState(true);
      const [workerSchedule, setWorkerSchedule] = useState([
        {
          type:'class',
          id:'11:00월',
          day:'월',
          time:'11:00',
        },
        {
          type:'class',
          id:'11:30월',
          day:'월',
          time:'11:30'
        },
        {
          type:'class',
          id:'12:00월',
          day:'월',
          time:'12:00'
        },
        {
          type:'work',
          id:'13:00목',
          day:'목',
          time:'13:00'
        },
        {
          type:'work',
          id:'13:30목',
          day:'목',
          time:'13:30'
        }
      ])

      const toggleClass = () => {
        setisClassSchedule(true)
      }
    
      const toggleWork = () => {
        setisClassSchedule(false)
      }
    
    return (
        <div className='ScheduleEnrollManagerSession'>
            <div className='ScheduleEnrollManagerMain'>
              <div className='ScehduleEnrollMain-title'>시간표 등록 / 수정</div>
                <div className='main'>
                    <div className='scheduleSearch'>
                        <select className='selectWorker'>
                            <option>홍길동</option>
                        </select>
                    </div>
                    <div className='scheduleAll'>
                        <div className='scheduleTab'>
                            <div className='scheduleHeaderheader-modify-button-box'>
                                <button 
                                className='class-button' 
                                style ={{background : `${isClassSchedule ? "#E0D1FF" : "none"}`}}
                                onClick={toggleClass}
                                >
                                    수업 시간표 수정
                                </button>

                                <button 
                                className='work-button' 
                                style ={{background : `${isClassSchedule ? "none" : "#E0D1FF"}`}} 
                                onClick={toggleWork}
                                >
                                근로 시간표 수정
                                </button>
                            </div>
                        </div>
                        <div className='user-info-page'>
                            <div className='worker-schedule-enroll-main' >
                            {
                                isClassSchedule ? 
                                <WorkScheduleEnrollSession 
                                isClassSchedule={isClassSchedule}
                                workerSchedule={workerSchedule}
                                setWorkerSchedule={setWorkerSchedule}
                                /> 
                                : 
                                <EducationScheduleEnrollSession
                                isClassSchedule={isClassSchedule}
                                workerSchedule={workerSchedule}
                                setWorkerSchedule={setWorkerSchedule}
                                />
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ScheduleEnrollManagerSession