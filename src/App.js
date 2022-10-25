import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/Auth/AuthProvider';
import {route} from './Routes/Routes/Routes'
function App() {
  const {isDark} = useContext(AuthContext)
  return (

    <div className={isDark?'dark bg-black text-white':null}>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
