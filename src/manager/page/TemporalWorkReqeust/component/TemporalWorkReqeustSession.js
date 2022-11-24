import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/TemporalWorkReqeustSession.css'

function TemporalWorkReqeustSession() {
    // const temporalData = [
    //     {
    //       username : '이마크',
    //       userNum : 20180802,
    //       workTime : '13:30 - 15: 30',
    //       workType : '식기세척'
    //     },
    //     {
    //       username : '종천러',
    //       userNum : 20201122,
    //       workTime : '12:30 - 14: 30',
    //       workType : '식기세척'
    //     },
    //     {
    //       username : '박지성',
    //       userNum : 20210205,
    //       workTime : '12:30 - 14: 30',
    //       workType : '식기세척'
    //     }
    //   ];

    const [temporalData, setTemporalData] = useState([]);

    const getTemporalData = async() => {
      await axios.get("http://localhost:8080/overtime")
      .then((res) => {
        setTemporalData(res.data);
      })
      .catch((err) => {
        console.error({error: err});
      })
    }

    

    useEffect(() => {
      getTemporalData();
      getAbsenceData();
    }, [])
      // const absenceData = [
      //   {
      //     username : '황인준',
      //     userNum : 20190323,
      //     workTime : '11:00-13:00',
      //     workType : '식기세척'
      //   },
      //   {
      //     username : '이제노',
      //     userNum : 20190423,
      //     workTime : '12:00-14:00',
      //     workType : '식기세척'
      //   },
      //   {
      //     username : '이해찬',
      //     userNum : 20190606,
      //     workTime : '16:00-18:00',
      //     workType : '식기세척'
      //   },
      //   {
      //     username : '나재민',
      //     userNum : 20190813,
      //     workTime : '17:00-19:00',
      //     workType : '식기세척'
      //   }
      // ];
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
            <div>
              <input type="checkbox"/>
              <div>{data.name}</div>
              <div>{data.name}</div>
              <div>{data.name}</div>
              <div>{data.name}</div>
            </div>
          ))
        )
      }

      function absenceList () {
        return(
          absenceData.map((data) => (
            <div>
              <input type="checkbox"/>
              <div>{data.name}</div>
            </div>
          ))
        )
      }
      const ApprovalClicked = () => {
        alert("승인되었습니다.");
      }
    
      const RefuseClicked = () => {
        alert("거부되었습니다.");
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
            <button className='temporal_btn' onClick={() => ApprovalClicked()}>승인</button>
            <button className='temporal_btn' onClick={() => RefuseClicked()}>거부</button>
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
            <button className='temporal_btn' onClick={() => ApprovalClicked()}>승인</button>
            <button className='temporal_btn' onClick={() => RefuseClicked()}>거부</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TemporalWorkReqeustSession