import { useContext } from "react";
import { authContext } from "../MainLayouts/MainLayouts";

const About = () => {
    const {hendleGoogleLogin,user,hendleLogOut} =useContext(authContext);
    console.log(user);
    
    return (
        <div>
            <h1>this is About</h1>
            <button onClick={hendleGoogleLogin} className="btn ">Google Login</button>
            {
                user && <p>{user?.displayName}</p>
            }
            <button onClick={hendleLogOut}>Log Out</button>
        </div>
    );
};

export default About;