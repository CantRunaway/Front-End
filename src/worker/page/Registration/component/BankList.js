import { useEffect, useState } from 'react';
import '../css/Registration.css'
import axios from "axios"

const BankList = ({onChangeUser, bank_name}) => {
  const [banks, setBanks] = useState([]);
  const [value, setValue] = useState(bank_name)

  useEffect(() => {
    if (banks === []) return;
      axios.get("http://localhost:8080/bank")
      .then((res) => {
        setBanks(res.data);
      })
      .catch((err) => {
        throw err;
      })
   }, []);

   const bankList = banks.map((bank) => (
    <option
       key = {bank.bank_index}
       value = {bank.bank_index}
     > 
    {bank.bank_name}
    </option>))

    return (
      <select className='registration-bank-list' required name='bank_name' onChange={onChangeUser} value={value}>
              <option value='' >--선택--</option>
              {bankList}
      </select>
    );
}

export default BankList;