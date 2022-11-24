import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/WorkerListSession.css'

function WorkerListSession() {

  // 항목데이터
  const colums = ["이름", "학번", "근무 시작 시간", "근무 종료 시간", "근무 종류"];

  const [workListData, setWorkerListData] = useState([])

  const getWorker = async() => {
    await axios.get("http://localhost:8080/work")
    .then((res) => {
      setWorkerListData(res.data);
    })
    .catch((err) => {
      console.error({error: err});
    })
  }

  useEffect(() => {
    getWorker();
  }, []);

  //Ver.1
  const [checkData, setCheckData] = useState([]);

  const allCheck = (check) => {
    if(check){
      console.log("모두 선택");
      const allArr = [];
      workListData.forEach((el) => allArr.push(el.id));
      setCheckData(allArr);
    }
    else {
      setCheckData([]);
    }
  }

  const singleChecked = (e, index) => {
    let checked = e.target.checked;

    if(checked){
      setCheckData([...checkData, index])
      console.log("check")
    }
    else if(!checked && checkData.includes(index)){
      setCheckData(checkData.filter((el) => el !== index))
    }
    console.log(checkData);
  }

  const RemoveClicked = async() => {
    
    alert("삭제")
  }

  //Ver.2
//   const [checkedList, setCheckedList] = useState([]);
//   const onCheckedAll = ((checked) => {
//     if(checked){
//       const checkedArr = [];
//       worklistData.forEach((list) => checkedList.push(list));
//       setCheckedList(checkedList);
//     } else {
//       setCheckedList([]);
//     }
//   }, [worklistData]
//   );

//  const onCheckedSingle = ((checked, id) => {
//   if(checked){
//     setCheckedList([...checkedList, id]);
//   } else {
//     setCheckedList(checkedList.filter((el) => el !== id));
//   }
//  }, [checkedList]
//  );

const [chlist, setChlist] = useState([]);

const onChangeAll = (e) => {
  // 체크할 시 CheckList에 id 값 전체 넣기, 체크 해제할 시 CheckList에 빈 배열 넣기
  setChlist(e.target.checked ? workListData : [])
}

//single
const onChangeEach = (e, id) => {
  // 체크할 시 CheckList에 id값 넣기
  if (e.target.checked) {
    setChlist([...chlist, id]);
  // 체크 해제할 시 CheckList에서 해당 id값이 `아닌` 값만 배열에 넣기
  } else {
    setChlist(chlist.filter((checkedId) => checkedId !== id));
  }
}

  function workerlistTable(){
    return(
      // 기존
      <table>
        <thead>
          <tr>
            <th>
              {/* <input className='chb' type="checkbox"
                onChange={(e) => allCheck(e.target.checked)}
                checked={checkData.length === workListData.length ? true : false}
                // onChange={(e) => onCheckedAll(e. target.checked)}
                // checked={checkedList.length === 0 ? false : checkedList === worklistData.length ? true : false}
              />  */}
            </th> 
            {colums.map((col, index) => (
              <th className='workerlistTable_header' key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {workListData.map((list, index) => (
            <tr key={index} >
              <td>
                <input 
                  className='chb' 
                  type="checkbox"
                  onChange={(e) => singleChecked(e, index)}
                  // key={list.work_index}
                  // onChange={(e) => onCheckedSingle(e.target.checked, list.work_index)}
                  // checked={checkedList.includes(list.work_index) ? true : false}
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
          <span className='WorkerListMain-title'>근무자 리스트</span>
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