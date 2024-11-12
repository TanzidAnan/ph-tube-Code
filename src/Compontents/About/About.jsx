import { useContext } from "react";
import { authContext } from "../MainLayouts/MainLayouts";

const About = () => {
    const {hendleGoogleLogin,user} =useContext(authContext);
    console.log(user)
    
    return (
        <div>
            <h1>this is About</h1>
            <button onClick={hendleGoogleLogin} className="btn ">Google Login</button>
            {
                user && <p>{user?.email}</p>
            }
        </div>
    );
};

export default About;