import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/WorkerListSession.css'

function WorkerListSession() {

  // 항목데이터
  const colums = ["이름", "학번", "근무 종류"];

  const [workListData, setWorkerListData] = useState([])

  const getWorker = async() => {
    await axios.get("http://localhost:8080/users/workList")
    .then((res) => {
      setWorkerListData(res.data);
      // console.log(workListData);
    })
    .catch((err) => {
      console.error({error: err});
    })
  }

  useEffect(() => {
    getWorker();
  }, []);

// 보낼 데이터 담김, 선택한 학번
  const [checkData, setCheckData] = useState([]); 

  const singleChecked = (e, index, value) => {
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

  //삭제
  const RemoveClicked = async() => {
    await axios.post(`http://localhost:8080/users/deleteUser`, checkData)
    .then((res) => {
      console.log(checkData);
      alert("삭제")
      getWorker();
    })
    .catch((err) => {
      console.error({error: err});
      alert("삭제 실패")
    })
    
  }

  function workerlistTable(){
    return(
      <table className='workerlist-table'>
        <thead className='workListTable-header'>
          <tr>
            <th>
            </th> 
            {colums.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody id='test' className='workListTable-body'>
          {workListData.map((list, index) => (
            <tr key={index} >
              <td className='worker-chb'>
                <input 
                  value={list.user_id}
                  type="checkbox"
                  onChange={(e) => singleChecked(e, index, e.target.value)}
                />
              </td>
              <td className='workerlist_items'>{list.name}</td>
              <td className='workerlist_items'>{list.user_id}</td>
              
              <td className='workerlist_items'>{list.work_type_name}</td>
            </tr>
          ))}
          {console.log(checkData)}
        </tbody>
      </table>
    )
  }

  return (
    <div className='WorkerListSession'>
      <div className='WorkerListMain'>
        <div className='Main-title'>근무자 목록</div>
        <div className='workerListTable'>
          {workerlistTable()}
        </div>
        <div className='workerRemoveButton'>
          <button className='remove_btn' onClick={RemoveClicked}>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default WorkerListSession