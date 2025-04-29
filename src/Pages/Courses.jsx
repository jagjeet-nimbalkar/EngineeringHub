import { useState } from "react";
import { CourseCard } from "../Componants/UI/CourseCard"
import { Footer } from "../Componants/UI/Footer"
import { NavbarSection } from "../Componants/UI/Navbar"
import { Login } from "./Login";
import { Register } from "./Register";

export const CoursePage=()=>{
    const [activeForm, setActiveForm] = useState(""); 
    
    return (
        <>
        <NavbarSection  onLoginClick={() => setActiveForm("login")} onRegisterClick={() => setActiveForm("register")}/>
        <CourseCard/>
        <Footer/>

        {activeForm === "login" && (<Login onClose={() => setActiveForm("")} onSwitchToRegister={() => setActiveForm("register")}/>)}
        {activeForm === "register" && (<Register onClose={() => setActiveForm("")}onSwitchToLogin={() => setActiveForm("login")}/>)}
            
        </>
    )
}