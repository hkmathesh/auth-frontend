# 🔐 Full-Stack Authentication System

This is a simple full-stack authentication system built using **Node.js (Express)** for the backend and **React (Vite + TailwindCSS)** for the frontend. It supports user registration and login functionality with secure password hashing and JWT-based authentication.

---

## 🔧 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB, bcrypt, JSON Web Tokens (JWT)
- **Database:** MongoDB (Local or Cloud - MongoDB Atlas)

---

## 📦 Folder Structure

auth-backend/
│
├── config/
│   └── db.js              # MongoDB connection logic
│
├── controllers/
│   └── authController.js  # Business logic for registration and login
│
├── models/
│   └── User.js            # Mongoose User schema/model
│
├── routes/
│   └── auth.js            # API routes for /register and /login
│
├── .env                   # Environment variables (e.g., MONGO_URI, JWT_SECRET)
├── .gitignore             # Files/folders to ignore in Git
├── package.json           # Project metadata and dependencies
├── server.js              # Entry point for Express app
└── README.md              # Project documentation

auth-frontend/
├── public/                  # Static assets
│   └── vite.svg             # Default Vite asset (can be replaced or deleted)
│
├── src/                     # Source files
│   ├── components/          # Reusable UI components      
│   │   └── PrivateRoute.jsx # Route protection component
│   │
│   ├── pages/               # Page components
│   │   ├── Home.jsx        
│   │   └── Login.jsx    
|   |   └── Register.jsx  
│   │
│   ├── App.jsx              # Root component with routes
│   ├── main.jsx             # Vite entry point
│   └── App.css              # Tailwind base styles
│
├── .gitignore               # Ignore node_modules, dist, etc.
├── package.json             # Project metadata and dependencies
└── vite.config.js           # Vite config

---

## 🧪 Features

User registration with validation

Login with JWT token

Protected routes using localStorage token

Form error handling and user-friendly messages

Clean UI using TailwindCSS

---

## ✅ Endpoints Summary

POST /api/register → Registers a user

POST /api/login → Logs in a user and returns JWT token

---

## 📌 Notes

Make sure MongoDB is running locally or provide a valid Atlas URI.

JWT is stored in localStorage on the frontend.

After successful login, users are redirected to the Home page.

All passwords are securely hashed using bcrypt.


---

## 📩 Contact

For any queries related to this project, feel free to reach out.

