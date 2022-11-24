import React, { useEffect, useState } from 'react'
import '../css/ManagerMainSession.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function ManagerMainSession() {
  const [worker, setWorker] = useState([])

  const getWorker = async() => {
    await axios.get("http://localhost:8080/work")
    .then((res) => {
      setWorker(res.data);
    })
    .catch((err) => {
      console.error({error: err});
    })
  }

  useEffect(() => {
    getWorker();
  }, []);

  function currentList () {
    return(
      worker.map((data, index) => 
      <div key={index} className='main_worker_element'>
        <div className='main_elements'>{data.name}</div>
        <div className='main_elements'>{data.user_id}</div>
        <div className='main_elements'>{data.start_time}</div>
        <div className='main_elements'>{data.work_type_name}</div>
      </div>
    ))
  }

  function requestList () {
    return(
      worker.map((data, index) => 
      <div key={index} className='main_worker_element'>
        <div className='main_elements'>{data.name}</div>
        <div className='main_elements'>{data.user_id}</div>
        <div className='main_elements'>{data.start_time}</div>
        <div className='main_elements'>{data.work_type_name}</div>
      </div>
    ))
  }

  return (
    <div className='ManagerMainSession'>
      <div className='ManagerMain'>
        <div className='main_element'>
          <div className='main_element_title'>
            현재 근로자
          </div>
          {currentList()}
        </div>
        <NavLink to="/temporalworkrequest">
          <div className='main_element'>
            <div className='main_element_title'>
              임시 근로 요청
            </div>
            {requestList()}
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default ManagerMainSession