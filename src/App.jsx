import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Student_App from './Student_App';
import Teacher_App from './Teacher_App';
import Admin_App from './Admin_App';

function App() {
  const [user, setSLoginUser] = useState(null);

  const handleLogin = (user) => {
    setSLoginUser(user);
  };


 

  return (
      <Routes>
        <Route path="/" element={<Loginpage onLogin={handleLogin} />} />
        <Route
          path="/student/*"
          element={user && user.role === 'student' ? <Student_App email={user.email} setSLoginUser={setSLoginUser} /> : <Navigate to="/" />}
        />
        <Route
          path="/teacher/*"
          element={user && user.role === 'teacher' ? <Teacher_App email={user.email} setSLoginUser={setSLoginUser} /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/*"
          element={user && user.role === 'admin' ? <Admin_App email={user.email} setSLoginUser={setSLoginUser} /> : <Navigate to="/" />}
        />
      </Routes>

  );
}

export default App;
