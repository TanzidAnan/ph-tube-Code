import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.confige';
export const authContext = createContext()


const MainLayouts = () => {
    const [user, setUser] = useState(null)

    const googleProdider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const hendleGoogleLogin = () => {
        signInWithPopup(auth, googleProdider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    const hendleGitHub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const hendleLogOut =() =>{
        signOut(auth)
        .then(res => console.log(res))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            console.log(user)
            if (user) {

            }
            else {

            }
        })
    }, [])

    const authData = {
        hendleGoogleLogin,
        hendleGitHub,
        user,
        setUser,
        hendleLogOut
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