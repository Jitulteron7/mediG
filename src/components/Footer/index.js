import React from "react";
import { Link } from "react-router-dom";
import classes from "./footer.module.css";
import MyButtom from "../MyButton";
import img from "../../assets/3.png";
import { InputGroup } from "react-bootstrap";

const Footer = () => {
        return (<>
                <div className={classes.container}>
                        <div className={classes.upper}>
                                <div className={classes.navigations}>
                                        <div className={classes.links}>
                                                <h3>Quick Links</h3>
                                                <ul>
                                                        <Link to="/"><li>Home</li></Link>
                                                        <Link to="/"><li>Feature</li></Link>
                                                        <Link to="/"><li>Services</li></Link>
                                                        <Link to="/"><li>Login</li></Link>
                                                </ul>
                                        </div>

                                        <div className={classes.getstart}>
                                                <div className={classes.img_container}>
                                                        <img src={img} alt="get start" />
                                                </div>

                                                <MyButtom color={"orange"} text={"Get started"} />
                                        </div>
                                </div>
                                <div className={classes.form}>
                                        <form>
                                                <input />
                                                <input />
                                                <input />
                                                <input />                                                                                        
                                        </form>
                                </div>
                        </div>
                        <hr />
                        <div className={classes.down}>
                                <div className={classes.logo}>This is Logo</div>
                                <div className={classes.date_credit}>Copyright @ 2022 by MediG</div>
                                <div className={classes.socials}>
                                        <ul>
                                                <Link><li> Instagram</li></Link>
                                                <Link><li> Linkedin</li></Link>
                                                <Link><li>Twitter</li></Link>
                                                <Link><li>Facebook</li></Link>
                                        </ul>
                                </div>
                        </div>
                </div>
        </>)
}

export default Footer;