import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import RefundPolicy from "./RefundPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import EarnMoneyOnline from "./EarnMoneyOnline"
import QuickBuyer from "./QuickBuyer";
import Search from "./Search";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
      <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
      <Route path="/earnmoneyonline" element={<EarnMoneyOnline />}></Route>
      <Route path="/quickbuyer" element={<QuickBuyer />}></Route>
      <Route path="/search" element={<Search />}></Route> 
    </Routes>
  );
}

export default AllRoutes;
