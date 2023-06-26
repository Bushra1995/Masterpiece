import { useState } from "react";
import AboutUs from '../src/pages/AboutUs';
import Laboratories from './pages/Laboratories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/Footer';
import SocialNav from "./components/Header/SocialNav";
import SignIn from './pages/Signin';
import Home from './pages/Home'
import Signup from "./pages/Signup";
import PatientProfile from "../src/pages/PatientProfile";
import HouseCallService from "../src/pages/HouseCallService";
import LaboratoryProfile from './pages/LaboratoryProfile';
import TestCards from './pages/TestCards';
import Checkout from './pages/Checkout';
import LabPage from './pages/LabPage';
import ContactUs from './pages/ContactUs';


function App() {

  return (

    <>
      {/* User */}
      <BrowserRouter>
      
        <SocialNav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/patientProfile" element={<PatientProfile />} />   {/* showed after the patient click on the profile avatar in home page after he logged in */}
          <Route path="/callService" element={<HouseCallService />} />    {/* doesnt need regestration */}
          <Route path="/laboratories" element={<Laboratories />} />       {/* renders in home page */}
          <Route path="/labProfile" element={<LaboratoryProfile />} />    {/* showed when the lab logged into his account */}
          <Route path="/testCards" element={<TestCards />} />             {/* showed when patient click on a lab from the home page so here he can choose the tests to perform */}
          <Route path="/payment" element={<Checkout />} />                {/* showed when the patient choose a test to perform and if an out patient choose call service */}
          <Route path="/LabPage" element={<LabPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />

        </Routes>
        <Footer />
      </BrowserRouter>

      {/* Admin */}
      <BrowserRouter>

        <Routes>
          {/* admin privileges : approve labs + patients   delete + add labs */}
        </Routes>

      </BrowserRouter>

      {/* Laboratory */}
      <BrowserRouter>

        <Routes>

        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
