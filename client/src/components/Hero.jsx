import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });

    setIsSearched(true);

    // Clear input fields
    titleRef.current.value = "";
    locationRef.current.value = "";
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-sky-600 via-blue-700 to-blue-900 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Accelerate Your Career Journey
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Find top opportunities, connect with leading companies, and take the
          next step toward your dream career.
        </p>
        <div className="flex items-center justify-between bg-white rounded-full text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.search_icon}
              alt="Search Icon"
            />
            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.location_icon}
              alt="Location Icon"
            />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 px-6 py-2 rounded-full text-white m-1"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-xl flex">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img
            className="h-6"
            src={assets.microsoft_logo}
            alt="Microsoft Logo"
          />
          <img className="h-6" src={assets.walmart_logo} alt="Walmart Logo" />
          <img
            className="h-6"
            src={assets.accenture_logo}
            alt="Accenture Logo"
          />
          <img className="h-6" src={assets.samsung_logo} alt="Samsung Logo" />
          <img className="h-6" src={assets.google_logo} alt="Google Logo" />
          <img className="h-6" src={assets.adobe_logo} alt="Adobe Logo" />
          <img className="h-6" src={assets.amazon_logo} alt="Amazon Logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
