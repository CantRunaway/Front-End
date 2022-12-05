import React, { useState, useEffect } from "react";
import '../css/ManualWorkSession.css'
import axios from "axios";

function ManualWorkSession() {
  const [userList, setUserList] = useState([]); //근로자 이름 목록 받아오기
  const [userData, setUserData] = useState(); //선택된 근로자의 아이디값 받기

    //근로자 이름 목록 받아오기
    const getUserName = async () => {
      await axios
        .get("http://localhost:8080/users/workList")
        .then((res) => {
          setUserList(res.data);
        })
        .catch((err) => {
          console.error({ error: err });
        });
    };
  
    useEffect(() => {
      getUserName();
    }, []);
  
    //선택한 근로자의 아이디값 가져오기
    const setUserDataHandler = (e) => {
      setUserData(e.target.value);
    };

      // 보낼 데이터 담김, 선택한 학번
  const [checkData, setCheckData] = useState([]);

  const singleChecked = (e, index, value) => {
    let checked = e.target.checked;

    if (checked) {
      setCheckData([...checkData, value]);
      console.log("check");
    } else if (!checked && checkData.includes(value)) {
      setCheckData(checkData.filter((el) => el !== value));
    }
    console.log(checkData);
  };

  //출근
  const workOk = async () => {
    await axios
      .post(checkData)
      .then((res) => {
        console.log(checkData);
        alert("삭제");
      })
      .catch((err) => {
        console.error({ error: err });
        alert("삭제 실패");
      });
  };

//수동 출퇴근 시간
const [manualDate, setManualDate] = useState([]);
const [start, setStart] = useState([]);
const [end, setEnd] = useState();

//새로운 수동 출퇴근
 //새로운 모집 데이터 등록
 const [manualData, setManualtData] = useState({
  // work_type_index: "",
  work_start: "",
  work_end: "",
  worker_id: "",
});

const onChangeRecruit = (e) => {
  setManualtData({
    ...manualData,
    [e.target.name]: e.target.value,
    work_start: manualDate + " " + start,
    work_end: manualDate + " " + end,
  });
};
    
  return (
    <div className='ManualWorkSession'>
      <div className='ManualWorkMain'>
        <div className='Main-title'>
          근로자 출/퇴근 관리
        </div>
        <div className="SelectUserBar">
          <select className="select-manual-worker"
            onChange={setUserDataHandler}>
            {userList.map((user) => (
              <option key={user.user_id} value={user.user_id}>
                {user.name}
              </option>
            ))}
          </select>
          <div className="selectWorkTime">
            <input
                className="manual-date"
                name="manual-date"
                type="date"
                required
                onChange={(e) => {
                  setManualDate(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <div className="manual-time">
                <input
                  className="work_start_time"
                  name="manual_start"
                  form="H:mm"
                  type="time"
                  step="1800"
                  required
                  onChange={(e) => {
                    setStart(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <input
                  className="work_end_time"
                  name="manual_end"
                  form="H:mm"
                  type="time"
                  step="1800"
                  required
                  onChange={(e) => {
                    setEnd(e.target.value);
                    {
                      console.log(e.target.value);
                    }
                  }}
                />
              </div>
          </div>
          <div className="manualBtn">
            <button className="go-work-btn">출근</button>
            <button className="leave-work-btn">퇴근</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManualWorkSession