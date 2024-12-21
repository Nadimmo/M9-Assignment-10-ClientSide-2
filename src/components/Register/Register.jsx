import { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

  const { register, updateUserProfile } = useContext(AuthContext)

  const [show, setShow] = useState(false)


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, password, image)
    // Password verification
    if (password.length < 6) {
      alert('Password must be 6 character or longer')
      return
    }
    else if (! /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      alert('Password must contain at least one uppercase letter, one lowercase letter');
      return;
    }


    register(email, password)
      .then(result => {
        console.log(result.user);
        updateUserProfile(name, image)
        alert("User created successfully");
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="hero min-h-screen  bg-gradient-to-t from-violet-400 via-green-400 to-black relative">
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
          <h1 className="text-5xl font-extrabold text-white mb-6">Register Now!</h1>
        </div>
        <div className="card w-full max-w-lg shadow-lg bg-white p-6 rounded-lg bg-opacity-90">
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

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

            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Photo URL</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Enter your photo URL"
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
                type={show ? 'text' : 'password'}
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

            {/* Register Button */}
            <div className="form-control">
              <button className="btn bg-indigo-600 text-white font-bold hover:bg-indigo-700 w-full">
                Register
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Register;

