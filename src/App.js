import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
// import UserCampaigns from "./components/Users/UserCampaigns";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      {/* <Login /> */}

      <Dashboard />
    </>
  );
}

export default App;
