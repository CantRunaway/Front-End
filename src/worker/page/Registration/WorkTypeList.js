import './css/Registration.css'
import React, { useState , useEffect} from 'react'
import axios from "axios"

const WorkTypeList = () => {

    const [workTypes, setWorkTypes] = useState([]);
    const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);

    const handleSelected = (e) => {
      setSelectedWorkTypes(e.target.value);
      console.log(e.target.value);
    }

  useEffect(() => {
    if (workTypes === []) return;
      axios.get("http://localhost:8080/workType")
      .then((res) => {
        setWorkTypes(res.data);
      })
      .catch((err) => {
        throw err;
      })
   }, []);

   const workTypeList = workTypes.map((workType) => (
    <option
       key = {workType.work_type_index}
       value = {workType.work_type_index}
     > 
    {workType.work_type_name}
    </option>))

    return (
        <select className='registration-work-type-list' required onChange={handleSelected}>
            <option value='' >--선택--</option>
            {workTypeList}
          </select>
    )
}

export default WorkTypeList;