import React from "react";
import './preview-collection-component.scss';
import CollectionItem from "../collection-item/collecton-item";

const PreviewCollection = ({ title, items }) => (

    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(item => (<CollectionItem key={item.id} item={item} />))}
        </div>

    </div>





);
export default PreviewCollection;