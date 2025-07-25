import React from 'react';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User Logged Out");
        setUser(null);
      })
      .catch((error) => {
        console.log("Logout Error", error);
      });
  };

  const handleStartCheck = () => {
    navigate('/start');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
        Hello, {user.displayName} 👋🏻
      </h2>
      <p className="text-gray-600 mb-6">Welcome back to your safe mental health space</p>

      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md text-center mb-8">
      
        <h3 className="text-xl font-semibold text-gray-800">{user.displayName}</h3>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      
      <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-6 rounded-md w-full max-w-xl">
        <p className="text-purple-800 italic text-center">
          “Taking care of your mental health is an act of self-love.” 💜
        </p>
      </div>

    
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={handleStartCheck}
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Start Mind Check
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Logout
        </button>
      </div>

      <div className="mt-10 text-center">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">How It Works</h4>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-bold text-blue-600">1. Sign In</h5>
            <p className="text-sm text-gray-600">Login securely with your Google account.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-bold text-blue-600">2. Mind Check</h5>
            <p className="text-sm text-gray-600">Select how you feel and receive guided tips.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-bold text-blue-600">3. Reflect</h5>
            <p className="text-sm text-gray-600">Use the advice to reflect and feel better.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;