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
            <div className='ln'>
                <strong className='strlast'> Get to Know Us </strong><br /> Careers <br /> Blog <br /> About Amazon <br /> Investor Relations <br />Amazon Devices <br />Amazon Science
            </div>
            <div className='ln2'>
              <strong className='strlast'>Make Money with Us</strong>  <br /> Sell products on Amazon <br />Sell on Amazon Business <br /> Sell apps on Amazon <br /> Become an Affiliate <br />Advertise Your Products <br />Self-Publish with Us <br />Host an Amazon Hub <br />See More Make Money with Us
            </div>
            <div className='ln2'>
             <strong className='strlast'>Amazon Payment Products</strong>  <br />Amazon Business Card <br />Shop with Points <br />Reload Your Balance <br />Amazon Currency Converter
            </div>
            <div className='ln'>
              <strong className='strlast'>Let Us Help You</strong>  <br />Amazon and Covid-19 <br />Your Account <br />Your Orders <br />Shipping Rates & Policies <br />Return & Replacements <br />Manage Your Content and Devices <br />Amazon Assistant <br />Help
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
          <div className="v1">
            <div className='vdiv'>
              <strong className="sl2"> Amazon Music </strong> stream millions of songs
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Advertising </strong> Find,attract, and engage customers
            </div>
            <div className='vdiv'>
            <strong className="sl2"> 6pm </strong> <br /> Score deals on fashion brands
            </div>
            <div className='vdiv'>
            <strong className="sl2"> AbeBooks </strong> Books,art &collectibles
            </div>
            <div className='vdiv'>
            <strong className="sl2"> ACX </strong> <br /> Audiobook Publishing Made Easy
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Sell on Amazon </strong> Start a Selling Account
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Business </strong> Everything For Your Business
            </div>
          </div>
          
          <div className="v1">
            <div className='vdiv'>
              <strong className="sl2"> Amazon Music </strong> stream millions of songs
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Advertising </strong> Find,attract, and engage customers
            </div>
            <div className='vdiv'>
            <strong className="sl2"> 6pm </strong> <br /> Score deals on fashion brands
            </div>
            <div className='vdiv'>
            <strong className="sl2"> AbeBooks </strong> Books,art &collectibles
            </div>
            <div className='vdiv'>
            <strong className="sl2"> ACX </strong> <br /> Audiobook Publishing Made Easy
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Sell on Amazon </strong> Start a Selling Account
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Business </strong> Everything For Your Business
            </div>
          </div>

          <div className="v1">
            <div className='vdiv'>
              <strong className="sl2"> Amazon Music </strong> stream millions of songs
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Advertising </strong> Find,attract, and engage customers
            </div>
            <div className='vdiv'>
            <strong className="sl2"> 6pm </strong> <br /> Score deals on fashion brands
            </div>
            <div className='vdiv'>
            <strong className="sl2"> AbeBooks </strong> Books,art &collectibles
            </div>
            <div className='vdiv'>
            <strong className="sl2"> ACX </strong> <br /> Audiobook Publishing Made Easy
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Sell on Amazon </strong> Start a Selling Account
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Business </strong> Everything For Your Business
            </div>
          </div>

          <div className="v1">
            <div className='vdiv'>
              <strong className="sl2"> Amazon Music </strong> stream millions of songs
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Advertising </strong> Find,attract, and engage customers
            </div>
            <div className='vdiv'>
            <strong className="sl2"> 6pm </strong> <br /> Score deals on fashion brands
            </div>
            <div className='vdiv'>
            <strong className="sl2"> AbeBooks </strong> Books,art &collectibles
            </div>
            <div className='vdiv'>
            <strong className="sl2"> ACX </strong> <br /> Audiobook Publishing Made Easy
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Sell on Amazon </strong> Start a Selling Account
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Business </strong> Everything For Your Business
            </div>
          </div>

        </div>
    </div>
  )
}

export default Last