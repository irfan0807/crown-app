import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cartIcon.scss';


const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);


const mapDispatchToProps = (dispatch) => ({

  toggleCartHidden: () => dispatch(toggleCartHidden())

});
export default connect(
  null,
  mapDispatchToProps
)(CartIcon);