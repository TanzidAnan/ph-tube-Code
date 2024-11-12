import { useContext } from "react";
import { authContext } from "../MainLayouts/MainLayouts";
import { NavLink } from "react-router-dom";

const SignUp = () => {
    const { hendleSignUp } = useContext(authContext)

    const hendleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const conferpasswords = e.target.conferpassword.value
        console.log(email, password, conferpasswords);
        if (/^ (?=.* [a - z])(?=.* [A - Z])(?=(.*\d){ 2,}) (?=.* [@$ ^*]).{ 6,} $/.test(password)) {
            alert('valide');
            return;
        }
        if (password.length < 6) {
            alert('password must be 6 carecter')
            return
        }
        if (password != conferpasswords) {
            alert('password don not mase');
            return;
        }
        hendleSignUp(email, password)
    }

    return (
        <div>
            <form onSubmit={hendleSubmit}>
                email<input type="email" name="email" id="" />
                <br />
                password<input type="password" name="password" id="" />
                <br />
                confer password<input type="password" name="conferpassword" id="" />
                <br />
                <button className="btn" type="submit">submit</button>
            </form>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default SignUp;