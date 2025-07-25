import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Mindcheck from './Mindcheck';

function App() {
  const [user, setUser] = useState(null); // 🔐 Login user state

  return (
    <Router>
      <Routes>
        {/* If user is logged in, show Home else go to Login */}
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} setUser={setUser} />
            ) : (
              <Login setUser={setUser} user={user} />
            )
          }
        />

        {/* Start button in Home navigates to /start */}
        <Route
          path="/start"
          element={
            user ? (
              <Mindcheck />
            ) : (
              <Navigate to="/" />
            )
          }
        />

      
      </Routes>
    </Router>
  );
}

export default App;