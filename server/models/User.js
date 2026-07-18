import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    image: {
      type: String,
      required: true,
    },

    resume: {
      type: String,
      default: "",
    },

    skills: {
      type: [String],
      default: [],
    },

    gpa: {
      type: Number,
      min: 0,
      max: 10,
    },

    preferredRole: {
      type: String,
      default: "",
      trim: true,
    },

    preferredLocation: {
      type: String,
      default: "",
      trim: true,
    },

    workAuthorization: {
      type: String,
      default: "",
      trim: true,
    },

    visaRequired: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
