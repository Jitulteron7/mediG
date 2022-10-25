import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar/index"
import InputField from './components/inputField/inputfield';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/input' element={<InputField/>}/>
      </Routes>
    </>
  );
}

export default App;
