import React,{useState} from 'react'
import '../css/UserInfoSession.css'
import Modal from "react-modal";

Modal.setAppElement("#root");

function UserInfoSession({permission}) {
  const [modalIsOpen, setIsOpen] = useState(true);

  const handleModal = () => {
    permission(false);
    setIsOpen(false);
  }

    return (
      <div className='authority-main'>
          <Modal isOpen={modalIsOpen}>

            <span>
              비밀번호 <input />
            </span>

            <span>
              <button className='submit-button' >확인</button>
            </span>

            <button onClick={() => handleModal()}>Close Modal</button>

         </Modal>
      </div>

    );
}

export default UserInfoSession;