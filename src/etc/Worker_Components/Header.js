import React from 'react'
import '../css/WorkerHeader.css'
function Header() {
    // 뒤로가기 동작 제거
    function location_replace(){
      var link_url = "/";
      window.location.replace(link_url);
      document.getElementById("location_replace").innerHTML = link_url;
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