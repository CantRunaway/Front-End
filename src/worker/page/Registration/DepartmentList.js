import { useEffect, useState } from 'react';
import './css/Registration.css'
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

   const departmentList = departments.map((department) => (
   <option
      key = {department.department_index}
      value = {department.department_index}
    > 
   {department.department_name}
   </option>))
    return (
        <select onChange={handleSelected} required>
          <option value='' >--선택--</option>
            {departmentList}
        </select>
    );
}

export default DepartmentList;