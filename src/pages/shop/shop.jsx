import React, { useState ,useEffect} from 'react'
import shopData from '../../data/collections';
import PreviewCollection from '../../componets/preview-collection-componet/preview-collection-component'
const Shop = () => {
  // console.log(shopData);
  const [state, setstate] = useState([]);
  useEffect(() => {

    setstate(shopData);

  },[]);


  return (

    <div className="shop-page">

      {
        state.map(({id,title , ...otherCollectionProps}) =>
        

       <PreviewCollection key={id} title = {title} {...otherCollectionProps}/>
           
          
        )
      }



    </div>


  
    
  );
}

export default Shop;