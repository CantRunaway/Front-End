import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserNameList(classSchedule, setClassSchedule) {
    const [userList, setUserList] = useState([]);

    const getUserName = async() => {
        await axios.get("http://localhost:8080/users/workList")
        .then((res) => {
            setUserList(res.data);
        })
        .catch((err) => {
            console.error({error:err});
        })
    }

    useEffect(() => {
        getUserName()
    }, [])

    const onChangeUser = (e) => (
        setClassSchedule()
    )

    console.log(userList);
    console.log(classSchedule);

  return (
    <select
        className='selectWorker'
        onChange={onChangeUser}>
        {userList.map((user) => (
            <option
                key={user.user_id}
                name="user_id"
                value={user.user_id}
            >
            {user.name}
            </option>
        ))}
    </select>
  )
}

export default UserNameList