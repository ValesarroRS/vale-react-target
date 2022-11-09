import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { useAuth } from "store/auth.reducer";
import PublicLayoutContainer from "layout/PublicLayoutContainer";
import SignUpForm from "components/SignUpForm";
import SignIn from "components/SignInForm";
import Welcome from "pages/Welcome/welcome";
import "./App.css";
import PrivateLayoutContainer from "layout/PrivateLayoutContainer";

const App = () => {
  const user = useAuth();
  return (
    <StrictMode>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route element={<PublicLayoutContainer uid={user.uid} />}>
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUpForm />} />
              </Route>
              <Route
                element={
                  <PrivateLayoutContainer uid={user.uid} name={user.name} />
                }
              >
                <Route path="/welcome" element={<Welcome />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
};

export default App;
