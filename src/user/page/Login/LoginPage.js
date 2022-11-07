import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './css/LoginPage.css'

function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const history = useNavigate();

  const compareId =(e) => {
    const res = login();
    if (res === "Login OK") {
      {
        <Link to = {'/' + id + '/main'}> </Link>
      }
    }
    else if(id==='admin' && pw === 'admin'){
      history(`/managermain`);
    }
    else if(id !=='test' && id !== 'admin'){
      alert("잘못된 아이디");
      setId('')
    }
    else{
      alert("잘못된 비밀번호");
      setPw('')
    }
  }

  const login = async () => {
    const response = await axios.post('http://localhost:8080/users/login', {
      user_id : id,
      password: pw
    });
    return response;
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      compareId();
    }
  }

  const onChangeId =(e) => {
    setId((id) => e.target.value)
  }

  const onChangePw =(e) => {
    setPw((pw) => e.target.value)
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
                <button onClick={() => compareId()} onKeyPress={onKeyPress} className='login-button'>Login</button>
            </form>
        </div>

        <div>
          <Link to='/Registration' className='login-sign-up'>회원가입</Link>
        </div>

      </div>
  )
}

export default LoginPage