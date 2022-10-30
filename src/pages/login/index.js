// import React, { useEffect } from "react";
// import { Form, Formik } from "formik";
// import InputField from "../../components/InputField/InputFIeld";
// import Button from "../../components/Button/BtnType1";
// import {validation2} from "../../utils/validation";
// import "./login.css";
// import { Link, Redirect, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../redux/actions";


// const Login = () => {
//   const dispatch = useDispatch();
//   //const auth = useSelector((state) => state.auth);
//   //const  history=useHistory();
// window.location.search.replace("?","");

//   if (auth?.authenticated) {
//     if(window.location.search.replace("?","")!==""){
//       const link="/courses?"+window.location.search.replace("?","")
//       return <Redirect to={link} />;
      
//     }
//     return <Redirect to="/dash" />;
//   }
//   return (
//     <>
  
//     <div className="container">
    
//       <div className="container_auth  row">
//         {/* <div className=" auth_side_right">
//           <img className="img1" src={svg1} alt={""} />
//           <img className="img2" src={svg2} alt={""} />
//           <img className="img3" src={svg3} alt={""} />
//           <Link to="/">
//           <img className="img4"src={svg4} alt={""}/>
//           </Link>
//         </div> */}
//         <div className=" form_container ">
//         {/* <Link className="go_back" onClick={()=>{history.goBack()}}>Back</Link> */}

//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//             }}
//             validationSchema={validation2}
//             onSubmit={(values) => {
//               console.log(values);
//               dispatch(login(values));
//             }}
//           >
//             <div className="form_box">
//               <h3>Sign in</h3>

//               <Form>
//                 <InputField
//                   label="Your email"
//                   placeholder="example@example.com"
//                   type="email"
//                   name="email"
//                 />
//                 <InputField
//                   label="Choose a password"
//                   placeholder="example"
//                   type="password"
//                   name="password"
//                 />
//                 <Button name="Sign in" type="submit" />
//                 <div className="bottom_form">
//                   <p>
//                     Forgot Your Password?
//                     <Link to="/forgot">Click here</Link>
//                   </p>
//                   {window.location.search.replace("?","")==""?<p>
//                     New account?
//                     <Link to="/signup">Register</Link>
//                   </p>:
//                   <p>
//                     New account?
//                     <Link to={"/signup?"+window.location.search.replace("?","")}>Register</Link>
//                   </p>
//                   }
//                 </div>
//               </Form>
//             </div>
//           </Formik>
          
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Login;
