import React from "react";

const CareerRoadmap = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Build a professional profile and showcase your skills, experience, and achievements.",
    },
    {
      number: "02",
      title: "Discover Opportunities",
      description:
        "Browse thousands of job listings from leading companies across various industries.",
    },
    {
      number: "03",
      title: "Apply with Confidence",
      description:
        "Submit applications quickly and efficiently to positions that match your goals.",
    },
    {
      number: "04",
      title: "Get Hired",
      description:
        "Connect with recruiters, attend interviews, and land your dream job.",
    },
  ];

  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-16 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Your Career Success Roadmap
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Follow these simple steps to discover opportunities, connect with top
          employers, and accelerate your professional journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <span className="text-3xl font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;
