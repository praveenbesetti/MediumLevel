import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Logo from './components/logo';
import { Routes,Route } from 'react-router-dom';
import Email from './components/email';
import Send from './components/conformation';

import Navbody from './components/navbody';
function App() {
  return (
    <div className="App">
     
     
     
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile/:id' element={<Logo />} />
        <Route path='/conformation/:id' element={<Email />} />
        <Route path='/success/:id' element={<Send/>}/>
    </Routes>   
    </div>
  );
}

export default App;
