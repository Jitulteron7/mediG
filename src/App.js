import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
// import Navbar from "./components/Navbar/index"
import InputField from './components/inputField/inputfield';
import Customer from './components/Customer/customerRouter';
import Dashboard from './pages/dashboard'
import Login from "./pages/login/indivisual_login";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/input' element={<InputField/>}/>
        <Route path="/dash/*" element={<Dashboard />} />
        <Route path='/secondPage/*' element={<Customer/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
