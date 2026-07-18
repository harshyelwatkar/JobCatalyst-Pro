import React from "react";
import { useUser } from "@clerk/clerk-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import CareerRoadmap from "../components/CareerRoadmap";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const Home = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing />

      {!isSignedIn && <CareerRoadmap />}

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
