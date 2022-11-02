import "./App.css";
import Home from "./pages/Home/home.jsx";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div className="App">
        <Home />
      </div>
    </StrictMode>
  );
};

export default App;
