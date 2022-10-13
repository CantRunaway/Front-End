import './css/Registration.css'
import React from 'react'

// 은행 종류를 선택으로 하면 은행이 변경될 때 데이터 업로드 필요
function Registration() {

  return (
    
    <div className='userInfo'>
      <div className='login-logo'>
        <img className="main-icon" alt="main-icon" src="/img/ICON.jpg" />
      </div>
      
      <div className='userInfo-banner'>
        <span>도망못가</span>
        <span>-- 회원정보 --</span>
      </div>

      <form>
      <div className='userInfo-main'>

        <span className='name'>
          이름 <input className='name-input' required />
        </span>

        <span className='student-code'>
          학번 <input className='student-code-input' required />
        </span>

        <span className='pw'>
          비밀번호 <input type='password' className='pw-input' required />
        </span>

        <span className='select-grade'>
          학년
          <select className='grade-list' required >
            <option value="" >--선택--</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select >
        </span>

        <span className='select-department'>
          학과
          <select className='department-list' required >
            <option value='' >--선택--</option>
            <option value='1'>컴소공</option>
            <option value='2'>컴터</option>
            <option value='3'>전자</option>
            <option value='4'>기계</option>
          </select>
        </span>

        <span className='phone'>
          전화번호 <input className='phone' required />
        </span>

        <span className='birth'>
          생년월일 <input className='birth-input' required />
        </span>
      

        <span className='account'>
          지급 계좌 
          <select className='bank-list' required >
            <option value='' >--선택--</option>
            <option value='1'>국민</option>
            <option value='2'>농협</option>
          </select>

          <input className='account-input' required />
        </span>

        <span className='work-type'>
          근무 종류
          <select className='work-type-list' required >
            <option value='' >--선택--</option>
            <option value='1'>식기 세척</option>
            <option value='2'>식사 확인</option>
          </select>
        </span>

      </div>
      
      <button className='sign-up-button' type='submit'>가입 요청</button>
      </form>
    </div>
  )
}

export default Registration