import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { calculateMatch } from "../utils/matching";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);

  const match = userData ? calculateMatch(userData, job) : null;

  return (
    <div className="border p-6 shadow rounded">
      <div className="flex justify-between items-center">
        <img className="h-8" src={job.companyId.image} alt="" />
      </div>

      <h4 className="font-medium text-xl mt-2">{job.title}</h4>

      {/* Match Badge */}
      {userData && (
        <div className="mt-3">
          {match?.matchScore != null ? (
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                match.matchScore >= 81
                  ? "bg-green-100 text-green-700"
                  : match.matchScore >= 61
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {match.matchScore >= 81
                ? "🟢"
                : match.matchScore >= 61
                  ? "🟡"
                  : "🔴"}{" "}
              {match.matchScore}% Match
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
              ⚪ Complete Profile
            </span>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 mt-3 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.location}
        </span>

        <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>

      <p
        className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 150),
        }}
      />

      <div className="mt-4 flex gap-4 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Apply Now
        </button>

        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-500 border border-gray-500 rounded px-4 py-2"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
