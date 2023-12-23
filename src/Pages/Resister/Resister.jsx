import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Resister = () => {

    const {createUser}=useContext(AuthContext)
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const profilePicture=form.profilePicture.value;
        const password=form.password.value;

        console.log(name,email,profilePicture,password)

       createUser(email,password)
       .then(result=>{
           console.log(result.user)
       })
       .catch(error=>{
           console.log(error)
       })
         
    }
    return (
        <div className="hero min-h-screen bg-base-200 w-full pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Profile picture</span>
                </label>
                <input
                  type="file"
                  name="profilePicture"
                  placeholder="profile picture"
                  className="justify-center items-center"
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
              <div className="form-control mt-6">
                <button className="btn bg-blue-700 text-white font-semibold text-lg">Resister</button>
              </div>
            </form>
            <p className="text-center pb-5">
                Already have an account?please <Link to='/login'><span className="text-blue-600">Login</span></Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Resister;