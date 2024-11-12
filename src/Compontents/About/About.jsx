import { useContext } from "react";
import { authContext } from "../MainLayouts/MainLayouts";

const About = () => {
    const {hendleGoogleLogin} =useContext(authContext);
    
    return (
        <div>
            <h1>this is About</h1>
            <button onClick={hendleGoogleLogin} className="btn ">Google Login</button>
        </div>
    );
};

export default About;