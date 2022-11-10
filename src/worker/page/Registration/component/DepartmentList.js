import { useEffect, useState } from 'react';
import '../css/Registration.css'
import axios from "axios"

const DepartmentList = ({selectDepartments, setSelectDepartments}) => {
    const [departments, setDepartments] = useState([]);

    const handleSelected = (e) => {
      setSelectDepartments(e.target.value);
      console.log(e.target.value);
    }

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
    </option>))

    return (
        <select className='registration-work-type-list' required onChange={handleSelected}>
            <option value='' >--선택--</option>
            {departmentLists}
          </select>
    )
}

export default DepartmentList;