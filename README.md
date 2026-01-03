# 🚀 Task Manager – Full Stack Web Application

A scalable full-stack task management web application built with React, Node.js, Express, and MongoDB, featuring JWT-based authentication, protected routes, and a modern dashboard UI.

# 📌 Features
## 🔐 Authentication & Security

- User Registration & Login

- JWT-based authentication

- Protected dashboard routes

- Secure password hashing using bcrypt

- Token-based authorization middleware

## 📊 Dashboard

- View user profile information

- Create, read, and delete tasks

- Search tasks in real time

- Persistent data storage

- Logout with secure session cleanup

## 🎨 UI / UX

- Modern, responsive UI built with Tailwind CSS

- Clean card-based layout

- Icon-based logout for better UX

- Mobile-friendly design

# 🛠️ Tech Stack
## Frontend

- React (Vite)

- Tailwind CSS

- React Router DOM

- Axios

## Backend

- Node.js

- Express.js

- MongoDB (Mongoose)

- JSON Web Token (JWT)

- bcrypt

# 📁 Project Structure
project-root/
 ├── client/               # Frontend (React)
 │   ├── src/
 │   │   ├── pages/
 │   │   ├── components/
 │   │   ├── services/
 │   │   └── App.jsx
 │   └── package.json
 │
 ├── server/               # Backend (Node + Express)
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── middleware/
 │   ├── config/
 │   └── server.js
 │
 └── README.md

# 🔑 API Overview
## Auth Routes

- POST /api/auth/register – Register user

- POST /api/auth/login – Login user (returns JWT)

## Task Routes (Protected)

- GET /api/tasks – Get all tasks

- POST /api/tasks – Create task

- DELETE /api/tasks/:id – Delete task

## ▶️ How to Run Locally
# Clone the repository
 git clone https://github.com/your-username/your-repo-name.git

# Backend setup
 cd server
 npm install
 npm run dev

# Frontend setup
 cd ../client
 npm install
 npm run dev


# Create a .env file in server:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## 🚀 Scalability & Production Considerations

- Implement refresh tokens for better session handling

- Add role-based access control (RBAC)

- Use pagination for task APIs

- Centralized error handling and logging

- Rate limiting to prevent abuse

- Deploy frontend on Vercel and backend on Render

- Use Docker for containerization

- Add Redis for caching frequently accessed data
