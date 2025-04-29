import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export const Register = ({ onClose, onSwitchToLogin }) => {
  const [fullname , setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [emailError,setEmailError]=useState("");
  const [password,setPassword]=useState("");
  const [passwordError, setPasswordError] = useState("");
  

  const getRegisterData=(event)=>{
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

    // console.log(fullname,email,password)
  }

  return (
    <div className="auth-overlay">
      <div className="auth-page">
        <div className="form-container">
          <FaWindowClose onClick={onClose} className="close-btn" />

          <h2 className="text-center mb-4">Create your account</h2>

          <form onSubmit={getRegisterData} className="was-validated">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" name="fullname" value={fullname} onChange={(e)=>setFullName(e.target.value)} required/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="text" className="form-control" id="email" placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
              {emailError &&(
                <div className="text-danger mt-1">
                {emailError && (
                  <div className="text-danger mt-1">
                  {emailError}
                </div>
                )}
              </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              {passwordError && (
                <div className="text-danger mt-1">
                {passwordError && (
                  <div className="text-danger mt-1">{passwordError}</div>
                )}
              </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>

            <p className="text mt-4"> 
              Already have an account? 
              <span className="text-primary" onClick={onSwitchToLogin} style={{cursor: 'pointer'}}> Log In</span>
            </p>

            <a href="#" className="text text-right">Forgot Password</a>
          </form>
        </div>
      </div>
    </div>
  );
};
