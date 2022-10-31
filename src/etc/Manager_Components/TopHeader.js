import React, {NavLink} from 'react'
import '../../etc/css/TopHeader.css'

function TopHeader() {

  function location_replace(){
    var link_url = "/";
    window.location.replace(link_url);
    document.getElementById("location_replace").innerHTML = link_url;
  }

  return (
    <div className='TopHeader'>
        <div className='logout_btn' onClick={location_replace}>
          로그아웃
        </div>
    </div>
  )
}

export default TopHeader