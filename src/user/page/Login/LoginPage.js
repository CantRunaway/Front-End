import React from 'react'
import './css/LoginPage.css'

function LoginPage() {
  return (
    <>
      <header>
        <img className="main-icon" alt="main-icon" src="img/ICON.jpg" />
        <h1>도망못가</h1>
        <h4>당신의 출퇴근 관리를 하나로.</h4>
      </header>

      <main>
        <form >
          <div className='login'>
            <input className='id'></input>
            <input className='passwd'></input>
            <button>Login</button>
          </div>
        </form>
      </main>

      <footer>
        <button>회원가입</button>
      </footer>

    </>
  )
}

export default LoginPage