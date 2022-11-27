import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserNameList() {
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

    const userName = userList.map((user) => (
        <option value={user.user_id} key = {user.name}>{user.name}</option>
    ));
  return (
    <select className='selectWorker'>
        {userName}
    </select>
  )
}

export default UserNameList