import React, {useEffect, useState} from 'react';
import axios from 'axios';
import dayjs from "dayjs";
import '../css/Calender.css'
// const [selectYear, setSelectYear] = useState(day.get("year"))
// const [selectMonth, setSelectMonth] = useState(day.get("month")+1)
const Calender = ({selectYear, selectMonth}) => {
    
    const date = ['일', '월', '화', '수', '목', '금', '토']

    const startDate = dayjs(`${selectYear}-${selectMonth}-1`, "YYYY-MM-DD");
    const startDay = startDate.get('day');
    const endDay = startDate.daysInMonth();

    const dayNum = [];
    const dayCell = [];
    const weekCell = [];

    const [calenderData, setCalenderData] = useState([{}]);

    useEffect(()=>{
        postCalendaData()
    },[selectYear, selectMonth])

    // 각 일별 데이터
    const postCalendaData = async() => {
        await axios.post(`http://localhost:8080/stats/${sessionStorage.getItem('user_id')}`, {year:selectYear, month:selectMonth})
        .then((res) => {
            setCalenderData(res.data)
        })
        .catch((err) => {
            console.error({error:err})
        })
    }

    // 해당 달의 총 일자 매핑
    const setCellArr = () => {
        for(let i=1; i<=endDay; i++){
            dayNum[i] = i;
        }
    }

    // 해당 날짜의 일급과 시간 매핑
    function setDaycell(){
        let checkDate = dayjs(`${selectYear}-${selectMonth}`, "YYYY-MM")

        setCellArr();

        let count = 0; 
        let cellSize = 1;
        let workCount = 0;
        let len = calenderData.length;
        for(let i=0; i<6; i++){ // 주 
            for(let j=0; j<7; j++){ // 일
                // 42개의 달력 칸중에서 일자가 없는 칸
                if((count < startDay)||(endDay + startDay-1 < count)){
                    dayCell.push(
                        <span className={`cell-day-none`} key={count}></span>
                    )
                }
                else{
                    // 일 한 날
                    let day
                    if(workCount < len){
                        let dataDate = dayjs(`${calenderData[workCount].date}`, "YYYY-MM-DD")
                        day = dataDate.get('D')
                    }
                    
                    if(cellSize === day){
                        dayCell.push(
                            <span className={`cell-day-work`} key={count}>
                                {dayNum[cellSize]}
                                <span className='day-work-time'>{calenderData[workCount].hour}시간</span>
                                <span className='day-work-charge'>{calenderData[workCount].wage}원</span>
                            </span>
                        )
                        workCount++;
                    }
                    // 일 안한 날
                    else{
                        dayCell.push(
                            <span className={`cell-day`} key={count}>
                                {dayNum[cellSize]}
                            </span>
                        )
                    }
                    cellSize++;
                }
                count ++; 
            }
        }

        return(
            dayCell
        )

    }

    // 주 단위 색 표시를 위해서 주 단위로 다른 클래스 이름을 갖을 수 있게 매핑
    const setWeekCell = () => {

        setDaycell()

        for(let i=1, p=0; i<=6; i++){
            let temp = [];
            for(let j=0; j<7; j++, p++){
                temp.push(
                    dayCell[p]
                )
            }
            weekCell.push(
                <span className={`cell-week-${i}`} key={p}>
                    {temp}
                </span>
            )
        }

        return(
            weekCell
        )
    }
    
    return (
        <div className='calender-container'>
            {/* 상단 요일 찍어주는 부분 */}
            <div className='week-line'>
            {
                date.map((days, index) => (
                    <span className='week-line-content' key ={index}>{days}</span>
                ))
            }
            </div>
            {/* 내부 테이블 출력 부분 */}
            <div className='cell-content'>
                {setWeekCell()}
            </div>
        </div>
    );
};

export default Calender;