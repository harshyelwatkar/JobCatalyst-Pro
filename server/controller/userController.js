import Job from "../models/Job.js";
import JobApplication from "../models/JobApplication.js";
import User from "../models/User.js";
import uploadToCloudinary from "../utils/cloudinaryUpload.js";
import { clerkClient } from "@clerk/express";

// Get user data
export const getUserData = async (req, res) => {
  try {
    const { userId } = req.auth();

    const user = await ensureUserExists(userId);

    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Ensure MongoDB user exists for authenticated Clerk user
const ensureUserExists = async (userId) => {
  let user = await User.findById(userId);

  if (user) return user;

  const clerkUser = await clerkClient.users.getUser(userId);

  user = await User.create({
    _id: clerkUser.id,
    name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
    email: clerkUser.emailAddresses[0]?.emailAddress || "",
    image: clerkUser.imageUrl,
    resume: "",
    skills: [],
    preferredRole: "",
    preferredLocation: "",
    workAuthorization: "",
    visaRequired: false,
  });

  return user;
};

//Apply for a job
export const applyForJob = async (req, res) => {
  const { jobId } = req.body;

  const { userId } = req.auth();

  try {
    const isAlreadyApplied = await JobApplication.find({ jobId, userId });

    if (isAlreadyApplied.length > 0) {
      return res.json({ success: false, message: "Already Applied" });
    }

    const jobData = await Job.findById(jobId);

    if (!jobData) {
      return res.json({ success: false, message: "Job Not Found" });
    }

    await JobApplication.create({
      companyId: jobData.companyId,
      userId,
      jobId,
      date: Date.now(),
    });

    res.json({ success: true, message: "Applied Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Get user applied applications
export const getUserJobApplications = async (req, res) => {
  try {
    const { userId } = req.auth();

    const applications = await JobApplication.find({ userId })
      .populate("companyId", "name email image")
      .populate("jobId", "title description location category level salary")
      .exec();

    if (!applications) {
      return res.json({
        success: false,
        message: "No job applications found for this user",
      });
    }

    return res.json({ success: true, applications });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Update user profile(resume)
export const updateUserResume = async (req, res) => {
  try {
    const { userId } = req.auth();

    const resumeFile = req.file;

    const userData = await ensureUserExists(userId);

    if (resumeFile) {
      const resumeUpload = await uploadToCloudinary(resumeFile.buffer, "auto");

      userData.resume = resumeUpload.secure_url;
    }

    await userData.save();

    return res.json({
      success: true,
      message: "Resume updated",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Update user profile details
export const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.auth();

    const {
      skills,
      gpa,
      preferredRole,
      preferredLocation,
      workAuthorization,
      visaRequired,
    } = req.body;

    const userData = await ensureUserExists(userId);

    userData.skills = Array.isArray(skills) ? skills : [];
    userData.gpa = gpa;
    userData.preferredRole = preferredRole;
    userData.preferredLocation = preferredLocation;
    userData.workAuthorization = workAuthorization;
    userData.visaRequired = visaRequired;

    await userData.save();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      user: userData,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
