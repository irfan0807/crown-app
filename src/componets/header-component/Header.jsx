import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'; 
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to= '/'>

        <Logo className="logo"/>



      </Link>

      <div className="options">
        <Link to='/shops' className="option">
            SHOP
        </Link>
        <Link className='option'>
            CONTACT
        </Link>
        <Link className='option'>
            ABOUT_US
        </Link>
      </div>
       
        </div>
  )
}

export default Header;