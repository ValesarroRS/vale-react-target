import React from "react";
import SignIn from "components/SignInForm";
import DownloadApp from "components/DownloadApp";
import SignUpForm from "components/SignUpForm";
import About from "components/About";
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
