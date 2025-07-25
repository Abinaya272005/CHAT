import React from 'react';
import { auth, provider } from './firebase'; // ✅ Correct now
import { signInWithPopup } from 'firebase/auth';

const Login = ({setUser,user}) => {
    
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      setUser(user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-pink-200'>
      <h2 className='text-3xl font-bold mb-4 text-red'>Welcome to MindTalk 👩🏾‍🤝‍🧑🏼</h2>
      <p className='text-gray-700 mb-6'>Your mental health safe space</p>
     {!user && ( <button
        onClick={handleLogin}
        className='bg-pink-500 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow-md'
      >
        Sign in with Google
      </button>
     )}
    
    </div>
  );
};

export default Login;