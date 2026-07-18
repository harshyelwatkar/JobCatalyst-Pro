import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import SkillsSelector from "../components/SkillsSelector";

const Profile = () => {
  const navigate = useNavigate();

  const { userData, updateUserProfile } = useContext(AppContext);

  const [profile, setProfile] = useState({
    skills: [],
    gpa: "",
    preferredRole: "",
    preferredLocation: "",
    workAuthorization: "",
    visaRequired: false,
  });

  useEffect(() => {
    if (userData) {
      setProfile({
        skills: userData.skills || [],
        gpa: userData.gpa || "",
        preferredRole: userData.preferredRole || "",
        preferredLocation: userData.preferredLocation || "",
        workAuthorization: userData.workAuthorization || "",
        visaRequired: userData.visaRequired || false,
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await updateUserProfile({
      ...profile,
      gpa: profile.gpa === "" ? null : Number(profile.gpa),
      skills: profile.skills,
    });

    if (success) {
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 2xl:px-20 mx-auto my-10">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>

          {/* Profile Summary */}

          <div className="bg-sky-50 border border-sky-300 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full border bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
              {userData?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{userData?.name}</h2>

              <p className="text-gray-600 mt-1">{userData?.email}</p>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
                  {userData?.resume ? "Resume Uploaded" : "Resume Missing"}
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
                  {(userData?.skills || []).length} Skills Added
                </span>
              </div>
            </div>
          </div>

          {/* Edit Form */}

          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-xl shadow-sm p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Edit Profile</h2>

            {/* Name */}

            <div>
              <label className="block font-medium mb-2">Full Name</label>

              <input
                type="text"
                value={userData?.name || ""}
                readOnly
                className="w-full border rounded-lg px-4 py-3 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Email */}

            <div>
              <label className="block font-medium mb-2">Email</label>

              <input
                type="email"
                value={userData?.email || ""}
                readOnly
                className="w-full border rounded-lg px-4 py-3 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Skills */}

            <div>
              <label className="block font-medium mb-2">Skills</label>

              <SkillsSelector
                skills={profile.skills}
                setSkills={(skills) =>
                  setProfile((prev) => ({
                    ...prev,
                    skills,
                  }))
                }
              />
            </div>

            {/* GPA */}

            <div>
              <label className="block font-medium mb-2">GPA</label>

              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                name="gpa"
                value={profile.gpa}
                onChange={handleChange}
                placeholder="8.5"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Preferred Role */}

            <div>
              <label className="block font-medium mb-2">Preferred Role</label>

              <input
                type="text"
                name="preferredRole"
                value={profile.preferredRole}
                onChange={handleChange}
                placeholder="Full Stack Developer"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Preferred Location */}

            <div>
              <label className="block font-medium mb-2">
                Preferred Location
              </label>

              <input
                type="text"
                name="preferredLocation"
                value={profile.preferredLocation}
                onChange={handleChange}
                placeholder="Bangalore"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Work Authorization */}

            <div>
              <label className="block font-medium mb-2">
                Work Authorization
              </label>

              <input
                type="text"
                name="workAuthorization"
                value={profile.workAuthorization}
                onChange={handleChange}
                placeholder="Indian Citizen"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Visa */}

            <div className="flex items-center gap-3">
              <input
                id="visaRequired"
                type="checkbox"
                name="visaRequired"
                checked={profile.visaRequired}
                onChange={handleChange}
                className="w-5 h-5"
              />

              <label htmlFor="visaRequired" className="font-medium">
                Visa Sponsorship Required
              </label>
            </div>

            {/* Resume */}

            {userData?.resume && (
              <div>
                <label className="block font-medium mb-2">Resume</label>

                <a
                  href={userData.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-lg"
                >
                  View Resume
                </a>
              </div>
            )}

            {/* Button */}

            <div className="pt-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg font-medium"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
