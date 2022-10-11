import React from 'react'
import './css/LoginPage.css'

function LoginPage() {
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
                <input placeholder='ID' className='id'></input>
                <input placeholder='PW' type='password' className='passwd'></input>
              </div>
                <button className='login-button'>Login</button>
            </form>
        </div>

        <div>
          <button className='login-sign-up'>회원가입</button>
        </div>

      </div>
  )
}

export default LoginPage