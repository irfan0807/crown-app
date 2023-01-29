import React , {useState}from "react";
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
                <input name="email" type="email" value={state.email} onChange={handleChange} required/>
                <label>Email</label>
                <input name="password" type="password" value={state.password} onChange={handleChange} required/>
                <label>password</label>
                <input type='submit' value ='submit' />
            </form>

        </div>

    );
}
export default SignI;