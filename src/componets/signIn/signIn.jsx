import React , {useState}from "react";
import CustomButton from "../customButton/customButton";
import FormInput from "../form-input/form-input";
import './signIn.scss';


const SignI = () =>{


    const [state, setstate] = useState({email: '', password: ''});
    const handleSubmit = (e) =>{
        e.preventDefault();

        setstate({email: '', password: ''});

    }
    const handleChange = (e) =>{
     

        const {value , name} = e.target; 
        setstate({[name] :value});
    }

    return (

        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
            
                <FormInput label='email' name="email" type="email" value={state.email} handleChange={handleChange}  required/>
                <label>Email</label>
                <FormInput label='password' name="password" type="password" value={state.password} handleChange={handleChange}  required/>
                <label>password</label>
                <CustomButton type='submit'  >Sign In</CustomButton>
            </form>

        </div>

    );
}
export default SignI;