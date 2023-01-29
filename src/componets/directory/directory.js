import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item";
import data from '../../data/data';
import './directory.scss';



const Directory = () => {

    const [state, setState] = useState(data);

    console.log(data);
    return (
        <div className="directory-Menu">

            {
                data.map(item => (
                    <MenuItem key={item.title} title={item.title} imageUrl={item.imageUrl} size={item.size} />
                ))
            }





        </div>
    )
}

export default Directory;