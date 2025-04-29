import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer";
import { Navbar } from "../UI/Navbar";


export const BoilerPlate=()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}