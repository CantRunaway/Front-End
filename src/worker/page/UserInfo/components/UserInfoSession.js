import React from 'react'
import '../css/UserInfoSession.css'

function UserInfoSession() {
  return (
    <form className='authority-form' onSubmit>
      <div className='authority-main'>
        <span>
          비밀번호 <input />
        </span>
        <span>
          <button className='submit-button'>확인</button>
        </span>
      </div>
    </form>
  );
}

export default UserInfoSession;