import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode, useState } from "react";
import { useAuth } from "store/auth.reducer";
import PublicLayoutContainer from "layout/PublicLayoutContainer";
import SignUpForm from "components/SignUpForm";
import SignIn from "components/SignInForm";
import About from "components/About";
import Welcome from "pages/Welcome/welcome";
import "./App.css";
import PrivateLayoutContainer from "layout/PrivateLayoutContainer";
import HomeEmptyState from "components/HomeEmptyState";
import Contact from "components/Contact";
import AboutModal from "components/AboutModal";

const App = () => {
  const user = useAuth();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const openContact = () => {
    setContactModalOpen(true);
  };
  const closeContact = () => {
    setContactModalOpen(false);
  };
  const openAbout = () => {
    setAboutModalOpen(true);
  };
  const closeAbout = () => {
    setAboutModalOpen(false);
  };

  return (
    <StrictMode>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                element={
                  <PublicLayoutContainer
                    uid={user.uid}
                    openContactModal={openContact}
                  />
                }
              >
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUpForm />} />
                <Route path="/about" element={<About />} />
              </Route>
              <Route
                element={
                  <PrivateLayoutContainer
                    uid={user.uid}
                    name={user.name}
                    openContactModal={openContact}
                    openAboutModal={openAbout}
                  />
                }
              >
                <Route path="/aboutModal" element={<AboutModal />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/homeEmptyState" element={<HomeEmptyState />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {contactModalOpen && (
        <Contact closeContact={closeContact} hasSession={!!user.uid} />
      )}
      {aboutModalOpen && <AboutModal closeAbout={closeAbout} />}
    </StrictMode>
  );
};

export default App;
