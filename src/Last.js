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
              <strong className="sl2"> AmazonGlobal </strong> Ship Orders Internationally
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Home Services </strong> Experienced Pros Happiness Guarentee
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Ignite </strong> <br /> Sell your original Digital Educational Resources
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Web services  </strong> Scalable Cloud Computing Services
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Audible</strong> <br /> Listen to Books & Original Audio Performances
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Book Depository </strong> Books With Free Delivery Worldwide
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Box Office Mojo </strong> Find Movie Box Office Data
            </div>
          </div>

          <div className="v1">
            <div className='vdiv'>
              <strong className="sl2"> ComlXology </strong> Thousends of Digital Comics
            </div>
            <div className='vdiv'>
            <strong className="sl2"> DPReview </strong> Digital Photography
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Fabric </strong> <br /> Sewing, Qullting & Knitting
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Goodreads </strong> Book reviews & recommendations
            </div>
            <div className='vdiv'>
            <strong className="sl2"> IMDb </strong> <br /> Movies, TV & Celebrities
            </div>
            <div className='vdiv'>
            <strong className="sl2"> IMDbPro </strong> Get info Entertainment Professionals Need
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Kindle Direct Publishing </strong> Indle Digital & Print Publishing Made Easy
            </div>
          </div>

          <div className="v1">
            <div className='vdiv'>
              <strong className="sl2"> Prime Video Direct </strong> video Distribution Made Easy
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Shopbop </strong> Designer Fashion Brands
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Woot! </strong> <br /> Deals and Shenanigans
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Zappos </strong> Shoes & Clothing
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Ring </strong> <br /> Smart Home Security Systems
            </div>
            <div className='vdiv'>
            <strong className="sl2"> esro WiFi </strong> Stream 4k Video In Every Room
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Blink </strong> Smart Security for Every Home
            </div>
          </div>

          <div className="v1">
            <div className='vdiv'>
              <strong className="sl2"> Neighbors App </strong> Real-Time Crime & Safety Alerts
            </div>
            <div className='vdiv'>
            <strong className="sl2"> Amazon Subscription Boxes </strong> Top subscription boxes-right to your door
            </div>
            <div className='vdiv'>
            <strong className="sl2"> PillPack</strong> <br /> Pharmacy Simplified
            </div>
            </div>

          <div className="v1">
            <div>
              Conditions of Use Privacy Notice  Your Ads Privacy Cholces
            </div>
            </div>

            <div className="v11">
            <div>
              @ 1996-2023, Amazon.com, Inc, or its affiliates
            </div>
          </div>

        </div>
    </div>
  )
}

export default Last