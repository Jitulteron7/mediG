import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar/index"
import InputField from './components/inputField/inputfield';
import Customer from './components/Customer/customerRouter'
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/input' element={<InputField/>}/>
        <Route path='/secondPage/*' element={<Customer/>} />
      </Routes>
    </>
  );
}

export default App;
