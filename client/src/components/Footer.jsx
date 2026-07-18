import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-5">
      <div className="container mx-auto px-4 2xl:px-20 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-600">
        <img src={assets.logo} alt="JobCatalyst Logo" className="h-6 w-auto" />

        <span className="hidden sm:block text-gray-400">|</span>

        <p>
          Copyright © {new Date().getFullYear()} JobCatalyst. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
