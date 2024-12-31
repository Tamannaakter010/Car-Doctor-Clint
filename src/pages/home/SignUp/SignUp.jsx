import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg';


const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    
    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      console.error("Invalid email format");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("User created:", result.user);

        const createdAt = result.user?.metadata?.creationTime;
    
   
        const user = { email, createdAt };

        return fetch(`https://coffee-strore-server.vercel.app/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        
      });
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
       <div className="w-1/2 mr-12">
                  <img src={img} alt="Login" />
                  
                </div>
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold text-center mt-4">Sign up now!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email" 
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default SignUp;