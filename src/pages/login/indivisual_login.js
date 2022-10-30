import React from 'react'

import Login from "../../components/NavBar/Login";
import DropDown from "./DropDown";

const Indivisual_Login = () => {

  const logins = {
    padding: "1rem"
  }

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      allignItems: "center",
      textAlign: "center"
    }}>
      <div style={logins}>
        <Login text={"Login"} />
      </div>

      <div style={logins}>
        <DropDown />
      </div>
      {/* <div style={logins}>
            <Login text = {"Login as Doctor"} />
        </div>
         <div style={logins}>
            <Login text = {"Login as Patient"} />
         </div> */}
    </div>
  )
}

export default Indivisual_Login