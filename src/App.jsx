import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Mindcheck from './Mindcheck';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} user={user} />} />
      <Route path="/home" element={<Home user={user} setUser={setUser} />} />
      <Route path="/mindcheck" element={<Mindcheck />} />
    </Routes>
  );
}

export default App;