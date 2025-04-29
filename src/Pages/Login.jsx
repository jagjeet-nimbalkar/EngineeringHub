import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export const Login = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError,setEmailError]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(!emailRegex.test(email)){
      setEmailError("Mail must be in this format 'abc10@gmail.com'")
      return;
    }
    setEmailError("");

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long, contain an uppercase letter, a special character, and a number.");
      return; 
    }

    setPasswordError(""); 

    // console.log("Email:", email);
    // console.log("Password:", password);

  };

  return (
    <div className="auth-overlay">
      <div className="auth-page">
        <div className="form-container">
          <FaWindowClose onClick={onClose} className="close-btn" />
          <h2 className="text-center mb-4">Log in and keep moving toward your goals.</h2>
          <form onSubmit={handleSubmit} className="was-validated">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Email" name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              {emailError && (
                <div className="text-danger mt-1">
                  {emailError}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password"className="form-control"id="password"placeholder="Password"name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
              {passwordError && <div className="text-danger mt-1">{passwordError}</div>}
            </div>

            <button type="submit" className="w-100 btn btn-primary">Login</button>

            <p className="text mt-4">
              Don't have an account? 
              <span className="text-primary" onClick={onSwitchToRegister} style={{cursor: 'pointer'}}> Register</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
