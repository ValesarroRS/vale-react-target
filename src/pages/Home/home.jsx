import React from "react";
import SignIn from "components/SignInForm";
import DownloadApp from "components/DownloadApp";
import SignUpForm from "components/SignUpForm";
import styles from "./index.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <section className={styles.section}>
          <Routes>
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </section>
        <section className={styles.rightSection}>
          <DownloadApp />
        </section>
      </BrowserRouter>
    </>
  );
};

export default Home;
