import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreatePin from "./pages/CreatePin";
import { ForgetPass } from "./pages/ForgetPass";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/create-pin" element={<CreatePin/>}/>
          <Route path="/forget-password" element={<ForgetPass/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
