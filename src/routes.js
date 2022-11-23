import React from 'react';
import LoginPage from '../src/user/page/Login/LoginPage';
import SignupPage from '../src/user/page/Signup/SignupPage';
import UserInfoPage from '../src/worker/page/UserInfo/UserInfoPage';
import WorkerMainPage from './worker/page/Main/WorkerMainPage';
import ScheuleEnrollPage from '../src/worker/page/ScheduleEnroll/ScheduleEnrollPage';
import ManagerMainPage from '../src/manager/page/Main/ManagerMainPage';
import WorkerListPage from './manager/page/WorkerList/WorkerListPage';
import UserApprovalPage from '../src/manager/page/UserApproval/UserApprovalPage';
import TemporalManagementPage from './manager/page/TemporalManagement/TemporalManagementPage';
import TemporalWorkReqeustPage from './manager/page/TemporalWorkReqeust/TemporalWorkReqeustPage';
import WorkManagementPage from './manager/page/WorkManagement/WorkManagementPage';
import WorkComfirmPage from './manager/page/WorkComfirm/WorkComfirmPage';
import ScheduleManagementPage from '../src/manager/page/ScheduleManagement/ScheduleManagementPage';
import TotalPage from './manager/page/Total/TotalPage';
import Registration from './worker/page/Registration/Registration';
import NotFoundPage from '../src/etc/NotFoundPage'
import WorkerSchedule from './worker/page/WorkSchedule/WorkerSchedule';
import ScheduleEnrollManagerPage from './manager/page/ScheduleEnrollManager/ScheduleEnrollManagerPage';
import TemporaryWork from './worker/page/TemporaryWork/TemporaryWork';
import SelectTempraryWork from './worker/page/SelectTempraryWork/SelectTempraryWork';

    const route = 
    [
        {
            path:'/',
            element: <LoginPage />
        },
        {
            path:'/login',
            element: <LoginPage />
        },
        {
            path:'/signup',
            element: <SignupPage />
        },
        {
            path:'/Registration',
            element: <Registration />
        },
        {
            path:'/:username/info',
            element: <UserInfoPage />
        },
        {
            path:'/:username/main',
            element: <WorkerMainPage />
        },
        {
            path:'/:username/scheduleEnroll',
            element: <ScheuleEnrollPage />
        },
        {
            path:'/:username/workerSchedule',
            element: <WorkerSchedule/>
        },
        {
            path:'/:username/SelectTempraryWork',
            element: <SelectTempraryWork />
        },
        {
            path:'/:username/TemporaryWork',
            element: <TemporaryWork />
        },
        {
            path:'/scheduleenrollmng',
            element: <ScheduleEnrollManagerPage />
        },
        {
            path:'/schedulemng',
            element: <ScheduleManagementPage />
        },
        {
            path:'/managermain',
            element: <ManagerMainPage />
        },
        {
            path:'/workerlist',
            element: <WorkerListPage />
        },
        {
            path:'/userapproval',
            element: <UserApprovalPage />
        },
        {
            path:'/temporalworkmng',
            element: <TemporalManagementPage />
        },
        {
            path:'/temporalworkrequest',
            element: <TemporalWorkReqeustPage />
        },
        {
            path:'/workmng',
            element: <WorkManagementPage />
        },
        {
            path:'/workcomfirm',
            element: <WorkComfirmPage />
        },
        {
            path:'/total',
            element: <TotalPage />
        },
        {
            path:'*',
            element: <NotFoundPage />
        }
    ]


export default route;