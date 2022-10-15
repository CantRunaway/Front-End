import './App.css';
import {Routes, Route} from 'react-router-dom';
import route from './routes.js';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {
          route.map(route => {
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
    </BrowserRouter>
  );
}

export default App;
