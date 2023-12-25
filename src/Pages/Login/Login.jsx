import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {logIn}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        logIn(email,password)
        .then(result=>{
              console.log(result.user)
              if(result.user){
                navigate('/dashboard/profile')
              }
        })
        .catch(error=>{
              console.log(error)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200 w-full pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body w-full">
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
            <div>
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
            <div className="form-control mt-2">
              <button className="btn bg-blue-700 text-white font-semibold text-lg">Login</button>
            </div>
          </form>
          <p className="text-center">New Here? Please <Link to='/resister'><span className="text-blue-600">Resister</span></Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
