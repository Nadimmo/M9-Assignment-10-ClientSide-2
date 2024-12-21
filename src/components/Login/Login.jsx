/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import './style.css'
const Login = () => {

    const [show, setShow] = useState(false);
    const {login,loginWithGoogle, loginWithGithub} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handlerLogin = (e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;

      console.log(email,password)
      login(email,password)
      .then(result=>{
        console.log(result.user)
        alert("User login successfully")
        navigate(location?.state ? location?.state:"/")
      })
      .catch(error =>{
        console.log(error)
        alert(error.message)
      })
    }

    const handlergoolge = (e)=>{
        e.preventDefault()
        loginWithGoogle()
        .then((result)=>{
          navigate(location?.state ? location?.state:"/")
          console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    const handlergithub = (e)=>{
        e.preventDefault()
        loginWithGithub()
        .then((result)=>{
          navigate(location?.state ? location?.state:"/")
          console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="content hero ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 content">
            <form onSubmit={handlerLogin} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input name="password" type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                <span onClick={() => setShow(!show)} className="absolute mt-12 ml-44  text-2xl">
                  {show ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info font-bold">Login</button>
              </div>
              <div>
                <div>
                    <div className="flex mt-4">
                        <hr className="w-[49%]" />or <hr className="w-[49%]" />
                    </div>
   
                    <div className="mt-4">
                        <a onClick={handlergoolge} className="btn btn-outline btn-success text-black ml-6" href=""><FaGoogle></FaGoogle></a>
                        <a onClick={handlergithub} className="btn btn-outline btn-success text-black hover:text-white ml-16" href=""><FaGithub></FaGithub></a>
                    </div>
                </div>
              </div>
              <p>Don't hav account? <Link to={'/register'} className="text-green-500 font-bold">Register</Link></p>
              
            </form>
          </div>
        </div>
              </div>
    );
};

export default Login;