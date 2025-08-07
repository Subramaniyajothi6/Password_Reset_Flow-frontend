import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'

const ResetPassword = () => {

  const { token } = useParams()
  //  const {user,SetUser}  = useAuth()

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    console.log(confirmPassword);

    if (!password && !confirmPassword) {
      setPasswordError('Both password fields are required');
      return
    };

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return
    };

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long ');
      return
    };

    console.log("Reset token:", token);

    try {
      const response = await fetch(`https://password-reset-flow-gb7g.onrender.com/api/v1/auth/reset_password_confirm/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      })


      const data = await response.json();

      if (response.ok) {
        setMessage('password reset successfully');
        setPassword('');
        setConfirmPassword('');
        setPasswordError('');

        setMessage('Password reset successfully');
        setTimeout(() => {
          navigate('/login');
        }, 2000);

      }
      else {
        setPasswordError(data.message || 'Password reset failed');
      }

      navigate('/login')

    }
    catch (err) {
      setPasswordError(err.message || 'Password reset failed');
    }


  }




  return (
    <>
      <div className='container d-flex align-items-center justify-content-center min-vh-100'>
        <div className="card shadow p-4" style={{ maxWidth: '420px', width: '100%' }}>
          <form onSubmit={handleSubmit}>

            <h3 className='text-center fw-semibold mb-4'>Reset Your Password</h3>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-5">New Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label fs-5">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>

            <button type="submit" className="btn btn-primary w-100">Reset Password</button>
            {passwordError && <div className='alert alert-danger'>{passwordError}</div>}
            {message && <div className='alert alert-success'> {message}</div>}

          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword