import multer from "multer";

// Store uploaded files in memory instead of writing them to disk.
// This is compatible with serverless platforms like Vercel.
const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

export default upload;