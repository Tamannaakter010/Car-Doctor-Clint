import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../pages/home/Providers/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        // Sign out successful
      })
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user?.email ? (
  <li>
    <Link to="/signout">Sign Out</Link>
  </li>
) : (
  <li>
    <Link to="/signin">Sign In</Link>
  </li>
)}

    </>
  );

  return (
    <div className="mb-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4">{navItems}</ul>
        </div>
        <div className="navbar-end">
        <Link to="/signup" className="btn btn-outline btn-warning">
          Appointment
        </Link>
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
