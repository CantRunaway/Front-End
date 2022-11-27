import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"; // 한국어적용
import ko from "date-fns/locale/ko"; // 한국어적용
import "react-datepicker/dist/react-datepicker.css";
import "../css/WorkManagementSession.css";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

function WorkManagementSession() {
  const [editDate, setEditDate] = useState({});
  const [newData, setNewData] = useState({
    work_type_name: "",
    change_date: "",
    wage: "",
  });
  const [hourlyWage, setHourlyWage] = useState();
  registerLocale("ko", ko);
  // 항목데이터
  const colums = ["근무종류", "변경일자", "시급"];

  //등록된 시급목록 받아오기
  const [typeData, setTypeData] = useState([]);

  const getTypeData = async () => {
    await axios
      .get("http://localhost:8080/wage")
      .then((res) => {
        setTypeData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error({ error: err });
      });
  };

  //근로종류 받아오기
  const [workType, setWorkType] = useState([]);
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

  useEffect(() => {
    getTypeData();
    getWorkType();
  }, []);

  const Wage = (e) => {
    setHourlyWage(e.target.value);
  };

  const plusClicked = async () => {
    await axios
      .post("http://localhost:8080/wage", plusWage)
      .then((res) => {
        alert("추가되었습니다.");
        setPlusWage({
          work_type_name: "",
          change_date: "",
          wage: "",
        });
      })
      .catch((err) => {
        alert("데이터 전송에 실패했습니다.");
        console.log(err);
      });
  };

  //등록된 시급 데이터 삭제
  const workTypeDelete = async () => {
    // await axios.post(, checkData)
    // .then((res) => {
    //   console.log(checkData);
    //   alert("삭제")
    //   getTypeData();
    // })
    // .catch((err) => {
    //   console.error({error: err});
    //   alert("삭제 실패")
    // })
  };

  // 보낼 데이터 담기
  const [plusWage, setPlusWage] = useState({
    work_type_name: "",
    change_date: "",
    wage: "",
  });

  const plusTemporalData = (e) => {
    console.log(e.target.value);
    setPlusWage({
      ...plusWage,
      [e.work_type_name]: e.target.value,
    });
    console.log(plusWage);
  };

  const plusWageClicked = async () => {
    console.log("hello world");
  };

  const plusWageTemporalData = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setNewData({
      ...newData,
      change_date: editDate,
    })
  }, [editDate])

  console.log(newData);
  //삭제할 데이터 담김
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

  function workTypeTable() {
    return (
      <table>
        <thead>
          <tr>
            <th className="workTypetbody"></th>
            {colums.map((col, idx) => (
              <th className="table_header" key={idx}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody id="test" className="workTypetbody">
          {typeData.map((types, id) => (
            <tr key={id}>
              <td>
                <input
                  className="types-list"
                  value={types.work_type_name}
                  type="checkbox"
                  onChange={(e) => singleChecked(e, id, e.target.value)}
                />
              </td>
              <td className="worktype_items">{types.work_type_name}</td>
              <td className="worktype_items">{types.change_date}</td>
              <td className="worktype_items">{types.hour_wage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="WorkManagementSession">
      <div className="WorkManagementMain">
        <div className="WorkMngMain-title">근로 항목 및 시급 관리</div>
        <div className="workTypeList">
          <div className="workTypeTable">{workTypeTable()}</div>
          <button
            className="workTypeDelete_btn"
            onClick={() => workTypeDelete()}
          >
            삭제
          </button>
        </div>
        <div className="workTypePlus">
          <select className="temporal_select" onChange={plusTemporalData}>
            {workType.map((type) => (
              <option key={type.work_type_index} value={type.work_type_name}>
                {type.work_type_name}
              </option>
            ))}
          </select>
          <input
            className="temporary-date"
            type="date"
            required
            onChange={(e)=>{
                setEditDate(e.target.value)
                console.log(e.target.value)
                console.log(editDate)
            }}
          />
          <input
            className="amount"
            type="text"
            placeholder="0"
            value={hourlyWage}
            onChange={Wage}
          ></input>
          <div className="amuont_won">원</div>
          <button className="workplus_btn" onClick={() => plusWageClicked()}>
            시급 추가
          </button>
        </div>

        <div className="workTypePlus">
          <input
            className="amount_won"
            type="text"
            name="work_type_name"
            onChange={plusWageTemporalData}
            required
          ></input>
          <input
            className="temporary-date"
            name="change_date"
            type="date"
            required
            onChange={(e)=>{
                setEditDate(e.target.value)
                console.log(e.target.value)
            }}
          />
          <input
            className="amount"
            type="text"
            placeholder="0"
            value={hourlyWage}
            name="wage"
            onChange={plusWageTemporalData}
            required
          ></input>
          <div className="amuont_won">원</div>
          <button className="workplus_btn" onClick={() => plusClicked()}>
            근로 추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkManagementSession;
