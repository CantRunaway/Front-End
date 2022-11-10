import React from 'react'
import { useNavigate } from 'react-router';
import '../css/WorkerHeader.css'
function Header() {
    // 뒤로가기 동작 제거
    const navigate = useNavigate();
    function location_replace(){
      sessionStorage.removeItem('user_id');
      navigate(`/`);
    }

  return (
    <div className='worker-header-container'>
      <div className='worker-header'>

        <button className='logout-button' onClick={location_replace}>로그아웃</button>

        <img className="main-icon" alt="main-icon" src="/img/ICON.jpg" />

      </div>
    </div>
  )
}

export default Header