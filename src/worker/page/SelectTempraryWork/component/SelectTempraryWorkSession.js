import React, {useState} from 'react'
import TemporaryWorkSessionList from './TemporaryWorkSessionList';
import '../css/SelectTempraryWorkSession.css'
function SelectTempraryWorkSession(){

    const [checkData, setCheckData] = useState([])

    const [requistList, setRequistList] = useState(
        [
            {
                day:'2020-12-02',
                startTime: '11:30',
                endTime: '12:30',
                workType: '식기세척',
            },
            {
                day:'2020-12-05',
                startTime: '13:30',
                endTime: '12:30',
                workType: '식기세척',
            }
    ])

    const checkDataHandler = (e) => {
        let checkState = e.target.checked
        let index = e.target.value

        if(checkState){
            console.log("check")
            setCheckData([...checkData, requistList[index]])
        }
        else if(!checkState && checkData.includes(requistList[index])){
            console.log("unchecked")
            setCheckData(checkData.filter(el => el !== requistList[index]))
        }
        console.log(checkData)
        
    }

    return(
        <div className='worker-select-temporary-session-container'>
            <span className='worker-select-temporary-session-reaquist-list-title'>근로 모집 조회</span>
            <div className='worker-select-temporary-session-reaquist-list'>
                <TemporaryWorkSessionList
                    requistList={requistList}
                    checkDataHandler={checkDataHandler}
                />
            </div>

            <div className='worker-select-temporary-session-reaquist-button'>
                <button className='worker-select-temporary-session-reaquist-button'>추가 근로 신청</button>
            </div>
        </div>
    )
}

export default SelectTempraryWorkSession;