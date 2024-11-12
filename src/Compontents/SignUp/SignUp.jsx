
const SignUp = () => {

    const hendleSubmit =e =>{
        e.preventDefault();
        const email =e.target.email.value
        const password =e.target.password.value
        const conferpasswords =e.target.conferpassword.value
        console.log(email,password,conferpasswords)
    }

    return (
        <div>
            <form onSubmit={hendleSubmit}>
                email<input type="email" name="email" id="" />
                <br />
                password<input type="password" name="password" id="" />
                <br />
               confer password<input type="password" name="conferpassword" id="" />
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default SignUp;