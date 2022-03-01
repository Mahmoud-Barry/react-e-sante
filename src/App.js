import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import ScanQrCode from './components/ScanQRCode';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<LoginPage/>}></Route>
        <Route path='scanCode' element ={<ScanQrCode/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
