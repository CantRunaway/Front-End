import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/WorkerListSession.css'

function WorkerListSession() {

  // 항목데이터
  const colums = ["이름", "학번", "근무 시작 시간", "근무 종료 시간", "근무 종류"];

  const [workListData, setWorkerListData] = useState([])

  const [checkData, setCheckData] = useState([]); // 보낼 데이터 담김, 선택한 학번

  const getWorker = async() => {
    await axios.get("http://localhost:8080/work")
    .then((res) => {
      setWorkerListData(res.data);
    })
    .catch((err) => {
      console.error({error: err});
    })
  }

  // console.log(workListData);

  useEffect(() => {
    getWorker();
  }, [workListData]);


  const singleChecked = (e, intdex, value) => {
    let checked = e.target.checked;

    if(checked){
      setCheckData([...checkData, value])
      console.log("check")
    }
    else if(!checked && checkData.includes(value)){
      setCheckData(checkData.filter((el) => el !== value))
    }
    console.log(checkData);
  }

  //삭제 (X)
  const RemoveClicked = async() => {
    await axios.post("http://192.168.0.248:8080/work", checkData)
    .then((res) => {
      console.log(res);
      alert("삭제")
    })
    .catch((err) => {
      console.error({error: err});
      alert("삭제 실패")
    })
    
  }

  function workerlistTable(){
    return(
      <table>
        <thead>
          <tr>
            <th>
            </th> 
            {colums.map((col, index) => (
              <th className='workerlistTable_header' key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody id='test'>
          {workListData.map((list, index) => (
            <tr key={index} >
              <td>
                <input 
                  className='worker-chb' 
                  value={list.user_id}
                  type="checkbox"
                  onChange={(e) => singleChecked(e, index, e.target.value)}
                />
              </td>
              <td className='workerlist_items'>{list.name}</td>
              <td className='workerlist_items'>{list.user_id}</td>
              <td className='workerlist_items'>{list.start_time}</td>
              <td className='workerlist_items'>{list.end_time}</td>
              <td className='workerlist_items'>{list.work_type_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      // <table>
      //   <thead>
      //     <th>
      //       <input type='checkbox' onChange={onChangeAll} checked={chlist.length === worklistData.length}/>
      //     </th>
      //       {colums.map((col) => (
      //          <th className='workerlistTable_header' key={col}>{col}</th>
      //        ))}
      //   </thead>
      //   <tbody>
      //     {worklistData.map((list, id) => (
      //       <tr key={id}>
      //         <td>
      //           <input onChange={(e) => onChangeEach(e, list.work_index)} checked={}/>
      //         </td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
    )
  }

  return (
    <div className='WorkerListSession'>
      <div className='WorkerListMain'>
        <div className='workerListTable'>
          <div className='Main-title'>근무자 목록</div>
          {workerlistTable()}
        </div>
        <div className='removeButton'>
          <button className='remove_btn' onClick={RemoveClicked}>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default WorkerListSession