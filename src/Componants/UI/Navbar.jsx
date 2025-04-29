export const NavbarSection = ({ onLoginClick,onRegisterClick }) => {
  return (
    <div className="navbar sticky-top navSection">
      <div className="Navcontainer">
        <div className="logo">
          <h1><b>LastNight</b></h1>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

        <div className="navLinks">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Course</a></li>

            <li>
              <button onClick={onLoginClick} className="btn btn-primary">Log In</button>
            </li>

            <li>
              <button onClick={onRegisterClick}>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
