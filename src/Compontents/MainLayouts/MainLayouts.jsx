import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.confige';
export const authContext =createContext()


const MainLayouts = () => {
    
    const googleProdider =new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const hendleGoogleLogin =() =>{
        signInWithPopup(auth,googleProdider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    
    return (
        <div>
            <h1>Tanzid anan</h1>
            <authContext.Provider value={{name:'tanzid'}}>
                <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayouts;