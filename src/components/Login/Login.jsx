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
  const { login, loginWithGoogle, loginWithGithub } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const handlerLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password)
    login(email, password)
      .then(result => {
        console.log(result.user)
        alert("User login successfully")
        navigate(location?.state ? location?.state : "/")
      })
      .catch(error => {
        console.log(error)
        alert(error.message)
      })
  }

  const handlergoolge = (e) => {
    e.preventDefault()
    loginWithGoogle()
      .then((result) => {
        navigate(location?.state ? location?.state : "/")
        console.log(result.user)
      })
      .catch(error => console.log(error))
  }

  const handlergithub = (e) => {
    e.preventDefault()
    loginWithGithub()
      .then((result) => {
        navigate(location?.state ? location?.state : "/")
        console.log(result.user)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-violet-400 via-green-400 to-black relative">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div
          className="bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?technology,abstract')`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="hero-content flex-col lg:flex-row relative z-10">
        <div className="text-center lg:text-left lg:mr-12">
          <h1 className="text-5xl font-extrabold text-white mb-6">Login Now!</h1>
        </div>
        <div className="card w-full max-w-md shadow-lg bg-white p-6 rounded-lg bg-opacity-90">
          <form onSubmit={handlerLogin} className="space-y-6">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Password</span>
              </label>
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-10 right-4 cursor-pointer text-xl text-gray-500 hover:text-gray-700"
              >
                {show ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            {/* Login Button */}
            <div className="form-control">
              <button className="btn bg-indigo-600 text-white font-bold hover:bg-indigo-700 w-full">
                Login
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mt-4">
              <hr className="w-1/3 border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="w-1/3 border-gray-300" />
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={handlergoolge}
                className="btn btn-outline flex items-center justify-center text-gray-700 hover:bg-green-500 w-full"
              >
                <FaGoogle className="mr-3 text-lg" /> Sign in with Google
              </button>
              <button
                onClick={handlergithub}
                className="btn btn-outline flex items-center justify-center text-gray-700 hover:bg-black hover:text-white w-full"
              >
                <FaGithub className="mr-3 text-lg" /> Sign in with GitHub
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 font-bold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>



  );
};

export default Login;