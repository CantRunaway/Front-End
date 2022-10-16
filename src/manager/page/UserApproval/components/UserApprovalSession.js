import React, { useState } from 'react'
import '../css/UserApprovalSession.css'

function UserApprovalSession() {

  // 항목데이터
  const colums = ["이름", "학번", "학년", "학과", "전화번호", "생년월일", "근무종류"];
  
  // 임시 데이터
  const userData = [
    {
      num : 20201111,
      name : "임수연",
      grade : 3,
      major : "컴퓨터소프트웨어공학과",
      phoneNum : "010-1111-2222",
      birth : 20011103,
      type : "식기세척"
    }
  ];

  
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
          {userData.map(({name, num, grade, major, phoneNum, birth, type }) => (
            <tr key={num}>
              <td className='table_items'><input type="checkbox"/></td>
              <td className='table_items'>{name}</td>
              <td className='table_items'>{num}</td>
              <td className='table_items'>{grade}</td>
              <td className='table_items'>{major}</td>
              <td className='table_items'>{phoneNum}</td>
              <td className='table_items'>{birth}</td>
              <td className='table_items'>{type}</td>
            </tr>
          ))}
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
          <button className='approval_btn'>등록</button>
          <button className='approval_btn'>거부</button>
        </div>
        </div>
    </div>
  )
}

export default UserApprovalSession