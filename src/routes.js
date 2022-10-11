import LoginPage from '../src/user/page/Login/LoginPage';
import SignupPage from '../src/user/page/Signup/SignupPage';
import UserInfoPage from '../src/worker/page/UserInfo/UserInfoPage';
import ScheuleEnrollPage from '../src/worker/page/ScheduleEnroll/ScheduleEnrollPage';
import ManagerMainPage from '../src/manager/page/Main/ManagerMainPage';
import UserApprovalPage from '../src/manager/page/UserApproval/UserApprovalPage';
import ScheduleManagementPage from '../src/manager/page/ScheduleManagement/ScheduleManagementPage';
import NotFoundPage from '../src/etc/components/NotFoundPage'

    const managerRout = 
        [
            {
                path:'/managermain',
                element: <ManagerMainPage />
            },
            {
                path:'/userapproval',
                element: <UserApprovalPage />
            },
            {
                path:'/notfound',
                element: <NotFoundPage />
            }
        ]

    const userRout = 
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
            path:'/notfound',
            element: <NotFoundPage />
        }
    ]

    const workerRout = 
    [

        {
            path:'/:username/info',
            element: <UserInfoPage />
        },
        {
            path:'/:username/scheduleenroll',
            element: <ScheuleEnrollPage />
        },
        {
            path:'/schedulemng',
            element: <ScheduleManagementPage />
        }

    ]



export { managerRout, userRout, workerRout };