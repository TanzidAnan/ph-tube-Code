import { useContext } from "react";
import { authContext } from "../MainLayouts/MainLayouts";

const Home = () => {

    const { hendleGoogleLogin,
        hendleGitHub
    } = useContext(authContext);

    return (
        <div>
            <h1>This is Home</h1>
            <button onClick={hendleGoogleLogin} className='btn bg-red-400'>Google Add</button>
            <button onClick={hendleGitHub} className='text-green-600 btn'>Github</button>
        </div>
    );
};

export default Home;