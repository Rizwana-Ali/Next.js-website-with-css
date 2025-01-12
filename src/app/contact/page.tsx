import Image from "next/image";
 import  "@/style/contact.css";
 import { GrMapLocation } from "react-icons/gr";
 import { TfiTwitter } from "react-icons/tfi";
 import { SlSocialLinkedin } from "react-icons/sl";
 import { IoLogoInstagram } from "react-icons/io";
 import { SlSocialFacebook } from "react-icons/sl";


export default function Contact(){
    return(
        <main>
  
    <div className="form">
      <div className="contact-info">
        <h3 className="title">Let's get in touch</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          adipisci recusandae praesentium dicta!
        </p>
        <div className="info">
          <div className="information">
            <img src="/location.png" className="icon" alt="" />
             <p>Karachi , Paistan</p>
          </div>
          <div className="information">
            <img src="/email.png" className="icon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div className="information">
            <img src="/phone.png" className="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>
        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="#">
            <SlSocialFacebook />
            </a>
            <a href="#">
               <TfiTwitter /> 
            </a>
            <a href="#">
            <IoLogoInstagram />
            </a>
            <a href="#">
            <SlSocialLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <span className="circle one" />
        <span className="circle two" />
        <form action="index.html" autoComplete="off">
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="name" className="input" />
            <label>Username</label> 
            <span>Username</span>
          </div>
          <div className="input-container">
            <input type="email" name="email" className="input" />
            <label>Email</label>
            <span>Email</span>
          </div>
          <div className="input-container">
            <input type="tel" name="phone" className="input" />
            <label>Phone</label>
            <span>Phone</span>
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input" defaultValue={""} />
            <label>Message</label>
            <span>Message</span>
          </div>
          <input type="submit" defaultValue="Send" className="btn" />
        
        </form>
      </div>
    </div>
  
  </main>
    )}
    Contact


















