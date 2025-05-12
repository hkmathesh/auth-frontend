import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Home Page!</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
