import React, { useState } from 'react'
import '../css/ScheduleManagementSession.css';
import ClassScheduleManage from './ClassScheduleManage';
import WorkScheduleManage from './WorkScheduleManage';

function ScheduleManagementSession() {
  const [clicked, setClicked] = useState(0);
  const tabData = [
    {
      id: 0,
      title: "수업시간표",
      component: <ClassScheduleManage/>
    },
    {
      id: 1,
      title: "근로시간표",
      component: <WorkScheduleManage/>
    }
  ];
  

  function ScheduleTab () {
    return(
      <div className='ScheduleTab'>
        <ul className='tabs'>
          {tabData.map(tab => (
            <li
            className='tab_title' 
            onClick={() => setClicked(tab.id)}>{tab.title}</li>
          ))}
        </ul>
        <div className='tab_content'>
          {tabData.filter(tab => clicked === tab.id).map(tab => (
            <div>{tab.component}</div>
          ))}
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