import React, { useContext } from 'react';
import { authContext } from '../MainLayouts/MainLayouts';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const {hendleSignIn} =useContext(authContext)

    const hendleSubmit =e =>{
        e.preventDefault();
        const email =e.target.email.value
        const password =e.target.password.value
        hendleSignIn(email,password)
    }

    return (
        <div>
            <form onSubmit={hendleSubmit}>
                email<input type="email" name="email" id="" />
                <br />
                password<input type="password" name="password" id="" />
                <br />
                <button className='btn' type="submit">Login</button>
            </form>
            <NavLink to='/signIn'>Sing Up</NavLink>
        </div>
    );
};

export default Login;