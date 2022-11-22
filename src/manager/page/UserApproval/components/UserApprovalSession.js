import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/UserApprovalSession.css'

function UserApprovalSession() {

  // 항목데이터
  const colums = ["이름", "학번", "학년", "학과", "전화번호", "생년월일", "근무종류"];
  
  // 임시 데이터
  // const userData = [
  //   {
  //     num : 20180802,
  //     name : "이민형",
  //     grade : 3,
  //     major : "컴퓨터소프트웨어공학과",
  //     phoneNum : "010-1999-0802",
  //     birth : 19990802,
  //     type : "식기세척"
  //   },
  //   {
  //     num : 20190323,
  //     name : "황인준",
  //     grade : 4,
  //     major : "컴퓨터소프트웨어공학과",
  //     phoneNum : "010-2000-0323",
  //     birth : 20000323,
  //     type : "식사확인"
  //   },
  //   {
  //     num : 20190423,
  //     name : "이제노",
  //     grade : 2,
  //     major : "컴퓨터소프트웨어공학과",
  //     phoneNum : "010-2000-0423",
  //     birth : 20000423,
  //     type : "식기세척"
  //   },
  //   {
  //     num : 20190606,
  //     name : "이동혁",
  //     grade : 2,
  //     major : "컴퓨터소프트웨어공학과",
  //     phoneNum : "010-2000-0606",
  //     birth : 20000606,
  //     type : "식사확인"
  //   },
  //   {
  //     num : 20190813,
  //     name : "나재민",
  //     grade : 2,
  //     major : "컴퓨터소프트웨어공학과",
  //     phoneNum : "010-2000-0813",
  //     birth : 20000813,
  //     type : "식기세척"
  //   }
  // ];

   const [userData, setUserData] = useState([]);

   const getUserData = async () => {
    await axios.get("http://localhost:8080/users/userList")
    .then((res) => {
      setUserData(res.data);
    })

    .catch((err)=> {
      console.error({error:err});
    })
   }

   useEffect(() => {
    getUserData()
   }, []);

  const [checked, setChecked] = useState([]);


  const onChecked = (check, id) => {
    if(check){
      setChecked([...userData, id])
      console.log(checked);
    }
    else{
      setChecked(checked.filter((el) => el !== id))
    }
  }

  const EnrollClicked = () => {
    alert("등록되었습니다.");
  }

  const RefuseClicked = () => {
    alert("거부되었습니다.");
  }
  
  function approvalTable() {
    return (
      <table>
        <thead>
          <tr>
            <input type="checkbox"/>
            {colums.map((col) => (
              <th className='table_header' key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {userData.map((user) => (
            <tr key={user_id}>
              <input type="checkbox" onChange={(e) => onChecked(e.target.checked, user.user_id)}/>
              <td className='table_items'>{user.name}</td>
              <td className='table_items'>{user.user_id}</td>
              <td className='grade_items'>{user.grade}</td>
              <td className='major_items'>{user.major}</td>
              <td className='table_items'>{user.phone}</td>
              <td className='table_items'>{user.birth}</td>
              <td className='table_items'>{user.type}</td>
            </tr>
          ))} */
          }
          {
            // userData.forEach((user) => {<div>
            //   <input type="checkbox" onChange = {(e) => onChecked(e.target.checked, user.user_id)}/>
            //   <tr key={user.user_id}>
                
            //     <td className='table_items'>{user.name}</td>
            //     <td className='table_items'>{user.user_id}</td>
            //     <td className='grade_items'>{user.grade}</td>
            //     <td className='major_items'>{user.major}</td>
            //     <td className='table_items'>{user.phone}</td>
            //     <td className='table_items'>{user.birth}</td>
            //     <td className='table_items'>{user.work_type_name}</td>
            //   </tr>
            //   </div>
            // })
            console.log(userData)
          }

          
        </tbody>
      </table>
    );
  }

  return (
    <div className='UserApprovalSession'>
      <div className='UserApprovalMain'>
        <div className='userApprovalTable'>
          {approvalTable()}
        </div>
        <div className='approvalBtn'>
          <button className='approval_btn' onClick={() => EnrollClicked()}>등록</button>
          <button className='approval_btn' onClick={() => RefuseClicked()}>거부</button>
        </div>
        </div>
    </div>
  )
}

export default UserApprovalSession