import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-3 flex justify-between items-center border-b">
      <div className="text-xl font-bold text-blue-700">
        <Link to="/">📡 NetView</Link>
      </div>

      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            👤 {user.username} <span className="italic">({user.role})</span>
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="text-sm text-blue-600 hover:underline"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
