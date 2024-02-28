import './App.css';
import { Route, Routes } from 'react-router-dom';
import Display from './pages/Display';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigate from './pages/Navigate';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/navigate' element={<Navigate/>}/>
      </Routes>
    </div>
  );
}

export default App;
