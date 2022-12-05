import axios from 'axios';
import { setYear } from 'date-fns';
import React, {useEffect, useState} from 'react'
import '../css/TotalSession.css'

const xlsx = require('xlsx');

function TotalSession() {

  const colums = ['이름', '학번', '근무종류', '기간', '시급', '총 장학금액'];
  const worklistData = [
    {
      name : '이마크',
      num : 20180802,
      workPeriod: '2022. 02. 26 - 2022. 06. 24',
      workWage : 11450,
      workType : '운반',
      totalAmount : 274880
    },
    {
      name : '종천러',
      num : 20201122,
      workPeriod: '2022. 02. 26 - 2022. 06. 24',
      workWage : 9160,
      workType : '식기세척',
      totalAmount : 274880
    },
    {
      name : '박지성',
      num : 20210205,
      workPeriod: '2022. 02. 26 - 2022. 06. 24',
      workWage : 9160,
      workType : '식기세척',
      totalAmount : 274880
    },
    {
      name : '황인준',
      num : 20190323,
      workPeriod: '2022. 02. 26 - 2022. 06. 24',
      workWage : 9160,
      workType : '식기세척',
      totalAmount : 274880
    },
    {
      name : '이제노',
      num : 20190423,
      workPeriod: '2022. 02. 26 - 2022. 06. 24',
      workWage : 9160,
      workType : '식기세척',
      totalAmount : 274880
    },
    {
      name : '이해찬',
      num : 20190606,
      workPeriod: '2022. 02. 26 - 2022. 06. 24',
      workWage : 9160,
      workType : '식기세척',
      totalAmount : 274880
    },
    {
      name : '나재민',
      num : 20190813,
      workPeriod: '2022. 02. 26 - 2022. 06. 24',
      workWage : 9160,
      workType : '식기세척',
      totalAmount : 274880
    }
  ];

  

  const TotalCheck = () => {
    console.log("조회")
  }

  function totalWorker() {
    return(
      // <table className='totalTable'>
      //   <thead>
      //     <tr>
      //       {colums.map((col) => (
      //         <th className='workerlistTable_header' key={col}>{col}</th>
      //       ))}
      //     </tr>
      //   </thead>
      //   <tbody>
      //         {worklistData.map(({name, num, workType, workPeriod, workWage, totalAmount}) => (
      //           <tr key={num}>
      //             <td className='totallist_items'>{name}</td>
      //             <td className='totallist_items'>{num}</td>
      //             <td className='totallist_items'>{workType}</td>
      //             <td className='totallist_items'>{workPeriod}</td>
      //             <td className='totallist_items'>{workWage}</td>
      //             <td className='totallist_items'>{totalAmount}</td>
      //           </tr>
      //         ))}
      //   </tbody>
      // </table>
      <button onClick={excel}>조회</button>
    )
  }
  const excel = async() => {
    await axios.get("http://localhost:8080/stats/excel")
    .then((res) => {
      console.log(res.data);
      makeExcelByMonth(res.data[0], res.data[1]);
    })
    .catch((err) => {
      console.error({error:err});
    })
  }
  const [statusDate, setStatusDate] = useState([
    {
      year: "",
      month: "",
    }
  ]);

  // console.log(statusDate);

  const makeExcelByMonth = (data, data2) => {
    
    const filePath = '달별 개인별.xlsx';
    // if (fs.existsSync(filePath)) {
    //     fs.unlinkSync(filePath);
    // }

    const EXCEL = xlsx.utils.book_new();

    const EXCEL_CONTENT1 = xlsx.utils.json_to_sheet(data[0]);
    const EXCEL_CONTENT2 = xlsx.utils.json_to_sheet(data2[0]);

    xlsx.utils.book_append_sheet(EXCEL, EXCEL_CONTENT1, `달별`);
    xlsx.utils.book_append_sheet(EXCEL, EXCEL_CONTENT2, `개인별`);

    xlsx.writeFile(EXCEL, filePath);
    console.log("엑셀 변환 완료");
}
  return (
    <div className='TotalSession'>
      <div className='TotalMain'>
        <div className='TotalSearchBar'>
          <input
            type="month"
            format="YYYY-MM"
            required
            onChange={(e) => {
              setStatusDate({
                year: (e.target.value).slice(0, 4),
                month: (e.target.value).slice(5, 7),
              })
            }}
          />
          <button className='totalSearch_btn' onClick={() => TotalCheck()}>조회</button>
        </div>
        <div className='TotalWorkerList'>
          {totalWorker()}
        </div>
      </div>
    </div>
  )
}

export default TotalSession