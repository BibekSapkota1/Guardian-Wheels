import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Display from './pages/Display';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
