import './App.css';
import {Routes, Route} from 'react-router-dom';
import route from './routes.js';

function App() {
  return (
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
  );
}

export default App;
