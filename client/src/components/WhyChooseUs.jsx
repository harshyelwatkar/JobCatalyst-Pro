import React from "react";
import {
  ShieldCheck,
  Send,
  Building2,
  TrendingUp,
  Search,
  Lock,
} from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Verified Job Listings",
      description:
        "Browse opportunities posted by trusted companies and verified recruiters.",
      icon: ShieldCheck,
    },
    {
      title: "Quick Applications",
      description:
        "Apply to jobs effortlessly with a streamlined application process.",
      icon: Send,
    },
    {
      title: "Top Company Access",
      description:
        "Discover openings from startups, growing businesses, and established enterprises.",
      icon: Building2,
    },
    {
      title: "Career Growth Focus",
      description:
        "Find opportunities that align with your skills, experience, and long-term goals.",
      icon: TrendingUp,
    },
    {
      title: "Smart Job Discovery",
      description:
        "Explore relevant opportunities across industries and locations with ease.",
      icon: Search,
    },
    {
      title: "Secure & Reliable",
      description:
        "A trusted platform designed to connect talented professionals with employers.",
      icon: Lock,
    },
  ];

  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="bg-white border border-gray-200 rounded-lg px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-4">
          Why Choose JobCatalyst?
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Everything you need to discover opportunities, connect with employers,
          and move your career forward with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-100 p-6 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100">
                    <Icon size={20} strokeWidth={2} className="text-blue-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
