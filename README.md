# 🚀 JobCatalyst Pro – Smart Job Portal Platform

JobCatalyst Pro is a modern full-stack job portal designed to streamline the recruitment process for both recruiters and job seekers. Built using the MERN Stack, it provides an intuitive, secure, and scalable platform where recruiters can efficiently manage hiring while candidates can discover opportunities, optimize their profiles, and apply with confidence.

Unlike traditional job portals, JobCatalyst Pro introduces an **AI-powered Job Match Dashboard** that analyzes candidate profiles against job requirements to provide personalized compatibility scores, skill gap analysis, and actionable insights, enabling smarter job applications.

<img width="1917" height="923" alt="job_catalyst" src="https://github.com/user-attachments/assets/79d8c6e6-fdd0-4a0e-a0bd-fc0757b69899" />

---

# ✨ Key Features

## 👨‍💼 Authentication & Authorization
- Secure authentication powered by **Clerk**
- Role-based access for **Recruiters** and **Job Seekers**
- Protected routes and secure API access using JWT tokens
- Automatic user provisioning and profile management

---

## 💼 Recruiter Portal

Recruiters can:

- Create and publish job listings
- Edit or delete posted jobs
- View all active job postings
- Track applicants for each job
- Define:
  - Required Skills
  - Minimum GPA
  - Work Mode (Remote / Hybrid / On-site)
  - Visa Sponsorship Availability
  - Preferred Location
  - Salary
  - Experience Level

---

## 👨‍🎓 Job Seeker Portal

Candidates can:

- Build and manage professional profiles
- Upload resumes securely via Cloudinary
- Update technical skills using a searchable skill selector
- Maintain GPA and career preferences
- Specify:
  - Preferred Role
  - Preferred Location
  - Work Authorization
  - Visa Requirement
- Browse available opportunities
- Apply directly to jobs
- Track applied jobs

---

# 🤖 Smart Job Match Dashboard

One of the standout features of JobCatalyst Pro is its intelligent **Job Match Dashboard**.

For every job, the application calculates:

- 🎯 Overall Match Percentage
- 📈 Match Level (Excellent / Good / Fair / Low)
- ✅ Matched Skills
- ⚠️ Missing Skills
- 📊 Personalized compatibility insights

This enables candidates to quickly understand how well their profile aligns with each opportunity before applying.

---

# 🔍 Smart Search & Filtering

- Browse all available jobs
- View detailed job descriptions
- Filter opportunities by category
- Clean and responsive job browsing experience

---

# ☁️ Cloud Storage Integration

- Secure resume uploads
- Company logo uploads
- Image optimization using Cloudinary

---

# 📱 Responsive Modern UI

- Fully responsive design
- Optimized for Desktop, Tablet and Mobile
- Clean and intuitive user experience
- Toast notifications for important actions
- Smooth navigation throughout the application

---

# 🔒 Security

- Clerk Authentication
- Protected APIs
- Role-based authorization
- Secure file uploads
- Environment variable protection
- MongoDB data validation

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router
- Axios
- Tailwind CSS
- React Quill
- React Toastify

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication

- Clerk Authentication

## Cloud Storage

- Cloudinary

## Deployment

- Vercel
- MongoDB Atlas

## Version Control

- Git & GitHub

---

# 📂 Project Structure

```
JobCatalyst-Pro/
│
├── client/          # React Frontend
├── server/          # Express Backend
├── README.md
└── package.json
```

---

# ⚙️ Installation & Setup

## Clone the Repository

```bash
git clone <repository-url>
cd JobCatalyst-Pro
```

---

## Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

## Configure Environment Variables

### Client (.env)

```env
VITE_BACKEND_URL=
VITE_CLERK_PUBLISHABLE_KEY=
```

### Server (.env)

```env
PORT=
MONGODB_URI=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## Run the Application

### Backend

```bash
cd server
npm run server
```

### Frontend

```bash
cd client
npm run dev
```

---

# 🚀 Future Enhancements

- AI-powered resume analysis
- Personalized job recommendations
- Email notifications
- Advanced search with multiple filters
- Interview scheduling
- Recruiter analytics dashboard
- Resume parsing
- Company verification badges
- Bookmark & save jobs
- Real-time chat between recruiters and candidates

---

# 🎯 Highlights

- ✅ AI-Powered Job Match Dashboard
- ✅ Secure Clerk Authentication
- ✅ Role-Based Access Control
- ✅ Resume & Logo Uploads
- ✅ Recruiter Management Portal
- ✅ Candidate Management Portal
- ✅ Responsive Modern UI
- ✅ Cloudinary Integration
- ✅ MongoDB Atlas Database
- ✅ Production Ready MERN Stack Architecture

---

# 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!
