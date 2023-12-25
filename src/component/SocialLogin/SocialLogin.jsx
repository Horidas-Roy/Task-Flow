import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";




const SocialLogin = () => {

    const {googleSignIn,githubSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
     
   const handleGoogle=()=>{
       googleSignIn()
       .then(result=>{
          console.log(result.user)
          navigate('/dashboard/profile')
       })
       .catch(error=>{
           console.log(error)
       })
   }

    const HandleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
             console.log(result.user)
             navigate('/dashboard/profile')
        })
        .catch(error=>{
            console.log(error)
        })
    }
      
    return (
        <div className="flex justify-center items-center gap-5 py-5">
            <button onClick={handleGoogle} className="text-blue-600">Google</button>
            <button onClick={HandleGithubSignIn} className="text-blue-600">github</button>
        </div>
    );
};

export default SocialLogin;