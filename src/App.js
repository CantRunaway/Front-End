import './App.css';
import {Routes, Route} from 'react-router-dom';
import LoginPage from '../src/user/page/Login/LoginPage';
import SignupPage from '../src/user/page/Signup/SignupPage';
import UserInfoPage from '../src/worker/page/UserInfo/UserInfoPage';
import ScheuleEnrollPage from '../src/worker/page/ScheduleEnroll/ScheduleEnrollPage';
import ManagerMainPage from '../src/manager/page/Main/ManagerMainPage';
import UserApprovalPage from '../src/manager/page/UserApproval/UserApprovalPage';
import ScheduleManagementPage from '../src/manager/page/ScheduleManagement/ScheduleManagementPage';
import NotFoundPage from '../src/etc/components/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/:username/info' element={<UserInfoPage/>}/>
      <Route path='/:username/scheduleenroll' element={<ScheuleEnrollPage/>}/>
      <Route path='/managermain' element={<ManagerMainPage/>}/>
      <Route path='/userapproval' element={<UserApprovalPage/>}/>
      <Route path='/schedulemng' element={<ScheduleManagementPage/>}/>
      <Route path='/notfound' element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
