import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/TotalSession.css";
const xlsx = require("xlsx");

function TotalSession() {
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

  console.log(userData);

  //선택한 근로자의 아이디값 가져오기
  const setUserDataHandler = (e) => {
    setUserData(e.target.value);
  };

  const [workerStatusDate, setWorkerStatusDate] = useState([]); //근로자 선택시 월별정보
  const [monthStatusDate, setMonthStatusDate] = useState([]); //월별 선택시 정보

  console.log(workerStatusDate);
  console.log(monthStatusDate);

  const makeExcelByMonth = (data, dataname) => {
    const filePath = `${dataname}.xlsx`;
    const EXCEL = xlsx.utils.book_new();
    const EXCEL_CONTENT1 = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(EXCEL, EXCEL_CONTENT1, `${dataname}`);

    xlsx.writeFile(EXCEL, filePath);
    console.log("엑셀 변환 완료");
  };

  const downWorkerStatus = async() => {
    await axios
    .get(`http://localhost:8080/stats/excel/${userData}/${workerStatusDate.year}/${workerStatusDate.month}`)
    .then((res) => {
      console.log(res.data);
      const name = `${userData}의 ${workerStatusDate.year}년 ${workerStatusDate.month}월 근로`;
      makeExcelByMonth(res.data, name)
    })
    .catch((err) => {
      console.err({error: err});
    })
  }

  const monthStatus = async() => {
    await axios
    .put(`http://localhost:8080/stats/excel/${monthStatusDate.year}/${monthStatusDate.month}`)
    .then((res) => {
      console.log(res.data);
      const name = `${monthStatusDate.year}년 ${monthStatusDate.month}월 근로 통계`;
      makeExcelByMonth(res.data, name)
    })
    .catch((err) => {
      console.err({error: err});
    })
  }

  return (
    <div className="TotalSession">
      <div className="TotalMain">
        <div className="Main-title">근로 통계 Excel 다운로드</div>
        <div className="Worker-Status">
          <div className="status-title">근무자별 통계 Excel</div>
          <select
            className="worker-status-select"
            onChange={setUserDataHandler}
          >
            {userList.map((user) => (
              <option key={user.user_id} value={user.user_id}>
                {user.name}
              </option>
            ))}
          </select>
          <input
            className="month-status-select"
            type="month"
            format="YYYY-MM"
            required
            onChange={(e) => {
              setWorkerStatusDate({
                year: e.target.value.slice(0, 4),
                month: e.target.value.slice(5, 7),
              });
            }}
          />
          <button
            className="download"
            onClick={downWorkerStatus}>다운로드</button>
        </div>

        <div className="Month-Status">
          <div className="status-title">월별 통계 Excel</div>
          <input
            className="month-status-select"
            type="month"
            format="YYYY-MM"
            required
            onChange={(e) => {
              setMonthStatusDate({
                year: e.target.value.slice(0, 4),
                month: e.target.value.slice(5, 7),
              });
            }}
          />
          <button
            className="download"
            onClick={monthStatus}>다운로드</button>
        </div>
      </div>
    </div>
  );
}

export default TotalSession;
