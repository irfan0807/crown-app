import React from "react";
import './collection-item.scss';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import CustomButton from "../customButton/customButton";

const CollectionItem =({item ,addItem}) =>{

    const {id,name,price,imageUrl} = item;

   

return(
    <div className="collection-item">

    <div className="image"
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    
    />
        <div key={id} className="colletion-footer">
            <span className="name">{name}</span>
            <span className="price">${`${price}`}</span>



        </div>

    <CustomButton onClick={() => addItem(name,price ,imageUrl)} inverted>Add to Cart</CustomButton>

</div>
)

}

const mapDispatchToProps = dispatch =>({
    addItem:item => dispatch(addItem(item))
 
})
export default connect(null,mapDispatchToProps) (CollectionItem);
