import React, { useEffect, useState } from "react";
import MenuItem from "../menu-item/menu-item";
import data from '../../data/data';
import './directory.scss';



const Directory = () => {

    const [state, setState] = useState([]);
    useEffect(() => {
        setState(data);
    }, []);

    console.log(state);
    return (
        <div className="directory-Menu">

            {
                state.map(item => (
                    <MenuItem key={item.title} title={item.title} imageUrl={item.imageUrl} size={item.size} />
                ))
            }





        </div>
    )
}

export default Directory;