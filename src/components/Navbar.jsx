import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <div className="navbar--container">
      <div className="navbar--wrapper">
        <div className='navbar--wrapper-left'>
          <span>EN</span>
          <div className="search-container">
            <input type="text" name="" id="" placeholder='Search'/>
            <SearchIcon style={{color:"gray",fontSize:'18px'}}/>
          </div>
        </div>

        <div className='navbar--wrapper-center'>
          <h1>VRS</h1>
        </div>

        <div className='navbar--wrapper-right'>
          <div className="menu-items">
            <div className="menu-item">Register</div>
            <div className="menu-item">Sign In</div>
            <div className="menu-item">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
