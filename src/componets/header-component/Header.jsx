import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'; 
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to = '/'>

        <Logo className="logo"/>



      </Link>

      <div className="options">
        <Link to='/shops' className="option">
            SHOP
        </Link>
        <Link className='option'>
            CONTACT
        </Link>
      {console.log(currentUser)}
       
        {
            currentUser ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div> : <Link className='option' to='/signin' >Sign In</Link>

           }
      </div>
       
        </div>
  )
}

export default Header;