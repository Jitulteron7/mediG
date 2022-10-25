
import {Link} from "react-router-dom";
import classes from "./navbar.module.css";

function BrandExample() {
  return (
    <>
      <div className={classes.nav_container}>
        <div className={classes.cotainer}>          
            <div style={{ fontSize: '2rem', fontWeight: "650" }}>
              <span style={{ color: '#1e24c4' }}>Super</span><span style={{ color: '#f34d76' }}>Mind</span>
            </div>          
          <div className={classes.menu}>
            <Link to={"/"}>Home</Link>
            <Link to={"/feature"}>Features</Link>
            <Link to={"/price"}>Pricing</Link>
          </div>

          <div className={classes.function}>
            <Link to={"/"}>Get Started</Link> 
            <Link className={classes.getstart}>Get started</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandExample;