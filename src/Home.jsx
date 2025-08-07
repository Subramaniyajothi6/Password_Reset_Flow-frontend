import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import { Link } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

const Home = () => {

  const { setUser } = useAuth();
  const handleLogout = (e) => {
    e.preventDefault();
    setUser({ email: '', password: '' });
    alert("Logout successful!");

  }
  return (
    <>








      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Password Reset Flow</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      <div className="container d-flex flex-column justify-content-center align-items-center text-center rounded"
  style={{ height: 'calc(100vh - 56px)' }}>
        <h1 className="display-4">Welcome to the Password Reset App</h1>
        <p className="lead">Easily register, log in, and reset your password securely using our simple flow.</p>
        <hr className="my-4" />
        <div className='d-flex justify-content-center gap-3'>
          <Link to={'/register'}>
            <button className='btn btn-primary'>
              Register
            </button>
          </Link>
          <Link to={'/login'}>
            <button className='btn btn-primary px-3'>
              Login
            </button>
          </Link>
          
            <button className='btn btn-primary px-3' onClick={handleLogout}> 
              Logout
            </button>
         
        </div>

      </div>





    </>
  )
}

export default Home