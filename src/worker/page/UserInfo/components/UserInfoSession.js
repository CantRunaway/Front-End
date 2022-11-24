import '../css/UserInfoSession.css'
import React, { useState , useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router';
import DepartmentList from '../../Registration/component/DepartmentList';
import BankList from '../../Registration/component/BankList';
import WorkTypeList from '../../Registration/component/WorkTypeList';
import axios from 'axios';

// 기존 값이 변경 값과 다른게 없으면 쿼리 보내지 않고 페이지 변경
// 모달 모바일 버전 설정
// 모달 출력시 뒷 배경 이벤트 제거
function UserInfoSession() {
  const [selectDepartments, setSelectDepartments] = useState([]);
  const [selectBanks, setSelectedBanks] = useState([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user_id: "",
    password: "",
    name: "",
    grade: "",
    phone: "",
    account: "",
    birth: "",
    work_type_index: "",
    bank_index: "",
    department_index: ""
  });

  const [defaultUser, setDefault] = useState({})

  const getDefault = async () => {
    await axios.get(`http://localhost:8080/users/${sessionStorage.getItem('user_id')}`)
    .then((res) => {
      setDefault(res.data);
      
    })
    .catch((err) => {
      console.error({error:err})
    })
  }

  useEffect(() => {
    getDefault()
  }, [])


  const update = async() => {
    await axios.post("http://localhost:8080/users/update", user)
    .then((res) => {
      console.log(res);
      alert('정보 수정에 성공했습니다.')
      navigate(`/${sessionStorage.getItem('user_id')}/main`);
    })
    .catch((err) => {
    
      console.error({error:err})
      alert('정보 수정에 실패했습니다.')
    })
  }

  const onChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value,
    });
    console.log(user);
  };

  useEffect(() => {
    setUser({
      ...user,
      department_index: selectDepartments,
    });
  }, [selectDepartments])

  useEffect(() => {
    setUser({
      ...user,
      work_type_index: selectedWorkTypes,
    });
  }, [selectedWorkTypes])

  useEffect(() => {
    setUser({
      ...user,
      bank_index: selectBanks,
    });
  }, [selectBanks])

  const backSpace = () =>{
    navigate(-1)
  }

  return (
    <div className='userInfo'>
      <div className='login-logo'>
        <img className="main-icon" alt="main-icon" src="/img/ICON.jpg" />
      </div>
      
      <div className='userInfo-banner'>
        <span>도망못가</span>
        <span>-- 회원정보 --</span>
      </div>

      <form className='userInfo-main-container'>
        <div className='userInfo-main'>
          <span className='name'>
            이름 <input className='name-input' onChange={onChangeUser} name = "name" placeholder = {defaultUser.name} disabled/>
          </span>
          <span className='student-code'>
            학번 <input className='student-code-input' onChange={onChangeUser} name = "user_id" disabled/>
          </span>

          <span className='pw'>
            비밀번호 
            <input 
              type='password' 
              className='pw-input' 
              name = "password"
              minLength={5}
              onChange={onChangeUser} 
              placeholder = {defaultUser.password}
            />
          </span>

          <span className='select-grade'>
            학년
            <select className='grade-list' onChange={onChangeUser} name = "grade" placeholder = {defaultUser.grade}>
              <option value='' >--선택--</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select >
          </span>
          <span className='select-department'>
            학과
            <DepartmentList id = "department_index" name = "department_index"
              selectDepartments={selectDepartments}
              setSelectDepartments={setSelectDepartments}
              />
          </span>
          <span className='phone'>
            전화번호 
            <input 
              id = "phone"
              type='tel' 
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
              title='010-****-****, 054-***-****'
              name = "phone" 
              className='phone' 
              onChange={onChangeUser} 
              placeholder = {defaultUser.phone}
              required 
            />
          </span>
          <span className='birth'>
            생년월일 <input className='birth-input' type='date' onChange={onChangeUser} name = "birth" placeholder = {defaultUser.birth} disabled/>
          </span>
        
          <span className='account'>
            지급 계좌 
            <BankList id = "bank_index" name = "bank_index"
              selectBanks={selectBanks}
              setSelectedBanks={setSelectedBanks}
              
              />
            <input className='account-input' name = "account" onChange={onChangeUser}/>
          </span>
          <span className='work-type'>
            근무 종류
            <WorkTypeList id = "work_type_index" name = "work_type_index"
            selectedWorkTypes={selectedWorkTypes}
            setSelectedWorkTypes={setSelectedWorkTypes}
            />
          </span>
        </div>

        <div>
          <button className='userinfo-sign-up-button' type = "submit" onClick={() => update()}>수정</button>
          <button className='userinfo-cancel-button'  onClick={() => backSpace()} >취소</button>
        </div>
      </form>
    </div>
  )
}
export default UserInfoSession