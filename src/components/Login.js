import React from "react";
import { Header } from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&(       
         <input 
          type="text"
          placeholder="Name"
          className="p-4  my-4 w-full bg-grey-700"
        />)}

        <input
          type="text"
          placeholder="Email Adress"
          className="p-4  my-4 w-full bg-grey-500"
        /> 
       

        <input
          type="password"
          placeholder="Password"
          className="p-4  my-4 w-full bg-grey-700"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Nettflix ? Sign Up Now" : "Already registerd ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
