import React from "react";

import './form-input.scss';


const FormInput = ({handleChange , label , ...otherProps}) => (

    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {/* {console.log(otherProps.values)} */}
        {
            label ? ( <label className= {`${otherProps.values ?  'shrink' : ''} form-input-lable`}>{label}</label>) : null
        }

    </div>
 
)

export default FormInput;