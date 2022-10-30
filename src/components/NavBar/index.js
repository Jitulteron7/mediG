import {Link} from "react-router-dom";
import classes from "./navbar.module.css";

function BrandExample() {
  return (
    <>
      <div className={classes.nav_container}>
        <div className={classes.cotainer}>          
            <div style={{ fontSize: '2rem', fontWeight: "650" }}>
              <span style={{ color: '#1e24c4' }}>Medi</span><span style={{ color: '#f34d76' }}>G</span>
            </div>          
          <div className={classes.menu}>
            <Link to={"/"}>Home</Link>
            <Link to={"/feature"}>About Us</Link>
            <Link to={"/price"}>Feature</Link>
            <Link to={"/price"}>Services</Link>
            <Link to={"/feature"}>Mission</Link>            
          </div>

          <div className={classes.function}>
            <Link style={{color:'rgb(95, 92, 92)', fontWeight: '600'}} to={"/login"}>
                 Login
             </Link> 
            <Link className={classes.getstart}>Get started</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandExample;