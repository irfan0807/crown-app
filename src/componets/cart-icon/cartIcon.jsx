import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions"; 
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import './cartIcon.scss';


const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );


const mapDispatchToProps = (dispatch) => ({

  toggleCardHidden: () => dispatch(toggleCardHidden())

});
export default connect(
  null,
  mapDispatchToProps
)(CartIcon);