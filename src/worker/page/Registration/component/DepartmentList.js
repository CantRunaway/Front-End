import { useEffect, useState } from 'react';
import '../css/Registration.css'
import axios from "axios"

const DepartmentList = ({onChangeUser, userMajor}) => {
  const [departments, setDepartments] = useState([]);
  const [value, setValue] = useState(userMajor)

  useEffect(() => {
    if (departments === []) return;

    axios.get("http://localhost:8080/department")
    .then((res) => {
      setDepartments(res.data);
    })
    .catch((err) => {
      throw err;
    })

   }, []);

   const departmentLists = departments.map((workType) => (
    <option
       key = {workType.department_index}
       value = {workType.department_index}
     > 
    {workType.department_name}
    </option>
    ))

    return (
        <select className='registration-work-type-list' name='major' required onChange={onChangeUser} value={value}>
          <option value='' >--선택--</option>
            {departmentLists}
          </select>
    )
}

export default DepartmentList;