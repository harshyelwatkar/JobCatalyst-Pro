import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations, WorkModes } from "../assets/assets";
import SkillsSelector from "../components/SkillsSelector";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState(0);
  const [skills, setSkills] = useState([]);
  const [minimumGPA, setMinimumGPA] = useState("");
  const [workMode, setWorkMode] = useState("Onsite");
  const [visaSponsorship, setVisaSponsorship] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const { backendUrl, companyToken } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const description = quillRef.current.root.innerHTML;

      const { data } = await axios.post(
        backendUrl + "/api/company/post-job",
        {
          title,
          description,
          location,
          salary,
          category,
          level,
          skills,
          minimumGPA: minimumGPA === "" ? 0 : Number(minimumGPA),
          workMode,
          visaSponsorship,
        },
        {
          headers: { token: companyToken },
        },
      );

      if (data.success) {
        toast.success("Job Added Successfully");
        setTitle("");
        setSalary(0);
        setSkills([]);
        setMinimumGPA("");
        setWorkMode("Onsite");
        setVisaSponsorship(false);
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className="container p-6 w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <div className="w-full">
            <p className="mb-2">Job Title</p>

            <input
              type="text"
              placeholder="Type here"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p className="mb-2">Job Category</p>

              <select
                className="w-full bg-white px-3 py-2 border-2 border-gray-300 rounded"
                onChange={(e) => setCategory(e.target.value)}
              >
                {JobCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <p className="mb-2">Job Location</p>

              <select
                className="w-full bg-white px-3 py-2 border-2 border-gray-300 rounded"
                onChange={(e) => setLocation(e.target.value)}
              >
                {JobLocations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <p className="mb-2">Job Level</p>

              <select
                className="w-full bg-white px-3 py-2 border-2 border-gray-300 rounded"
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="Beginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>
          </div>

          <div>
            <p className="mb-2">Job Salary</p>

            <input
              min={0}
              value={salary}
              type="number"
              placeholder="2500"
              onChange={(e) => setSalary(e.target.value)}
              className="w-40 px-3 py-2 border-2 border-gray-300 rounded"
            />
          </div>

          <div>
            <p className="mb-3 font-medium">Required Skills</p>

            <SkillsSelector skills={skills} setSkills={setSkills} />
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="mb-2">Minimum GPA</p>

              <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="e.g. 8.5"
                value={minimumGPA}
                onChange={(e) => setMinimumGPA(e.target.value)}
                className="border-2 border-gray-300 rounded px-3 py-2 w-32"
              />
            </div>

            <div>
              <p className="mb-2">Work Mode</p>

              <select
                value={workMode}
                onChange={(e) => setWorkMode(e.target.value)}
                className="bg-white border-2 border-gray-300 rounded px-3 py-2"
              >
                {WorkModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-2">Visa Sponsorship</p>

              <select
                value={visaSponsorship ? "Yes" : "No"}
                onChange={(e) => setVisaSponsorship(e.target.value === "Yes")}
                className="bg-white border-2 border-gray-300 rounded px-3 py-2"
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <p className="mb-2 font-medium">Job Description</p>

          <div ref={editorRef} className="bg-white min-h-[420px]"></div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-10 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddJob;
