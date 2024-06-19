import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from "./assets/components/homepage";
import Courses from "./assets/components/courses";
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/footer';
import SignUpForm from './assets/components/signUp';
import Login from './assets/components/login';
import ContactUs from './assets/components/contactus';
import { useAuth } from './assets/context/authoProvide'; // Correct path to useAuth

function App() {
  const [authUser] = useAuth(); // Destructuring authUser from useAuth

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default App;
