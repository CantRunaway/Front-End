import React,{useState} from 'react'
import {ModalCSS} from '../css/ModalCSS'
import '../css/access_restrictions.css'
import Modal from "react-modal";

Modal.setAppElement("#root");

function Access_Restrictions({permission}) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [pw, setPw] = useState('');

  const onChange=((e)=>{
    setPw(e.target.value);
  })
  
  const resetPW = () => {
    setPw('');
  }

  const handleModal = () => {
    permission(false);
    setIsOpen(false);
  }

  const comparePW = () => {
    if(pw === '1234'){
      handleModal();
    }
    else{
      alert('비밀번호가 틀렸습니다.');
    }
    resetPW();
  }

    return (
      <Modal 
        className='modal'
        isOpen={modalIsOpen}
        style={ModalCSS}
      >
        <div className='authority-main'>

          <div className='modal-pw-input' >
            비밀번호 <input type='password' onChange={onChange} value={pw}/>
          </div>

          <div>
            <button className='submit-button'  onClick={() => comparePW()} >확인</button>
          </div>

        </div>
      </Modal>

    );
}

export default Access_Restrictions;