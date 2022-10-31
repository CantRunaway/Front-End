import React from 'react'
import '../css/WorkerListSession.css'

function WorkerListSession() {

  // 항목데이터
  const colums = ["이름", "학번", "근무시간", "근무 종류"];
  const worklistData = [
    {
      name : '이마크',
      num : 20180802,
      workTime : '13:30 - 15: 30',
      workType : '식기세척'
    },
    {
      name : '종천러',
      num : 20201122,
      workTime : '12:30 - 14: 30',
      workType : '식기세척'
    },
    {
      name : '박지성',
      num : 20210205,
      workTime : '12:30 - 14: 30',
      workType : '식기세척'
    },
    {
      name : '황인준',
      num : 20190323,
      workTime : '11:00 - 13:00',
      workType : '식기세척'
    },
    {
      name : '이제노',
      num : 20190423,
      workTime : '12:00 - 14:00',
      workType : '식기세척'
    },
    {
      name : '이해찬',
      num : 20190606,
      workTime : '16:00 - 18:00',
      workType : '식기세척'
    },
    {
      name : '나재민',
      num : 20190813,
      workTime : '17:00 - 19:00',
      workType : '식기세척'
    }
  ];

  function workerlistTable(){
    return(
      <table>
        <thead>
          <tr>
            <input className='chb' type="checkbox"/>
            {colums.map((col) => (
              <th className='workerlistTable_header' key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {worklistData.map(({name, num, workTime, workType }) => (
            <tr key={num}>
              <input className='chb' type="checkbox"/>
              <td className='workerlist_items'>{name}</td>
              <td className='workerlist_items'>{num}</td>
              <td className='workerlist_items'>{workTime}</td>
              <td className='workerlist_items'>{workType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  
  const RemoveClicked = () => {
    alert("삭제되었습니다.");
  }

  return (
    <div className='WorkerListSession'>
      <div className='WorkerListMain'>
        <div className='workerListTable'>
          {workerlistTable()}
        </div>
        <div className='removeButton'>
          <button className='remove_btn' onClick={() => RemoveClicked()}>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default WorkerListSession