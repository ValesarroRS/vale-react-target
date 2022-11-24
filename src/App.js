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

const App = () => {
  const user = useAuth();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContact = () => {
    setContactModalOpen(true);
  };
  const closeContact = () => {
    setContactModalOpen(false);
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
              </Route>
              <Route
                element={
                  <PrivateLayoutContainer
                    uid={user.uid}
                    name={user.name}
                    openContactModal={openContact}
                  />
                }
              >
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/homeEmptyState" element={<HomeEmptyState />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {contactModalOpen && (
        <Contact closeContact={closeContact} hasSession={!!user.uid} />
      )}
    </StrictMode>
  );
};

export default App;
