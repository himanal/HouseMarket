import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
   <Router>
     <Routes>
       <Route path='/'  element={<Explore/>}/>
       <Route path='/forget-password' element={<ForgotPassword/>}/>
       <Route path='/offer' element={<Offer/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/signin' element={<SignIn/>}/>
     </Routes>
     <NavBar/>
   </Router>
    </>
  );
}

export default App;
