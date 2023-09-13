import React, { useState } from 'react'
import Header from '../components/Header'
import firebase  from '../config/firebase'
import Navebar from '../assets/js/Navebar'

export default function LoginPage() {
    const [naveName, setNamename] = React.useState("LogIn Please");
    const [isLogin, setIsLogin] = React.useState(false);
    const [errors, setErrors] = React.useState("");
    const [form, setForm] = React.useState({email:"", password:""});



    function handleForm(e) {
        if (isLogin) return;
        setIsLogin(true);
        e.preventDefault();                          
        firebase.
        auth().
        signInWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user.displayName;
               
                console.log(userCredential);

                setIsLogin(false);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrors(errorMessage);
                console.log(errorMessage);
                setIsLogin(false);
            });
    }
    function handleInput(e){
        setForm({...form,[e.target.name]:e.target.value})
        // console.log(e.target.value);
    }

    return (
        <>
            <Header
                heading="Login to your account"

            />
            <div className="flex h-screen ">
                <div className="mx-auto">
                    <div>
                        
                        <p>
                            {
                                errors !== "" ? errors : ""
                            }
                        </p>   
                        
                    </div>
                    <form className='m-5 w-10/12' onSubmit={handleForm}>
                        <div className='m-1'>
                            <input
                                type='email'
                                className='p-2 rounded shadow bg-yellow-100 hover:bg-white w-full'
                                placeholder='email'
                                name="email"
                                
                                value={form.email}
                                onChange={handleInput}
                                />
                        </div>
                        <div className='m-1'>
                            <input
                                type='password' 
                                className='p-2 rounded shadow bg-yellow-100 hover:bg-white w-full  '
                                placeholder='password'
                                name="password"
                                
                                value={form.password}
                                onChange={handleInput}
                                />
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='m-1 p-2 rounded-3xl shadow-md w-full bg-lime-700 hover:bg-lime-900 text-zinc-50'
                            >
                                {
                                    isLogin ? <i className='fas fa-circle-notch fa-spin'></i> : 'Login'
                                }
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}


