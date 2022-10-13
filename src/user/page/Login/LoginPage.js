import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './css/LoginPage.css'

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
          <Link to='/Registration' className='login-sign-up'>회원가입</Link>
        </div>

      </div>
  )
}

export default LoginPage