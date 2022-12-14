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
        <NavLink to="/managermain">πββοΈπββοΈπ</NavLink>
      </div>
      <div className='menu'>
          <ul className='menu_main_title'>
          <NavLink to="/workerlist">πββοΈκ·Όλ¬΄μ λͺ©λ‘</NavLink>
          </ul>
          <ul className='menu_main_title'>
            πββοΈκ·Όλ¬΄μ κ΄λ¦¬
            {view1 ? <img className="plus-minus" src="/img/sideplus.png" alt=''
              onClick={() => {setView1(!view1)}}
            />
            :
            <img className="plus-minus" src="/img/sideminus.png" alt='' onClick={() => {setView1(!view1)}}/>}
            {view1 && 
            <>
            <li className='menu_contents'>
                <NavLink to="/userapproval">πββοΈνμκ°μμΉμΈ
                </NavLink>
              </li>
              <li className='menu_contents'>
                <NavLink to="/scheduleenrollmng">πββοΈμκ°ν λ±λ‘ / μμ 
                </NavLink>
              </li>
              <li className='menu_contents'>
                <NavLink to="/schedulemng">πββοΈμκ°ν κ΄λ¦¬
                </NavLink>
              </li>
            </>
            }
          </ul>
          <ul className='menu_main_title'>
            πββοΈμμ κ·Όλ‘ κ΄λ¦¬
            {view2 ? <img className="plus-minus" src="/img/sideplus.png" alt='' onClick={() => {setView2(!view2)}}/>
             : 
             <img className="plus-minus" src="/img/sideminus.png" alt='' onClick={() => {setView2(!view2)}}/>}
            {view2 && 
            <>

              <li className='menu_contents'>
              <NavLink to="/temporalworkmng">πββοΈμμ κ·Όλ‘ λͺ¨μ§</NavLink>
              </li>
              <li className='menu_contents'>
                <NavLink to="/temporalworkrequest">πββοΈμμ κ·Όλ‘/κ²°κ·Ό μμ²­</NavLink>
              </li>
            </> }
          </ul>
          <ul className='menu_main_title'>
            πββοΈκ·Όλ‘ κ΄λ¦¬{" "}
            {view3 ? <img className="plus-minus" src="/img/sideplus.png"alt=''  onClick={() => {setView3(!view3)}}/>
             : 
             <img className="plus-minus" src="/img/sideminus.png" alt='' onClick={() => {setView3(!view3)}}/>}
            {view3 && 
            <>
              <li className='menu_contents'>
                <NavLink to="/workmng">πββοΈκ·Όλ¬΄ ν­λͺ© λ° μκΈ κ΄λ¦¬</NavLink>
              </li>
              <li className='menu_contents'>
                <NavLink to="/workcomfirm">πββοΈκ·Όλ¬΄μλ³ κ·Όλ¬΄ νμΈ</NavLink>
              </li>
              <li className='menu_contents'>
                <NavLink to="/manualwork">πββοΈκ·Όλ¬΄μ μΆ/ν΄κ·Ό</NavLink>
              </li>
            </>
            }
          </ul>
          <ul className='menu_main_title'>
            <NavLink to="/total">πββοΈκ·Όλ¬΄μ μ μ²΄ ν΅κ³</NavLink>
          </ul>
      </div>
    </div>

    
  )
}

export default SideMenu