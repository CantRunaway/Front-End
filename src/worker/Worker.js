import {Routes, Route} from 'react-router-dom';
import {workerRout} from '../routes';


const Worker = ()=> {
  return (
    <>
      <Routes>
        {
            workerRout.map(route => {
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

export default Worker;
