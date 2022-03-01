import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import ScanQrCode from './components/ScanQRCode';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<LoginPage/>}></Route>
        <Route path='scanCode' element ={<ScanQrCode/>}></Route>
        <Route path='register' element ={<RegisterPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
