import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
// import Navbar from "./components/Navbar/index"
import InputField from './components/inputField/inputfield';
import Customer from './components/Customer/customerRouter';
import Dashboard from './pages/dashboard'
import Login from "./pages/login/indivisual_login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Toastify = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    default:
      toast.info(msg);
      break;
  }
};



function App() {
  toast.configure({ hideProgressBar: true });
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/input' element={<InputField />} />
        <Route path="/dash/*" element={<Dashboard />} />
        <Route path='/secondPage/*' element={<Customer/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/secondPage/*' element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
