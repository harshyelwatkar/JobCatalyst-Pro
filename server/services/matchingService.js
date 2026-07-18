export const calculateMatch = (user, job) => {
  // Profile incomplete
  if (
    !user.skills?.length ||
    user.gpa === undefined ||
    !user.preferredRole ||
    !user.preferredLocation
  ) {
    return {
      matchScore: null,
      matchLevel: "Incomplete",
      matchedOn: [],
      missingSkills: [],
    };
  }

  let score = 0;
  const matchedOn = [];

  // Skills (50 points)
  const jobSkills = job.skills || [];
  const userSkills = user.skills || [];

  const matchedSkills = jobSkills.filter((skill) =>
    userSkills.some(
      (userSkill) => userSkill.toLowerCase() === skill.toLowerCase(),
    ),
  );

  if (jobSkills.length > 0) {
    score += (matchedSkills.length / jobSkills.length) * 50;
  }

  if (matchedSkills.length) matchedOn.push("Skills");

  // GPA (20)
  if (user.gpa >= (job.minimumGPA || 0)) {
    score += 20;
    matchedOn.push("GPA");
  }

  // Preferred Role (15)
  if (
    user.preferredRole &&
    job.title.toLowerCase().includes(user.preferredRole.toLowerCase())
  ) {
    score += 15;
    matchedOn.push("Role");
  }

  // Preferred Location (10)
  if (
    user.preferredLocation &&
    user.preferredLocation.toLowerCase() === job.location.toLowerCase()
  ) {
    score += 10;
    matchedOn.push("Location");
  }

  // Work Authorization (5)
  if (!user.visaRequired || job.visaSponsorship) {
    score += 5;
    matchedOn.push("Work Authorization");
  }

  score = Math.round(score);

  let matchLevel = "Low";

  if (score >= 81) matchLevel = "Excellent";
  else if (score >= 61) matchLevel = "Good";
  else if (score >= 41) matchLevel = "Average";

  return {
    matchScore: score,
    matchLevel,
    matchedOn,
    missingSkills: jobSkills.filter(
      (skill) =>
        !userSkills.some(
          (userSkill) => userSkill.toLowerCase() === skill.toLowerCase(),
        ),
    ),
  };
};
