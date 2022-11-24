import React, { useEffect } from 'react'
import './css/NotFoundPage.css'

function NotFoundPage() {

  useEffect(()=>{
    if(sessionStorage.getItem("user_id") === null){
      goBack()
    }
    else{
      goMain()
    }
    console.log("not found page")
  },[])

  
  const goBack = () => {
    const link_url = "/";
    sessionStorage.removeItem('user_id')
    window.location.replace(link_url);
  }

  const goMain = () => {
    const link_url = "/main";
    window.location.replace(link_url);
  } 

  return (
    <div className='NotFoundPage'>

    </div>
  )
}

export default NotFoundPage