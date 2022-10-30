import React from "react";
import { Link } from "react-router-dom";
import classes from "./footer.module.css";
import MyButtom from "../MyButton";
import img from "../../assets/3.png";
import { InputGroup } from "react-bootstrap";
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.upper}>
          <div className={classes.navigations}>
            <div className={classes.links}>
              <h3>Quick Links</h3>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Feature</li>
                </Link>
                <Link to="/">
                  <li>Services</li>
                </Link>
                <Link to="/">
                  <li>Login</li>
                </Link>
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
            <div className={classes.Input}>
              <input placeholder=" your name" />
              <input placeholder=" your email" />
              <input placeholder=" phone number" />
            </div>
            <textarea placeholder=" address"></textarea>
            <button>Submit</button>
          </div>
        </div>
        <hr />
        <div className={classes.down}>
          <div className={classes.logo}><div style={{ fontSize: '2rem', fontWeight: "650" }}>
            <span style={{ color: '#1e24c4' }}>Medi</span><span style={{ color: '#f34d76' }}>G</span>
          </div> </div>
          <div className={classes.date_credit}>Copyright @ 2022 by MediG</div>
          <div className={classes.socials}>
            <ul>
              <Link>
                <li> <BsFacebook /></li>
              </Link>
              <Link>
                <li> <FaInstagram /></li>
              </Link>
              <Link>
                <li><BsTwitter /></li>
              </Link>
              <Link>
                <li><BsLinkedin /></li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
