import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ user }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/mindcheck');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-red-200">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Hi, {user?.displayName || 'Friend'} 👋</h1>
      <p className="text-lg text-gray-800 mb-6">Let’s check in with your mind today 💭</p>
      <button
        onClick={handleStart}
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-md"
      >
        Start Mind Check 🧠
      </button>
    </div>
  );
};

export default Home;