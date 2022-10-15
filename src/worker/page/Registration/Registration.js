import './css/Registration.css'
import React from 'react'

// 은행 종류를 선택으로 하면 은행이 변경될 때 데이터 업로드 필요
function Registration() {

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
          이름 <input className='registration-name-input' required />
        </span>

        <span className='registration-student-code'>
          학번 <input className='student-code-input' required />
        </span>

        <span className='registration-pw'>
          비밀번호 <input type='password' className='registration-pw-input' required />
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
          <select className='registration-department-list' required >
            <option value='' >--선택--</option>
            <option value='1'>컴소공</option>
            <option value='2'>컴터</option>
            <option value='3'>전자</option>
            <option value='4'>기계</option>
          </select>
        </span>

        <span className='registration-phone'>
          전화번호 <input className='phone' required />
        </span>

        <span className='registration-birth'>
          생년월일 <input className='registration-birth-input' required />
        </span>
      

        <span className='registration-account'>
          지급 계좌 
          <select className='registration-bank-list' required >
            <option value='' >--선택--</option>
            <option value='1'>국민</option>
            <option value='2'>농협</option>
          </select>

          <input className='registration-account-input' required />
        </span>

        <span className='registration-work-type'>
          근무 종류
          <select className='registration-work-type-list' required >
            <option value='' >--선택--</option>
            <option value='1'>식기 세척</option>
            <option value='2'>식사 확인</option>
          </select>
        </span>

      </div>
        <button className='registration-sign-up-button' type='submit'>가입 요청</button>
    </div>
  )
}

export default Registration