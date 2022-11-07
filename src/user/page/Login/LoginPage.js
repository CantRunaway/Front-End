import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './css/LoginPage.css'

function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:8080/users/login', {
      user_id : id,
      password: pw
    })
    .then((res) => {
      console.log(res);

      res.data ? navigate(`/${id}/main`) : loginFail();
    })
    .catch((err) => {
      console.error({error: err});
      navigate('/');
    })
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      login();
    }
  }

  const onChangeId = (e) => {
    setId(e.target.value);
    
  }

  const onChangePw = (e) => {
    setPw(e.target.value);
    
  }
  
  const loginFail = () => {
    alert("로그인에 실패했습니다.");
    reset();
  }

  const reset = () => {
    setId('');
    setPw('');
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
                <input placeholder='ID' onChange={onChangeId} className='id' value={id} required></input>
                <input placeholder='PW' onChange={onChangePw} type='password' className='passwd' value={pw} required></input>
              </div>
                <button onClick={login} onKeyPress={onKeyPress} className='login-button'>Login</button>
                
            </form>
        </div>

        <div>
          <Link to='/Registration' className='login-sign-up'>회원가입</Link>
        </div>

      </div>
  )
}

export default LoginPage;