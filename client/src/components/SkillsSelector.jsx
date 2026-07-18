import React, { useMemo, useState } from "react";
import { allSkills } from "../assets/skillsList";

const SkillsSelector = ({ skills, setSkills }) => {
  const [query, setQuery] = useState("");

  const filteredSkills = useMemo(() => {
    if (!query.trim()) return [];

    return allSkills
      .filter(
        (skill) =>
          skill.toLowerCase().includes(query.toLowerCase()) &&
          !skills.includes(skill),
      )
      .sort()
      .slice(0, 8);
  }, [query, skills]);

  const addSkill = (skill) => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    if (!skills.includes(trimmedSkill)) {
      setSkills([...skills, trimmedSkill]);
    }

    setQuery("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    addSkill(query);
  };

  return (
    <div className="space-y-4 relative">
      <input
        type="text"
        value={query}
        placeholder="Search or type a skill and press Enter..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {query && filteredSkills.length > 0 && (
        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredSkills.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => addSkill(skill)}
              className="block w-full text-left px-4 py-2 hover:bg-blue-50"
            >
              {skill}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 min-h-[48px]">
        {skills.length === 0 && (
          <p className="text-gray-400 text-sm">No skills selected.</p>
        )}

        {[...skills]
          .sort((a, b) => a.localeCompare(b))
          .map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 text-sm"
            >
              <span>{skill}</span>

              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="ml-1 rounded-full px-1 hover:bg-red-500 hover:text-white transition"
              >
                ✕
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillsSelector;
