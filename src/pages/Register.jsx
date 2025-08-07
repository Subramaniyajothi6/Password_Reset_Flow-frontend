import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
 const { user , setUser } = useAuth();

 const  handleSubmit = async (e) => {
    e.preventDefault();
   try {

    const res = await fetch('https://password-reset-flow-gb7g.onrender.com/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(user),
      credentials: 'include'});

      const data = await res.json();
    
      console.log(data);
      

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }
      else {
        alert(data.message);
      }
   } catch (error) {
    
    console.log({message:error.message});
   }
  };
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" >Name</label>
            <input type="name" className="form-control" id="name" placeholder="Enter your name" onChange={  (e) => setUser({...user,name:e.target.value}) } value={user.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"  >Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={  (e) => setUser({...user,email:e.target.value}) } value={user.email}  />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" >Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={  (e) => setUser({...user,password:e.target.value}) } value={user.password}  />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <Link to={'/login'}> <p className="text-center mt-3">Already have an account ?</p></Link>

      </div>
    </div>
  );
};

export default Register;
