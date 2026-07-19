import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const uploadToCloudinary = (buffer, resourceType = "auto") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      },
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export default uploadToCloudinary;
