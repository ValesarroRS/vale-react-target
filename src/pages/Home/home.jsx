import React from "react";
import SignIn from "../../components/SignInForm/index.jsx";
import DownloadApp from "../../components/DownloadApp/index.jsx";
import SignUpForm from "../../components/SignUpForm/index.jsx";
import About from "../../components/About/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <section className="section">
          <Routes>
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
        <DownloadApp />
      </BrowserRouter>
    </>
  );
};

export default Home;
