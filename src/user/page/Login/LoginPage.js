import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './css/LoginPage.css'

function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const history = useNavigate();
  const [isLogin, setLogin] = useState(false);

  const compareId =(e) => {
    login();
    console.log(isLogin);
    isLogin ? alert("true") : alert("false");
  }

  const login = async () => {
    const response = await axios.post('http://localhost:8080/users/login', {
      user_id : id,
      password: pw
    });
    setLogin(response.data);
    alert(response.data);
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