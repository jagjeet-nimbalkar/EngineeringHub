import { FaArrowRight } from "react-icons/fa";
export const HeroSection=()=>{
    return(
    <main>
        <div className="hero-section main">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="heading">Don’t wait for the last night. <br /> Start your success story today with us.</h1>
                    <p className="hero-subtext">
                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Discover notes, previous year papers, and courses — all in one place, built to help you ace your exams and level up your future.</p>
                    <button className="btn explain"> Start Exploring <FaArrowRight />
                    </button>
                </div>
                <div className="hero-area">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="banner-video">
                    <source src="/assets/images/video.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
        </div>
        <div className="crs-info">
            <h1>START YOUR LEARNING JOURNEY WITH US</h1>
            <p className="journey-text">Whether you're preparing for midterms, finals, or placements, our platform gives you access to everything you need — notes, PYQs, and books — for all engineering branches and semesters.Take control of your learning, one step at a time.</p>
        </div>
        <div className="container FE">
            <h1><b>FEATURES</b></h1>
        </div>
        <div className="feature-details">
           <p>
              Our platform offers a complete collection of <strong>Notes</strong>, <strong>Previous Year Question Papers (PYQs)</strong>,
              and <strong>Books</strong> for <strong>all Engineering branches</strong> across <strong>every semester</strong>.
           </p>
           <p>
               Whether you're from <em>Computer Science, Mechanical, Civil, Electrical, IT, EXTC, or any other stream</em> — we've got you covered!
           </p>
        </div>
        <div className="feature-section">
           <div className="feature-card">
             <h2>📒 Notes</h2>
             <p>Access well-organized handwritten and digital notes for every subject and topic, made for last-minute revision or deep study.</p>
           </div>

           <div className="feature-card">
             <h2>❓ PYQs</h2>
             <p>Get previous year question papers with solutions to understand patterns and prepare smartly for your exams.</p>
           </div>

           <div className="feature-card">
             <h2>📚 Books</h2>
             <p>Explore recommended textbooks, references, and study material all in one place to save your time and boost your prep.</p>
           </div>
        </div>
    </main>
    )
};