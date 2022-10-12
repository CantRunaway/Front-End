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
        <ul>
          <ul className='menu_title'>🏃‍♂️근무자 목록</ul>
          <ul className='menu_title' onClick={() => {setView1(!view1)}}>
            🏃‍♂️근무자 관리 {" "}
            {view1 ? ' ^' : ' ⌄'}
            {view1 && 
            <>
              <li className='menu_content'>🏃‍♂️회원가입승인</li>
              <li className='menu_content'>🏃‍♂️근무자 목록</li>
              <li className='menu_content'>🏃‍♂️시간표 등록 / 수정</li>
              <li className='menu_content'>🏃‍♂️시간표 관리</li>
            </>
            }
          </ul>
          <ul className='menu_title' onClick={() => {setView2(!view2)}}>
            🏃‍♂️임시 근로 관리
            {view2 ? '^' : '⌄'}
            {view2 && <li className='menu_content'>🏃‍♂️임시 근로 모집</li> }
          </ul>
          <ul className='menu_title' onClick={() => {setView3(!view3)}}>
            🏃‍♂️근로 관리{" "}
            {view3 ? '^' : '⌄'}
            {view3 && 
            <>
              <li className='menu_content'>🏃‍♂️근무 항목 및 시급 관리</li>
              <li className='menu_content'>🏃‍♂️근무자별 근무 확인</li>
              <li className='menu_content'>🏃‍♂️근무자 전체 통계</li>
              <li className='menu_content'>🏃‍♂️히스토리 확인 </li>
            </>
            }
          </ul>
        </ul>
      </div>
    </div>

    
  )
}

export default SideMenu