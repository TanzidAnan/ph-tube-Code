import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.confige';


const Home = () => {

    const googleProdider =new GoogleAuthProvider()

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
            <h1>This is Home</h1>
            <button onClick={hendleGoogleLogin} className='btn bg-red-400'>Google Add</button>
        </div>
    );
};

export default Home;