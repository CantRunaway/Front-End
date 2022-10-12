import React,{useState} from 'react'
import modalCSS from '../css/Access_Restrictions'
import Modal from "react-modal";

Modal.setAppElement("#root");

function Access_Restrictions({permission}) {
  const [modalIsOpen, setIsOpen] = useState(true);

  const handleModal = () => {
    permission(false);
    setIsOpen(false);
  }

    return (
      <div className='authority-main'>
          <Modal 
            isOpen={modalIsOpen}
            style={modalCSS}
          >

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

export default Access_Restrictions;