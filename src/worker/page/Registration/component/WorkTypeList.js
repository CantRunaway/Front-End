import '../css/Registration.css'
import React, { useState , useEffect} from 'react'
import axios from "axios"

const WorkTypeList = ({work_type_name, onChangeUser}) => {

  const [workTypes, setWorkTypes] = useState([]);
  const [workTypevalue, setWorkTypevalue] = useState(work_type_name)

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
        <select className='registration-work-type-list' required name='work_type_name' onChange={onChangeUser} value={workTypevalue}>
            <option value='' >--선택--</option>
            {workTypeList}
          </select>
    )
}

export default WorkTypeList;