import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login  from './pages/login';
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from 'react-router-dom';
function App() {
  const routes=createBrowserRouter(createRoutesFromElements
    (
       <Route path='/' element={<Home/>}>
          <Route path='/login' element={<Login/>}/>
       </Route>
    )
    )
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
