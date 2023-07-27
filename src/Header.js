import React from 'react';
import './Header.css';
import logo from './acimg/amazon-logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import usflag from './acimg/usflag.jpg';

function Header() {
  return (
    <div className='mainheader'>
    <div className="header">
    <Link to="/"><img className='a-logo' src={logo} alt="amazon logo" /></Link>

     <div className="header_location">
      <FmdGoodOutlinedIcon className='locationicon'/>
      <div className="loc_name">
        <div className="locsub">
          Deliver to<br/> <h3>India</h3>
        </div>
      </div>
     </div>

     <div className="search">
       <select className='header_sel'>
        <option value="hi">All Departments</option>
        <option value="">Arts & Crafts</option>
        <option value="">Automotive</option>
        <option value="">Baby</option>
        <option value="">Beauty & Personal Care</option>
        <option value="">Books</option>
        <option value="">Boy's Fashion</option>
        <option value="">Computers</option>
        <option value="">Deals</option>
        <option value="">Digital Music</option>
        <option value="">Electronics</option>
        <option value="">Girls Fashion</option>
        <option value="">Health & Household</option>
        <option value="">Home &Kitchen</option>
        <option value="">Industrial & Scientific</option>
        <option value="">Kindle Store</option>
        <option value="">Luggage</option>
        <option value="">Men's Fashion</option>
        <option value="">Movies & TV</option>
        <option value="">Music, CDs & Vinyl</option>
       </select>
      <input className='header_searchinput' type="text" placeholder='Search Amazon' />
      <SearchIcon className='header_searchicon'/>
     </div>

     <div className="header_options">
      <div className="lang">
        <div>
        <img className='usflag' src={usflag} alt="logo" />
        </div>
      <div>
      <select className='header_sel2'>
          <option >EN</option>
        </select>
      </div>
      </div>

      <div className="option">
        <div className="text">
          Hello,sign in
        </div>
        <div className="option_sub">
          Account & Lists
          <select className='header_sel2'></select>
        </div>
      </div>

      <div className="option">
        <div className="text">
          Returns
        </div>
        <div className="option_sub">
          & Orders
        </div>
      </div>

      <div className="cart">
        <ShoppingCartOutlinedIcon fontSize="large" className='carticon' />
        <div>
          <div className='cartcount'>0</div>
          <div><strong>Cart</strong></div>
        </div>
      </div>

     </div>
    </div>

    <div className="nav">
    <a className='micon' href="#"><MenuIcon /></a>
    <a className='atag' href="#">All</a>
      <nav className='navbar'>
        <a href="#">Today's Deals</a>
        <a href="#"><Link to="/cservice">CustomerService</Link></a>
        <a href="#">Registry</a>
        <a href="#">Gift Cards</a>
        <a href="#">Sell</a>
      </nav>
    </div>

    </div>

    
  )
}

export default Header