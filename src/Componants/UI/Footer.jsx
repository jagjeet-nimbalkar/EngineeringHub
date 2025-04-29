import { CiLinkedin } from "react-icons/ci"
import { FaFacebook, FaGithubSquare, FaInstagramSquare } from "react-icons/fa"

export const Footer=()=>{
    return <footer>
        <div className="footer-container">
            <div className="row ">
                <div className="about cols-sm-2">
                    <h1>EduHub</h1>
                    <p>A dedicated platform providing unit-wise notes, PYQs, books, and handpicked YouTube videos — for all engineering branches and semesters.</p>
                </div>
                <div className="learning-resources col-sm-4">
                    <h1> Learning Resources</h1>
                    <ul>
                        <li>Unit-wise Notes</li>
                        <li>PYQs with year filters</li>
                        <li>E-books and recommended PDFs</li>
                        <li>YouTube channels and playlists by top educators</li>
                    </ul>
                </div>
                <div className="branches col">
                    <h1> Engineering Streams</h1>
                    <ul>
                        <li>Computer Science (CSE)</li>
                        <li>Electronics & Communication</li>
                        <li>Mechanical Engineering</li>
                        <li>Civil Engineering</li>
                        <li>Electrical Engineering</li>
                    </ul>
                </div>
                <div className="contact col">
                    <h1>Connect & Support</h1>
                    <ul>
                        <li>Email: support@eduhub.in</li>
                        <li>Contact:9325XXXXXX</li>
                    </ul>
                </div>
                <div className="social-media col">
                    <h1>Follow Us On</h1>
                    <ol>
                        <li><a href="#">Instagram &nbsp; <FaInstagramSquare /></a></li>
                        <li><a href="https://www.linkedin.com/in/jagjeet-nimbalkar-0372b5289/">LinkedIn&nbsp;<CiLinkedin /></a></li>
                        <li><a href="https://github.com/jagjeet-nimbalkar">GitHub &nbsp; <FaGithubSquare /></a></li>
                        <li><a href="#">Facebook &nbsp; <FaFacebook /></a></li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="footer-bottom container">
            <p>&copy; 2025 EduHub. All rights reserved.</p>
        </div>
    </footer>
}