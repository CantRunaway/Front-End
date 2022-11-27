import React, {useState} from 'react'
import axios from 'axios'
import '../css/EducationScheduleEnrollSession.css'
import ScheduleTable from './ScheduleTable'

function EducationScheduleEnrollSession({isClassSchedule, workerSchedule, setWorkerSchedule}) {
  const [postData, setPostData] = useState([])
  
  const postScheduleData = async() => {
    await axios.get(`http://localhost:8080/work/${sessionStorage.user_id}`)
    .then((res) => {
        alert("수정")
    })
    .catch((err) => {
      console.error("error: " + {error: err} )
    })
  }

  return (
    <div className='schedule-table-box'>

      <div className='schedule-table'>
        <ScheduleTable 
          isClassSchedule={isClassSchedule}
          setPostData={setPostData}
        />
      </div>

      <button className='schedule-table-sendButton' onClick={postScheduleData}>
        수정
      </button>
  </div>
  )
}

export default EducationScheduleEnrollSession