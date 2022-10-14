import React from 'react'
import '../css/ManagerMainSession.css';

function ManagerMainSession() {
  const currentData = [
    {
      username : '이마크',
      userNum : 20180802,
      workTime : '13:30 - 15: 30',
      workType : '식기세척'
    },
    {
      username : '종천러',
      userNum : 20201122,
      workTime : '12:30 - 14: 30',
      workType : '식기세척'
    },
    {
      username : '박지성',
      userNum : 20210205,
      workTime : '12:30 - 14: 30',
      workType : '식기세척'
    }
  ];

  const requestData = [
    {
      username : '황인준',
      userNum : 20190323,
      workTime : '11:00-13:00',
      workType : '식기세척'
    },
    {
      username : '이제노',
      userNum : 20190423,
      workTime : '12:00-14:00',
      workType : '식기세척'
    },
    {
      username : '이해찬',
      userNum : 20190606,
      workTime : '16:00-18:00',
      workType : '식기세척'
    },
    {
      username : '나재민',
      userNum : 20190813,
      workTime : '17:00-19:00',
      workType : '식기세척'
    }
  ];

  function currentList () {
    return(
      currentData.map((data) => 
      <div className='main_worker_element'>
        <div className='main_elements'>{data.username}</div>
        <div className='main_elements'>{data.userNum}</div>
        <div className='main_elements'>{data.workTime}</div>
        <div className='main_elements'>{data.workType}</div>
      </div>
    ))
  }

  function requesrList () {
    return(
      requestData.map((data) => 
      <div className='main_worker_element'>
        <div className='main_elements'>{data.username}</div>
        <div className='main_elements'>{data.userNum}</div>
        <div className='main_elements'>{data.workTime}</div>
        <div className='main_elements'>{data.workType}</div>
      </div>
    ))
  }

  return (
    <div className='ManagerMainSession'>
      <div className='ManagerMain'>
        <div className='main_element'>
          <div className='main_element_title'>
            현재 근로자
          </div>
          {currentList()}
        </div>
        <div className='main_element'>
          <div className='main_element_title'>
            임시 근로 요청
          </div>
          {requesrList()}
        </div>
      </div>
    </div>
  )
}

export default ManagerMainSession