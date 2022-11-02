import './css/Registration.css'
import React, { useState , useEffect} from 'react'
import axios from "axios"
import DepartmentList from './DepartmentList';
import BankList from './BankList';
import WorkTypeList from './WorkTypeList';

// 은행 종류를 선택으로 하면 은행이 변경될 때 데이터 업로드 필요
function Registration() {

  const [user, setUser] = useState({
    user_id: "",
    password: "",
    name: "",
    grade: "",
    phone: "",
    account: "",
    birth: "",
    work_type_index: "",
    bank_index: ""
  });

  const onChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value,
    });
    

  };

  return (
    
    <div className='registration-userInfo'>
      <div className='registration-login-logo'>
        <img className="registration-main-icon" alt="main-icon" src="/img/ICON.jpg" />
      </div>
      
      <div className='registration-userInfo-banner'>
        <span>도망못가</span>
        <span>-- 회원정보 --</span>
      </div>

      <div className='registration-userInfo-main'>

        <span className='registration-name'>
          이름 <input id = "id" name = "name" className='registration-name-input' onChange={onChangeUser} required />
        </span>

        <span className='registration-student-code'>
          학번 <input id = "user_id" name = "user_id" className='student-code-input' onChange={onChangeUser} required />
        </span>

        <span className='registration-pw'>
          비밀번호 <input id = "password" name = "password" type='password' className='registration-pw-input' onChange={onChangeUser} required />
        </span>

        <span className='registration-select-grade'>
          학년
          <select className='registration-grade-list' required >
            <option value="" >--선택--</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select >
        </span>

        <span className='registration-select-department'>
          학과
            <DepartmentList />
        </span>

        <span className='registration-phone'>
          전화번호 <input id = "phone" name = "phone" className='phone' onChange={onChangeUser} required />
        </span>

        <span className='registration-birth'>
          생년월일 <input id = "birth" name = "birth" className='registration-birth-input' onChange={onChangeUser} required />
        </span>
      

        <span className='registration-account'>
          지급 계좌
            <BankList />
          
          <input id = "account" name = "account" className='registration-account-input' onChange={onChangeUser} required />
        </span>

        <span className='registration-work-type'>
          근무 종류
          <WorkTypeList />
        </span>

      </div>
        <button className='registration-sign-up-button' type='submit'>가입 요청</button>
    </div>
  )
}

export default Registration