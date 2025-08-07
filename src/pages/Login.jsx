import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert('Please enter email and password');
      return
    }

    try {
      const res = await fetch('https://password-reset-flow-gb7g.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        credentials: 'include'
      });

      const data = await res.json();

      console.log("Login Response:", data);

      if (!res.ok) {
        alert(data.message || "Login Failed");
        return;
      }
      const token = data.token;
      localStorage.setItem('token', token);

      alert("Login successful!");

      navigate('/');
    }
     catch (err) {
      console.error("Unexpected error occurred:", err);
      alert("login failed.");
    }


  }





  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
        <div className="text-center mt-3">
          
          <div className="d-flex justify-content-center ">
            <Link to="/forgotPassword" > <p className='mx-2'>Forgot password?</p> </Link>
          <Link to="/register"> Don't have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
