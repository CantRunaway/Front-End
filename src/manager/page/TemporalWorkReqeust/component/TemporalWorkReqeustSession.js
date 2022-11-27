import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/TemporalWorkReqeustSession.css'

function TemporalWorkReqeustSession() {
    const [temporalData, setTemporalData] = useState([]);

    const getTemporalData = async() => {
      await axios.get("http://localhost:8080/overtime")
      .then((res) => {
        setTemporalData(res.data);
        console.log(temporalData);
      })
      .catch((err) => {
        console.error({error: err});
      })
    }

    useEffect(() => {
      getTemporalData();
      getAbsenceData();
    }, [])
      const [absenceData, setAbsenceData] = useState([]);

      const getAbsenceData = async () => {
        await axios.get("http://localhost:8080/absence")
        .then((res) => {
          setAbsenceData(res.data);
        })
        .catch((err) => {
          console.log({error:err})
        })
      }

      // console.log(temporalData);
      // console.log(absenceData);

      function temporalList () {
        return(
          temporalData.map((data) => (
            <div className="temporalworker_element">
              <input type="checkbox"/>
              <div className="element_item">{data.name}</div>
              <div className="element_item">{data.over_start}</div>
              <div className="element_item">{data.over_end}</div>
              <div className="element_item">{data.work_type_name}</div>
            </div>
          ))
        )
      }

      function absenceList () {
        return(
          absenceData.map((data) => (
            <div className="temporalworker_element">
              <input type="checkbox"/>
              <div className="element_item">{data.name}</div>
              <div className="element_item">{data.absence_start}</div>
              <div className="element_item">{data.absence_end}</div>
              <div className="element_item">{data.work_type_name}</div>
            </div>
          ))
        )
      }

      const temApprovalClicked = async() => {
        await axios.post("http://localhost:8080/overtime",)
        .then((res) => {
          setTemporalData(res.data);
          alert("승인되었습니다.");
        })
        .catch((err) => {
          console.log({error:err})
        })
      }
    
      const temRefuseClicked = async() => {
        await axios.post("http://localhost:8080/overtime",)
        .then((res) => {
          setTemporalData(res.data);
          alert("거부되었습니다.");
        })
        .catch((err) => {
          console.log({error:err})
        })
      }
    
      const absApprovalClicked = async() => {
        await axios.post("http://localhost:8080/absence/",)
        .then((res) => {
          setAbsenceData(res.data);
          alert("승인되었습니다.");
        })
        .catch((err) => {
          console.log({error:err})
        })
      }
  
      const absRefuseClicked = async() => {
        await axios.post("http://localhost:8080/overtime/",)
        .then((res) => {
          setAbsenceData(res.data);
          alert("거부되었습니다.");
        })
        .catch((err) => {
          console.log({error:err})
        })
      }
    
  return (
    <div className='TemporalWorkReqeustSession'>
      <div className='TemporalWorkReqeustMain'>
      <div className='temporalworker_temporal'>
        <div className='temporalworker_element_title'>
          임시 근로
        </div>
        <div className='temporalworker_contents'>
            {temporalList()}
          <div className='temporal_button'>
            <button className='temporal_btn' onClick={() => temApprovalClicked()}>승인</button>
            <button className='temporal_btn' onClick={() => temRefuseClicked()}>거부</button>
          </div>
        </div>
        
      </div>
      <div className='temporalworker_absence'>
        <div className='temporalworker_element_title'>
            결근
        </div>
        <div className='temporalworker_contents'>
            {absenceList()}
          <div className='temporal_button'>
            <button className='temporal_btn' onClick={() => absApprovalClicked()}>승인</button>
            <button className='temporal_btn' onClick={() => absRefuseClicked()}>거부</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TemporalWorkReqeustSession