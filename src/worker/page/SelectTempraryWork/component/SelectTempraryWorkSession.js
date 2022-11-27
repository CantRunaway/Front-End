import React, {useState, useEffect} from 'react'
import TemporaryWorkSessionList from './TemporaryWorkSessionList';
import '../css/SelectTempraryWorkSession.css'
import axios from 'axios';
function SelectTempraryWorkSession(){

    const [checkData, setCheckData] = useState([])
    const [reqeustList, setReqeustList] = useState([])

    //모집 데이터 받아오기 (O)
    const getRecruitdata = async () => {
        await axios.get("http://localhost:8080/recruit")
        .then((res) => {
            setReqeustList(res.data);
        })
        .catch((err) => {
            console.error({error: err})
        })
        console.log(reqeustList);
    }

    useEffect(() => {
        getRecruitdata();
    }, [])

    const checkDataHandler = (e) => {
        let checkState = e.target.checked
        let index = e.target.value

        if(checkState){
            console.log("check")
            setCheckData([...checkData, reqeustList[index]])
        }
        else if(!checkState && checkData.includes(reqeustList[index])){
            console.log("unchecked")
            setCheckData(checkData.filter(el => el !== reqeustList[index]))
        }
        console.log(checkData)
    }

    //추가 근로 모집 신청 
    const reqRecruit = async() => {
        await axios.post("http://localhost:8080/recruit", checkData)
        .then((res) => {
            console.log(res);
            alert("추가 근로 신청 완료")
        })
        .catch((err) => {
            console.log({error:err})
            alert("추가 근로 신청 실패")
        })

    }

    return(
        <div className='worker-select-temporary-session-container'>
            <span className='worker-select-temporary-session-reaquist-list-title'>근로 모집 조회</span>
            <div className='worker-select-temporary-session-reaquist-list'>
                <TemporaryWorkSessionList
                    reqeustList={reqeustList}
                    checkDataHandler={checkDataHandler}
                />
            </div>

            <div className='worker-select-temporary-session-reaquist-button'>
                <button className='worker-select-temporary-session-reaquist-button'
                        onClick={reqRecruit}>추가 근로 신청</button>
            </div>
        </div>
    )
}

export default SelectTempraryWorkSession;