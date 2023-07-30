import React from 'react'
import './Last.css';
import logo from './acimg/amazon-logo.jpg';
import {Link} from 'react-router-dom';
import usflag from './acimg/usflag.jpg';

function Last() {
  return (
    <div>
        <div className='backtotop'>
        Back to top
        </div>

        <div className="lastnav">
        <div className="lfirst">
            <div>
                <strong> Get to Know Us </strong><br /> Careers <br /> Blog <br /> About Amazon <br /> Investor Relations <br />Amazon Devices <br />Amazon Science
            </div>
            <div>
              <strong>Make Money with Us</strong>  <br /> Sell products on Amazon <br />Sell on Amazon Business <br /> Sell apps on Amazon <br /> Become an Affiliate <br />Advertise Your Products <br />Self-Publish with Us <br />Host an Amazon Hub <br />See More Make Money with Us
            </div>
            <div>
             <strong>Amazon Payment Products</strong>  <br />Amazon Business Card <br />Shop with Points <br />Reload Your Balance <br />Amazon Currency Converter
            </div>
            <div>
              <strong>Let Us Help You</strong>  <br />Amazon and Covid-19 <br />Your Account <br />Your Orders <br />Shipping Rates & Policies <br />Return & Replacements <br />Manage Your Content and Devices <br />Amazon Assistant <br />Help
            </div>
        </div>
        <hr />

        <div className="lsecond">
        <Link to="/"><img className='a-logo' src={logo} alt="amazon logo" /></Link>
        <div className='n1'>
          English
        </div>
        <div className='n1'>
          USD-U.S.Dollar
        </div>
        <div className='n1 n13'>
          <div>
          <img className='usflag' src={usflag} alt="logo" />
          </div>
          <div>
          United States
          </div>
        </div>
        </div>
        </div>


        <div className="lnav2">
          
        </div>
    </div>
  )
}

export default Last