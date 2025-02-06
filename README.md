# 📸 Memories App - MERN Stack

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to **create, like, and delete memory posts** with images, titles, and descriptions.

---

## 🚀 Features  
✅ Upload memories with **images, titles, and descriptions**  
✅ **Like and delete** posts  
✅ **Fully responsive UI** built with **Material-UI**  
✅ Backend powered by **Express & MongoDB** for data storage  
✅ **State management** using **Redux**  

---

## 📂 Project Structure  

```
/memories-app
├── /server      → Express & MongoDB backend  
├── /app         → React frontend  
├── package.json → Runs both frontend & backend together  
├── README.md    → Documentation  
```

---

## 🔧 Installation & Setup (Run Locally)  

### 1️⃣ Clone the Repository  

```sh
git clone https://github.com/your-username/memories-app.git
cd memories-app
```

### 2️⃣ Install Dependencies  

Run the following command to install dependencies for both frontend and backend:

```sh
npm run install-all
```

### 3️⃣ Start the Application  

To run both frontend and backend simultaneously:

```sh
npm start
```

This will:  
🚀 Start the **Express server**  
🎨 Start the **React frontend**  

---

## 🛠 Manually Running Backend & Frontend Separately  

### Start Backend  

```sh
cd server
npm start
```

### Start Frontend  

```sh
cd app
npm start
```

---

## 🛠 Backend (Express & MongoDB)  

### **Setup MongoDB Locally**  
1. Install **MongoDB Community Edition** → [MongoDB Download](https://www.mongodb.com/try/download/community)  
2. Start MongoDB:  

```sh
mongod
```

3. Configure MongoDB connection in `server.js`:  

```js
const mongoURI = "mongodb://localhost:27017/memoriesDB";
```

4. Start the backend:

```sh
cd server
npm start
```

---

## 🎨 Frontend (React + Redux)  

- Built with **React & Redux**  
- Uses **Material-UI** for styling  
- Handles **image uploads** and **user interactions**  

To start the frontend:

```sh
cd app
npm start
```

---

## 🔥 API Endpoints  

| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| GET    | `/posts`      | Get all posts       |
| POST   | `/posts`      | Create a new post   |
| PATCH  | `/posts/:id`  | Update a post       |
| DELETE | `/posts/:id`  | Delete a post       |

---

🎉 **Enjoy building and sharing your memories!** 🚀

