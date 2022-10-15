import React,{useState} from 'react'
import '../css/access_restrictions.css'

function AccessRestrictions({permission}) {
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

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      comparePW();
    }
  }

    return (
      <>
        {
          modalIsOpen ? 
            <div className='contents'>
              <div className='authority-main'>

                <div className='modal-pw-input' >
                  비밀번호 <input type='password' onChange={onChange} onKeyPress={onKeyPress} value={pw}/>
                </div>

                <div>
                  <button className='submit-button'  onClick={() => comparePW()} >확인</button>
                </div>

              </div>
          </div>

            : ''
        }
      </>


    );
}

export default AccessRestrictions;