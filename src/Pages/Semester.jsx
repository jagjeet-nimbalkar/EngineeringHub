import { useParams } from "react-router-dom"
import { SemesterCard } from "../Componants/UI/SemesterCard"
import { NavbarSection } from "../Componants/UI/Navbar"
import { Footer } from "../Componants/UI/Footer"

export const Semester=()=>{
    return(
    <>
        <NavbarSection/>
        <SemesterCard/>
        <Footer/>
    </>

    )
}