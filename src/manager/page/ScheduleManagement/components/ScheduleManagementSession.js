import React, { useState, useEffect } from 'react'
import '../css/ScheduleManagementSession.css';
import ClassScheduleManage from './ClassScheduleManage';
import WorkScheduleManage from './WorkScheduleManage';
import axios from 'axios';

function ScheduleManagementSession() {
  const [isClassTab, setIsClassTab] = useState(true);

  // const [temporal, setTemporal] = useState({}); //저장되있는 수정기간 값
  // const getTemporal = async () => {
  //   await axios
  //     .get("http://localhost:8080/temporal")
  //     .then((res) => {
  //       setTemporal(res.data[0]);
  //     })
  //     .catch((err) => {
  //       console.error({ error: err });
  //     });
  // };

  // useEffect(() => {
  //   getTemporal();
  // }, []);

    const toggleClass = () => {
        setIsClassTab(true)
    }

    const toggleWork = () => {
        setIsClassTab(false)
    }

  function ScheduleTab () {
    return(
      <div className='ScheduleMain'>
      <div className='ScheduleMain-title'>시간표 관리 - 수정 가능 기간 설정</div>
        <div className='ScheduleTab'>
          <div className='tabs'>
            <button className='tab_title'
            style={{background : `${isClassTab ? "#E0D1FF" : "none"}`}}
            onClick={toggleClass}>
              수업 시간표
            </button>
            <button className='tab_title'
            style={{background : `${isClassTab ? "none" : "#E0D1FF"}`}}
            onClick={toggleWork}>
              근로 시간표
            </button>
          </div>  
          <div className='tab_content'>
            {isClassTab ?
              <ClassScheduleManage/>
            :
              <WorkScheduleManage/>}
          </div>
        </div>
      </div>
      
    )
  }

  return (
    <div className='ScheduleManagementSession'>
      {ScheduleTab()}
    </div>
  )
}

export default ScheduleManagementSession