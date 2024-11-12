import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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

    const hendleSignUp =(email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    const hendleSignIn =(email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
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

    useEffect(() =>{
        console.log('Users:',user)
    },[user])

    useEffect(() => {
       const unSubserce= onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            if (currentUser) {
                setUser(createContext)
            }
            else {

            }
        })

        return () =>{
            unSubserce()
        }
    }, [])

    const authData = {
        hendleGoogleLogin,
        hendleGitHub,
        user,
        setUser,
        hendleLogOut,
        hendleSignUp,
        hendleSignIn
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