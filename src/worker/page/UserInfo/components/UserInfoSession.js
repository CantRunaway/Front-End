import '../css/UserInfoSession.css'
import React from 'react'

// 기존 값이 변경 값과 다른게 없으면 쿼리 보내지 않고 페이지 변경
// 모달 모바일 버전 설정
// 모달 출력시 뒷 배경 이벤트 제거
function UserInfoSession() {

  return (
    <div className='userInfo'>
      <div className='login-logo'>
        <img className="main-icon" alt="main-icon" src="/img/ICON.jpg" />
      </div>
      
      <div className='userInfo-banner'>
        <span>도망못가</span>
        <span>-- 회원정보 --</span>
      </div>
      <div className='userInfo-main'>
        <span className='name'>
          이름 <input className='name-input' />
        </span>
        <span className='student-code'>
          학번 <input className='student-code-input' />
        </span>

        <span className='pw'>
          비밀번호 <input type='password' className='pw-input' />
        </span>

        <span className='select-grade'>
          학년
          <select className='grade-list'>
            <option value='' >--선택--</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select >
        </span>
        <span className='select-department'>
          학과
          <select className='department-list'>
            <option value='' >--선택--</option>
            <option value='1'>컴소공</option>
            <option value='2'>컴터</option>
            <option value='3'>전자</option>
            <option value='4'>기계</option>
          </select>
        </span>
        <span className='phone'>
          전화번호 <input className='phone'/>
        </span>
        <span className='birth'>
          생년월일 <input className='birth-input' />
        </span>
      
        <span className='account'>
          지급 계좌 
          <select className='bank-list'>
            <option value='' >--선택--</option>
            <option value='1'>국민</option>
            <option value='2'>농협</option>
          </select>
          <input className='account-input'/>
        </span>
        <span className='work-type'>
          근무 종류
          <select className='work-type-list'>
            <option value='' >--선택--</option>
            <option value='1'>식기 세척</option>
            <option value='2'>식사 확인</option>
          </select>
        </span>
      </div>
      
      <button className='sign-up-button'>수정</button>
    </div>
  )
}
export default UserInfoSession