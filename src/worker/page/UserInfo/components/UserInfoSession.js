import '../css/UserInfoSession.css'
import React, { useState , useEffect} from 'react'
import DepartmentList from '../../Registration/component/DepartmentList';
import BankList from '../../Registration/component/BankList';
import WorkTypeList from '../../Registration/component/WorkTypeList';

// 기존 값이 변경 값과 다른게 없으면 쿼리 보내지 않고 페이지 변경
// 모달 모바일 버전 설정
// 모달 출력시 뒷 배경 이벤트 제거
function UserInfoSession() {
  const [selectDepartments, setSelectDepartments] = useState([]);
  const [selectBanks, setSelectedBanks] = useState([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);

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


  return (
    <div className='userInfo'>
      <div className='login-logo'>
        <img className="main-icon" alt="main-icon" src="/img/ICON.jpg" />
      </div>
      
      <div className='userInfo-banner'>
        <span>도망못가</span>
        <span>-- 회원정보 --</span>
      </div>
      <div className='userInfo-main'>
        <span className='name'>
          이름 <input className='name-input' onChange={onChangeUser} name = {user.name}/>
        </span>
        <span className='student-code'>
          학번 <input className='student-code-input' onChange={onChangeUser} name = {user.user_id}/>
        </span>

        <span className='pw'>
          비밀번호 <input type='password' className='pw-input' onChange={onChangeUser} name = {user.password}/>
        </span>

        <span className='select-grade'>
          학년
          <select className='grade-list' onChange={onChangeUser} name = {user.grade}>
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
          전화번호 <input className='phone' onChange={onChangeUser} name = {user.phone}/>
        </span>
        <span className='birth'>
          생년월일 <input className='birth-input' onChange={onChangeUser} name = {user.birth}/>
        </span>
      
        <span className='account'>
          지급 계좌 
          <BankList id = "bank_index" name = "bank_index"
            selectBanks={selectBanks}
            setSelectedBanks={setSelectedBanks}
            
            />
          <input className='account-input'/>
        </span>
        <span className='work-type'>
          근무 종류
          <WorkTypeList id = "work_type_index" name = "work_type_index"
          selectedWorkTypes={selectedWorkTypes}
          setSelectedWorkTypes={setSelectedWorkTypes}
          />
        </span>
      </div>
      
      <button className='sign-up-button'>수정</button>
    </div>
  )
}
export default UserInfoSession