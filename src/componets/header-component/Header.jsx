import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'; 
import './Header.scss';
import CartIcon from '../cart-icon/cartIcon';
import { auth } from '../../firebase/firebase.utils';
import Cart from '../cart-dropdown/cartDropdown';

const Header = ({ currentUser ,hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
      
    </div>
    { hidden ? null : <Cart />
      
      }
    
  </div>
);

const mapStateToProps = ({user: { currentUser} , cart :{hidden }}) => ({
  currentUser,
  hidden

});

export default connect(mapStateToProps)(Header);