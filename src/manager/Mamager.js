import {Routes, Route} from 'react-router-dom';
import {managerRout} from '../routes';

import SideMenu from '../etc/components/SideMenu';

function Manager() {
  return (
    <>
      <SideMenu />
      <Routes>
        {
            managerRout.map(route => {
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
    </>
  );
}

export default Manager;
