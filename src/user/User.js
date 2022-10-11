import {Routes, Route} from 'react-router-dom';
import {userRout} from '../routes';

function User(){
  return (
      <Routes>
        {
            userRout.map(route => {
              return(
                <Route 
                  key={route.path}
                  path={route.path}
                  element={route.element}
              />
              )
            })
        }
      </Routes>
  );
}

export default User;
