import { useState } from "react";
import { Footer } from "../Componants/UI/Footer";
import { HeroSection } from "../Componants/UI/HeroSection";
import { NavbarSection } from "../Componants/UI/Navbar";
import { Login } from "./Login";
import { Register } from "./Register";

export const HomeSection = () => {
  const [activeForm, setActiveForm] = useState(""); 

  return (
    <>
      <div className={activeForm ? "blurred-content" : ""}>
        <NavbarSection  onLoginClick={() => setActiveForm("login")} onRegisterClick={() => setActiveForm("register")}/>
        <HeroSection />
        <Footer />
      </div>

      {activeForm === "login" && (<Login onClose={() => setActiveForm("")} onSwitchToRegister={() => setActiveForm("register")}/>)}
      
      {activeForm === "register" && (<Register onClose={() => setActiveForm("")}onSwitchToLogin={() => setActiveForm("login")}/>)}
    </>
  );
};
