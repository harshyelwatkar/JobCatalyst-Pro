import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  const { setShowRecruiterLogin } = useContext(AppContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow py-4 bg-white relative">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Logo */}

        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
        />

        {user ? (
          <>
            {/* Desktop Navigation */}

            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/profile"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                My Profile
              </Link>

              <span className="text-gray-400">|</span>

              <Link
                to="/applications"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Applied Jobs
              </Link>

              <span className="text-gray-400">|</span>

              <p className="text-gray-700">
                Hi, {user.firstName} {user.lastName}
              </p>

              <span className="text-gray-400">|</span>

              <UserButton />
            </div>

            {/* Mobile Navigation */}

            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl"
              >
                ☰
              </button>

              <UserButton />
            </div>
          </>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="text-gray-600"
            >
              Recruiter Login
            </button>

            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}

      {user && menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              My Profile
            </Link>

            <Link
              to="/applications"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Applied Jobs
            </Link>

            <p className="text-gray-500">
              Hi, {user.firstName} {user.lastName}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
