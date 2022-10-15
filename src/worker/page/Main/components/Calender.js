import React, {useState} from 'react';
import dayjs from "dayjs";
import '../css/Calender.css'

const Calender = ({day}) => {
    
    const date = ['일', '월', '화', '수', '목', '금', '토']

    const startDate = dayjs(`${String(day.get('y'))}-${String(day.get('month')+1)}-1`, "YYYY-MM-DD");
    const startDay = startDate.get('day');
    const endDay = startDate.daysInMonth();

    const dayNum = [];
    const dayCell = [];
    const weekCell = [];


    const workCharge = 
    [
        {
            d:1, 
            charge:27480
        }, 
        {
            d:6, 
            charge:27480
        }
    ];

    const workTime = 
    [
        {
            d:1, 
            time:3
        }, 
        {
            d:6, 
            time:3
        }
    ];

    const setCellArr = () => {
        for(let i=1; i<=endDay; i++){
            dayNum[i] = i;
        }
    }

    function setDaycell(){
        
        setCellArr();

        let count = 0;
        let cellSize = 1;
        let workCount = 0;
        let len = workCharge.length;
        for(let i=0; i<6; i++){
            for(let j=0; j<7; j++){
                if((count < startDay-1)||(endDay+startDay-2 < count)){
                    dayCell.push(
                        <span className={`cell-day-none`} key={count}></span>
                    )
                }
                else{
                    if((workCount < len)&&(workCharge[workCount].d === cellSize)){
                        dayCell.push(
                            <span className={`cell-day-work`} key={count}>
                                {dayNum[cellSize]}
                                <span className='day-work-time'>{workTime[workCount].time}시간</span>
                                <span className='day-work-charge'>{workCharge[workCount].charge}원</span>
                            </span>
                        )
                        workCount++;
                    }
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
            <div className='week-line'>
            {
                date.map((days,index) => (
                    <span className='week-line-content'key ={index}>{days}</span>
                ))
            }
            </div>
            <div className='cell-content'>
                {setWeekCell()}
            </div>
        </div>
    );
};

export default Calender;