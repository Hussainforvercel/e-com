"use client"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import {auth} from '../../firebase';
import Link from 'next/link';
 
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
           console.log(userCredential);
           alert("signed Up successfully!")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    


  return (
    <div className=' bg-cover bg-[url("https://www.linkpicture.com/q/alistairdyer_App_UI_design_finance_dashboard_management_renting1.png")]'>
    <div className='py-10 px-80 h-screen'>
    <div className='px-20 my-36 '> 
      <form onSubmit={signUp}>
        <h2 className='text-center text-4xl py-5 bg-gray-600 font-semibold  rounded-lg text-white'  >Create Your Account</h2>
        <div className='space-x-10 py-10'>
        <input type="email" className='py-3 rounded-lg px-5' placeholder='write email' 
        value={email}
        onChange={(e)=> setEmail(e.target.value)} />
      
        <input type="Password" className='py-3 rounded-lg px-5'  placeholder='enter Password'
         value={password}
         onChange={(e)=> setPassword(e.target.value)}/>
         </div>
         <div className='flex justify-center'>
         <button type='submit' className=' bg-gray-600 px-10 text-white font-semibold py-2 rounded-lg content-center' > <Link href={"/home"}>Sign Up</Link>  </button>
         </div>
      </form>
        </div>
        </div>
        </div>
  )
}

export default SignUp;






// <div className='sign-up-container '> 
// <form onSubmit={signUp}>
//   <h2 >Create an account</h2>
//   <input type="email" placeholder='write email' 
//   value={email}
//   onChange={(e)=> setEmail(e.target.value)} />
//   <input type="Password" placeholder='enter Password'
//    value={password}
//    onChange={(e)=> setPassword(e.target.value)}/>
//    <button type='submit' >Sign up</button>
// </form>
  
//   </div>