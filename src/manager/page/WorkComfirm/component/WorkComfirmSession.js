import React, { useState, useEffect } from "react";
import "../css/WorkComfirmSession.css";
import axios from "axios";

function WorkComfirmSession() {
  const colums = ["근무 일자", "근무 시간", "근로 장학 금액"]; // 항목데이터
  const [userList, setUserList] = useState([]); //근로자 이름 목록 받아오기
  const [userData, setUserData] = useState(); //선택된 근로자의 아이디값 받기
  const [statusInfo, setStatusInfo] = useState([]); //선택된 년도와 월

  console.log(statusInfo);

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

  //유저선택해서 가져온 통계 데이터
  const [workerStatusList, setWorkerStausList] = useState([]);

  //해당 근무자의 총 근로시간과 금액
  const getWorkerStatus = async () => {
    await axios
      .get(
        `http://localhost:8080/stats/${statusInfo.year}/${statusInfo.month}/${userData}`
      )
      .then((res) => {
        // alert("조회");
        console.log(res.data);
        setWorkerStausList(res.data);
        postWorkerStatus();
      })
      .catch((err) => {
        console.err({ error: err });
        alert("조회실패");
      });
  };

  console.log(workerStatusList);

  //테이블에 담을 통계 데이터
  const [statusList, setStatusList] = useState([]);

  const postWorkerStatus = async() => {
    await axios.post(`http://localhost:8080/stats/${userData}`, statusInfo)
    .then((res) => {
      setStatusList(res.data);
    })
    .catch((err) => {
      console.err({ error: err });
    })
  }

  console.log(statusList);

  function workerComfirmTable() {
    return(
      <table className="comfirmList-table">
        <thead className="comfirmListTable-header">
          <tr>
            {colums.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody id="test" className="workComfirmTable-body">
          {statusList.map((status, id) => (
            <tr key={id}>
              <td className="status_items">{status.date}</td>
              <td className="status_items">{status.hour}</td>
              <td className="status_items">{status.wage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className="WorkComfirmSession">
      <div className="WorkComfirmMain">
        <div className="Main-title">근무자별 근무 확인</div>
        <div className="workerSearch">
          <select className="search_worker" onChange={setUserDataHandler}>
            {userList.map((user) => (
              <option key={user.user_id} value={user.user_id}>
                {user.name}
              </option>
            ))}
          </select>
          <input
            className="status-date"
            type="month"
            format="YYYY-MM"
            required
            onChange={(e) => {
              setStatusInfo({
                ...statusInfo,
                year: e.target.value.slice(0, 4),
                month: e.target.value.slice(5, 7),
              });
            }}
          />
          <button className="search_btn" onClick={getWorkerStatus}>
            조회
          </button>
        </div>
          <div className="workerComfirmList">
            <div className="comfirmListTable">
              {workerComfirmTable()}
            </div>
          </div>
          <div className="statusWorkerTotal">
            {workerStatusList.map((status) => (
            <div className="workerComfirmTotal">
              <div className="workerTotal">총 근로 시간 {status.hour} 시간</div>
              <div className="workerTotal">총 근로장학금액 {status.wage} 원</div>
            </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default WorkComfirmSession;
