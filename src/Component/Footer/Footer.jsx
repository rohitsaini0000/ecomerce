import React from 'react'
import "./Footer.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className=" Home-FBottem">
        <div className="Home-f">
          <div>
            <h1>SHOP.CO</h1>
            <p style={{  marginTop:10,marginBottom:20}} >
              We have clothes that suits <br /> your style and which re proud  <br />to wear. From women to men.
            </p>
            <div style={{ display:'flex', gap:20, marginTop:10,marginBottom:20}}>
             <FaTwitter size={28} />
             <FaFacebook size={28} />
             <FaInstagram size={28}/>
             <FaGithubSquare size={28} />
            </div>
          </div>
        <div>
          <h2>COMPANY</h2>
         <ul className='.HFootrdiv1'>
           <li> About</li>
           <li>Features</li>
           <li>Works</li>
           <li>Career</li>
         </ul>
        </div>
        <div>
         <h2>HELP</h2>
         <ul className='.HFootrdiv1'>
          <li> Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
         </ul>
        </div>
        <div>
          <h2>FQS</h2>
          <ul className='.HFootrdiv1'>
            <li> Account</li>
           <li>Manage Deliveries</li>
           <li>Orders</li>
           <li>Payments</li>
          </ul>
        </div>
        <div>
          <h2>Resources</h2>
         <ul className='.HFootrdiv1'>
           <li>Free eBooks</li>
           <li>Development Tutorial</li>
           <li>How to - Blog</li>
           <li>Youtube Playlist</li>
         </ul>
         </div>
      </div>
        
      <div className="footernameplat">
        <h1>STAY UPTO DATE ABOUT  OUR LATEST OFFERS</h1>
        <div className='HF-Button'>
          <button className='HF-ButtonA'>Enter Your Email Addres</button>
          <button className='HF-ButtonB' >Subscribe to Newsletter</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Footer
