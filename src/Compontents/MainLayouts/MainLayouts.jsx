import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.confige';
export const authContext = createContext()


const MainLayouts = () => {

    const googleProdider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const hendleGoogleLogin = () => {
        signInWithPopup(auth, googleProdider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    const hendleGitHub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const authData ={
        hendleGoogleLogin,
        hendleGitHub,
    }


    return (
        <div>
            <authContext.Provider value={authData}>
                <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayouts;