import React, {useState}from 'react'
import { NavLink } from "react-router-dom";
import '../css/SideMenu.css'

function SideMenu() {
  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(true);
  const [view3, setView3] = useState(true);


  return (
    <div className='SideMenu'>
      <div className='SideTitle'>
        🏃‍♀️🏃‍♂️🏃
      </div>
      <div className='menu'>
        {/* <ul> */}
          <ul className='menu_title'>🏃‍♂️근무자 목록</ul>
          <ul className='menu_title'>
            🏃‍♂️근무자 관리 {" "}
            {view1 ? <img className="plus-minus" src="/img/sideplus.png" alt=''
              onClick={() => {setView1(!view1)}}
            />
            :
            <img className="plus-minus" src="/img/sideminus.png" alt='' onClick={() => {setView1(!view1)}}/>}
            {view1 && 
            <>
            <li className='menu_contents'>
                <NavLink to="/userapproval">🏃‍♂️회원가입승인
                </NavLink>
              </li>
              <li className='menu_contents'>
                <NavLink to="/:username/scheduleenroll">🏃‍♂️시간표 등록 / 수정
                </NavLink>
              </li>
              <li className='menu_contents'>
                <NavLink to="/schedulemng">🏃‍♂️시간표 관리
                </NavLink>
              </li>
            </>
            }
          </ul>
          <ul className='menu_title'>
            🏃‍♂️임시 근로 관리
            {view2 ? <img className="plus-minus" src="/img/sideplus.png" alt='' onClick={() => {setView2(!view2)}}/>
             : 
             <img className="plus-minus" src="/img/sideminus.png" alt='' onClick={() => {setView2(!view2)}}/>}
            {view2 && 
            <>
              <li className='menu_contents'>🏃‍♂️임시 근로 모집</li>
              <li className='menu_contents'>🏃‍♂️임시 근로/결근 요청</li>
            </> }
          </ul>
          <ul className='menu_title'>
            🏃‍♂️근로 관리{" "}
            {view3 ? <img className="plus-minus" src="/img/sideplus.png"alt=''  onClick={() => {setView3(!view3)}}/>
             : 
             <img className="plus-minus" src="/img/sideminus.png" alt='' onClick={() => {setView3(!view3)}}/>}
            {view3 && 
            <>
              <li className='menu_contents'>🏃‍♂️근무 항목 및 시급 관리</li>
              <li className='menu_contents'>🏃‍♂️근무자별 근무 확인</li>
            </>
            }
          </ul>
          <ul className='menu_title'>🏃‍♂️근무자 전체 통계</ul>
          <ul className='menu_title'>🏃‍♂️히스토리 확인 </ul>
        {/* </ul> */}
      </div>
    </div>

    
  )
}

export default SideMenu