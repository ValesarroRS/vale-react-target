import "./App.css";
//import Home from "./pages/Home/home.jsx";
import { StrictMode } from "react";
import Welcome from "pages/Welcome/welcome";

const App = () => {
  return (
    <StrictMode>
      <div className="App">
        <Welcome />
      </div>
    </StrictMode>
  );
};

export default App;
