import { useContext } from "react";
import { authContext } from "../MainLayouts/MainLayouts";

const About = () => {
    const authCont =useContext(authContext);
    console.log(authCont)
    return (
        <div>
            <h1>this is About</h1>
        </div>
    );
};

export default About;