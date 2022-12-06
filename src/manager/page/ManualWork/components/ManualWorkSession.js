import React, { useState, useEffect } from "react";
import "../css/ManualWorkSession.css";
import axios from "axios";

function ManualWorkSession() {
  const [userList, setUserList] = useState([]); //근로자 이름 목록 받아오기
  const [manual_date, setManual_date] = useState(); //선택된 근로자의 아이디값 받기
  const [workType, setWorkType] = useState([]); //근로종류 받아오기

  // 보낼 데이터 세팅 객체
  const [manualData, setManualData] = useState
  (
    {
      user_id: "",
      work_type_index: "",
      start_time: "",
      end_time: "",
    }
  );

  useEffect(() => {
    getUserName();
    getWorkType();
  }, []);

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

  const getWorkType = async () => {
    await axios
      .get("http://localhost:8080/workType")
      .then((res) => {
        setWorkType(res.data);
      })
      .catch((err) => {
        console.error({ error: err });
      });
  };

  const postDataHandler = () => {
    let nullCheck = false
    for (const [key, value] of Object.entries(manualData)) {
      nullCheck = true
      if(value === ''){
        alert("모든 항목을 선택해주세요")
        nullCheck = false
        break
      }
    }

    if(manualData.start_time > manualData.end_time){
      alert("출근 시간이 퇴근 시간보다 클 수 없습니다.")
      nullCheck = false
    }

    if(nullCheck){
      postWorkTime()
    }
  }

  // 데이터 보내기
  const postWorkTime = async () => {
    await axios
      .post("http://localhost:8080/commute/insertCommute", manualData)
      .then((res) => {
        alert("등록되었습니다.")
      })
      .catch((err) => {
        alert("등록 실패 ")
        console.error({ error: err });
      });
  };

  const onChangeRecruit = (e) => {
    let time
    if(e.target.name === "start_time" || e.target.name === "end_time"){
      time = manual_date + " " + e.target.value
      setManualData({
        ...manualData,
        [e.target.name]: time
      })
    }
    else{
      setManualData({
        ...manualData,
        [e.target.name]: e.target.value
      })
    }
  };

  return (
    <div className="ManualWorkSession">
      <div className="ManualWorkMain">
        <div className="Main-title">근로자 출/퇴근 관리</div>
        <div className="SelectUserBar">
          <div className="select-worker">
            <div className="worker-select">
              <div className="worker-name">근로자명</div>
              <select
                className="select-manual-worker"
                onChange={onChangeRecruit}
                name='user_id'
              >
                <option value='' >선택</option>
                {userList.map((user) => (
                  <option key={user.user_id} value={user.user_id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="worker-select">
              <div className="worker-name">근로종류</div>
              <select
              className="select-manual-worker"
              onChange={onChangeRecruit}
              name="work_type_index"
            >
              <option value='' >선택</option>
              {workType.map((type) => (
                <option name = "work_type_index" key={type.work_type_index} value={type.work_type_index}>
                  {type.work_type_name}
                </option>
              ))}
            </select>
            </div>
          </div>

          <div className="selectWorkTime">
            <div className="manual-time">
              <div className="time-name">날짜</div>
              <input
                className="manual-date"
                name="manual_date"
                type="date"
                required
                onChange={(e) => setManual_date(e.target.value)}
              />
            </div>
            <div className="manual-time">
              <div className="time-name">출근시간</div>
              <input
                className="manual-date"
                name="start_time"
                form="H:mm"
                type="time"
                step="1800"
                required
                onChange={onChangeRecruit}
              />
              <div className="time-name">퇴근시간</div>
              <input
                className="manual-date"
                name="end_time"
                form="H:mm"
                type="time"
                step="1800"
                required
                onChange={onChangeRecruit}
              />
            </div>
          </div>
          <div className="manualBtn">
            <button className="manual-btn" onClick={postDataHandler}>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManualWorkSession;
