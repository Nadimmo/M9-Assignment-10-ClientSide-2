import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Header = () => {

  const {user,logOut} = useContext(AuthContext)


      const Links = <>
      <li> <NavLink to={'/'}>Home</NavLink></li>
      <li> <NavLink to={'/allSpot'}>All Tourist Spot</NavLink></li>
      {
        user && <>
        <li> <NavLink to={'/addSpot'}>Add Tourist Spot</NavLink></li>
        <li> <NavLink to={'/myList'}>MyList</NavLink></li>
        </>
      }
      </>


const handlerLogout = ()=>{
  logOut()
  .then()
  .catch(error => console.log(error))
}



    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm z-10 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
              >
                {Links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Tour Trove</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {Links}
            </ul>
          </div>
          <div className="navbar-end">
        {
          user?
          <>
            <img className="w-[50px] h-[50px ] rounded-[50%]" title={user.displayName} src={user?.photoURL || "User"} alt="" />
          <Link onClick={handlerLogout}><a className="btn">Sign out</a></Link>
          </>:
          <Link to={"/login"}><a className="btn">Login</a></Link>
        }
      </div>
        </div>
      </div>
    );
};

export default Header;