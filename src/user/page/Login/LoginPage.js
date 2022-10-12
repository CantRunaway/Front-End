import React, {useRef, useEffect, useState} from 'react'
import './css/LoginPage.css'

// setlect_num 이 0 이면 input창을 비워놓고
// 1 이면 DB에서 값을 가져와서 채워 놓고 수정 불가능한 부분은 disable로 변경

function LoginPage() {
  const [id, setId] = useState('');

  const onSubmit =(e) => {
    console.log(id)
  }

  const onChange =(e) => {
    setId((id) => e.target.value)
  }

  return (
      <div className='login'>

        <div className='login-logo'>
          <img className="main-icon" alt="main-icon" src="img/ICON.jpg" />
        </div>

        <div className='login-banner'>
          <span>도망못가</span>
          <span>당신의 출퇴근 관리를 하나로.</span>
        </div>

        <div className='login-form-box'>
          <form className='login-form'>
              <div className='login'>
                <input placeholder='ID' onChange={onChange}className='id'></input>
                <input placeholder='PW' type='password' className='passwd'></input>
              </div>
                <button onSubmit={onSubmit} className='login-button'>Login</button>
            </form>
        </div>

        <div>
          <button className='login-sign-up'>회원가입</button>
        </div>

      </div>
  )
}

export default LoginPage