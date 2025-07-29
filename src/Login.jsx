import React, { useEffect, useState } from 'react';
import { signInWithRedirect, getRedirectResult, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from './firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser, user }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setUser(result.user);
          navigate('/home');
        } else {
          setLoading(false); 
        }
      })
      .catch((error) => {
        console.error("Redirect login error ❌", error);
        setLoading(false);
      });

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate('/home');
      }
    });

    return () => unsubscribe();
  }, [navigate, setUser]);

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <h2 className="text-3xl font-bold mb-4 text-pink-700">Welcome to MindTalk 🧠</h2>
      <p className="text-gray-700 mb-6">Your safe space for mental health 🧩</p>

      {!loading && !user ? (
        <button
          onClick={handleLogin}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Sign in with Google
        </button>
      ) : (
        <p>Checking login...</p>
      )}
    </div>
  );
};

export default Login;