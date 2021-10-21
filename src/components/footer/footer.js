import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import logo from "../../assets/images/tolet8.png";
import facebook from "../../assets/images/1facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import playStore from "../../assets/images/google-play-badge.png";

function Footer({ src, title, description, price }) {
  return (
    <div className="footer">
      <footer className="footerCon">
        <div className="footerAdd">
          <div className="footerBox footerBox1">
            <a href="/">
              <img className="bottomLogo" src={logo} alt="Tolet.Com"></img>
            </a>
            <div>
              <h2>
                Downlod our App <br /> <p>coming soon</p>
              </h2>
              <a href="">
                <img src={playStore} alt="From Play Store"></img>
              </a>
            </div>
          </div>
          <div className="footerBox footerBox2">
            <a href="/room/in/kota">Room in Kota</a>
            <a href="/room/in/kota">Room in MhaveerNagar</a>
            <a href="/room/in/kota">Room in Talwandi</a>
            <a href="/room/in/kota">Room in Keshavpura</a>
            <a href="/room/in/kota">Room in Borkhera</a>
            <a href="/room/in/kota">Room in Borkhandi</a>
            <a href="/room/in/kota">Room in Nayapura</a>
            <a href="/room/in/kota">Room in Dadabadi</a>
          </div>
          <div className="footerBox footerBox3">
            <a href="/room/in/kota">Room in Bundi</a>
            <a href="/room/in/kota">Room in Nainwa Rd</a>
            <a href="/room/in/kota">Room in Nayapura</a>
            <a href="/room/in/kota">Room in Dadabadi</a>
            <a href="/room/in/kota">Room in Rajat grah</a>
            <a href="/room/in/kota">Room in Talwandi</a>
            <a href="/room/in/kota">Room in Keshavpura</a>
            <a href="/room/in/kota">Room in Borkhera</a>
          </div>
          <div className="footerBox footerBox4">
            <a href="/room/in/kota">Room in Jaipur</a>
            <a href="/room/in/kota">Room in Ajmer</a>
            <a href="/room/in/kota">Room in Jhunjhunu</a>
            <a href="/room/in/kota">Room in Tonk</a>
            <a href="/room/in/kota">Room in Jodhpur</a>
            <a href="/room/in/kota">Room in Udaipur</a>
            <a href="/room/in/kota">Room in Kanpur</a>
            <a href="/room/in/kota">Room in Lucknow</a>
          </div>
        </div>
        <hr />
        <div className="footerBottom">
          <div className="bottomBox bottomIcons">
            <a href="">
              <img src={facebook}></img>
            </a>
            <a href="">
              <img src={instagram}></img>
            </a>
            <a href="">
              <img src={twitter}></img>
            </a>
            <a href="">
              <img src={youtube}></img>
            </a>
          </div>
          <div className="bottomBox bottomSubmenu">
            <Link to="/">Home</Link>
            <Link to="/termCondi">Terms</Link>
            <Link to="/help">Help</Link>
          </div>
          <div className="bottomBox bottomRight">2021 &copy; Tolet.Com</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
