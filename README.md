# 📸 Memories App - MERN Stack

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to **create, like, and delete memory posts** with images, titles, and descriptions.

---

## 🚀 Features
✅ Upload memories with **images, titles, and descriptions**  
✅ **Like and delete** posts  
✅ Fully responsive UI using **Material-UI**  
✅ Backend using **Express & MongoDB** for data storage  
✅ State management with **Redux**  

---

## 📂 **Project Structure**
/memories-app ├── /server → Express & MongoDB backend ├── /app → React frontend ├── package.json → Runs both frontend & backend together ├── README.md → Documentation


---

## 🔧 **Installation & Setup (Run Locally)**

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/memories-app.git
cd memories-app
2️⃣ Install Dependencies
Run this command to install dependencies for both frontend and backend:

npm run install-all
3️⃣ Start the Application
Run this command to start both the frontend and backend at the same time:

npm start
This will:

Start the Express server.
Start the React frontend.
🛠 Manually Running Backend & Frontend Separately
Start Backend:

cd server
npm start
Start Frontend:

cd app
npm start
🛠 Backend (Express & MongoDB)

Setup MongoDB Locally
Install MongoDB Community Edition: MongoDB Download
Start MongoDB:
mongod
Set up your MongoDB connection in server.js:
const mongoURI = "mongodb://localhost:27017/memoriesDB";
Start the backend:
cd server
npm start
🎨 Frontend (React + Redux)

The frontend is built with React & Redux.
Uses Material-UI for styling.
Handles image uploads and user interactions.
To start the frontend:
cd app
npm start
🔥 API Endpoints

Method	Endpoint	Description
GET	/posts	Get all posts
POST	/posts	Create a new post
PATCH	/posts/:id	Update a post
DELETE	/posts/:id	Delete a post
