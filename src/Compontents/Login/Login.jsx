import React from 'react';

const Login = () => {
    return (
        <div>
            <form onSubmit={hendleSubmit}>
                email<input type="email" name="email" id="" />
                <br />
                password<input type="password" name="password" id="" />
                <br />
                confer password<input type="password" name="conferpassword" id="" />
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Login;