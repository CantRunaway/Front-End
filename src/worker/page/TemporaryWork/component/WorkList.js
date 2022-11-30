import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/WorkList.css'

const WorkList = ({selectDate, setCheckData, checkData}) => {
    const [workData, setWorkData] = useState([])

    useEffect(() => {
        getWorkTableData()
    }, [])

    // 근로 데이터
    const getWorkTableData = async() => {
        await axios.get(`http://localhost:8080/work/${sessionStorage.user_id}`)
        .then((res) => {
            setWorkData(res.data)
        })
        .catch((err) => {
          console.error("error: " + {error: err} )
        })
    }


    // 모집 신청 데이터 핸들러
    const checkDataHandler = (e) => {
        let checkState = e.target.checked
        let index = e.target.value

        if(checkState){
            setCheckData([...checkData, workData[index]])
        }
        else if(!checkState && checkData.includes(workData[index])){
            setCheckData(checkData.filter(el => el !== workData[index]))
        }
    }

    return(
        <ul>
            {
                selectDate ?
                workData.map((value, index) => (
                    <ul  key={index}>
                        <label className='worker-temporary-session-work-list'>
                            <input type='checkbox' value={index} onClick={checkDataHandler}></input>
                            <li>
                                <span>{selectDate}</span>
                                <span>{value.day}</span>
                                <span>{value.time}</span>
                            </li>
                        </label>
                    </ul>
                ))
                :
                ''
            }
        </ul>
    )
}

export default WorkList