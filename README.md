# CityFix – Civic Issue Resolution Platform

**CityFix** is a modern, scalable platform built to empower citizens, improve civic transparency, and enable governments to act on real issues more effectively.

> 📢 "Fixing Cities. Empowering Citizens."

---

## 🚀 Features

- 📍 **Geo-tagged Issue Reporting** – Report problems with photos and live locations
- 🗳️ **Community Voting** – Prioritize the most urgent issues
- 🔄 **Real-Time Status Tracking** – Integrated with government/public APIs
- 🔗 **Leader Tagging** – Automatically notifies local leaders (e.g., MLA, Councillor)
- 📢 **Social Media Sharing** – Share issues publicly to generate attention
- 👥 **Role-Based Dashboards** – Separate views for Citizens, Government, and Admin
- 🗂️ **Image Upload** – Via ImageKit for optimized delivery

---

## 🛠️ Tech Stack

### Frontend
- **React.js** + **Tailwind CSS**

### Backend
- **Node.js**, **Express.js**

### Database
- **MongoDB Atlas**

### Auth & Storage
- **JWT** Authentication  
- **ImageKit** for media uploads  
- **Google Maps API** for location services

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
# Server Configuration
PORT=5000

# Database
MONGO_URI=<your-mongodb-uri>

# Initial Admins
FIRST_ADMIN_EMAIL=<email>
FIRST_ADMIN_PASSWORD=<password>
SECOND_ADMIN_EMAIL=<email>
SECOND_ADMIN_PASSWORD=<password>

# Security Keys
ADMIN_SECRET_KEY=<admin-secret>
JWT_SECRET=<your-long-jwt-secret>

# ImageKit (Media Upload)
IMAGEKIT_PUBLIC_KEY=<your-public-key>
IMAGEKIT_PRIVATE_KEY=<your-private-key>
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/cityfix
```

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/cityfix.git
cd cityfix/frontend
cd cityfix/backend

# Install backend dependencies
npm install (frontend and backend)

# Setup .env file (see above)

# Run the server
npm run dev (frontend)
npx nodemon server.js (backend)
```

---

## 📂 Folder Structure

```
cityfix/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── src/assets
│   ├── src/components
│   ├── src/App.jsx
│   ├── src/index.css
│   └── src/main.jsx
│
├── .gitignore
└── README.md
```

---

## ✨ Future Scope

- 📱 Launch mobile apps (Android/iOS)
- 🧠 AI auto-tagging for issues using image detection
- 🏙️ Local government partnerships
- 🪙 Reward and leaderboard system for civic contributors

---

## 👨‍💻 Author

- **Divyansh Goyal** – [LinkedIn](https://linkedin.com/in/divyanshgoyal777) | [GitHub](https://github.com/divyanshgoyal777)
- **Animesh Prakash** – [LinkedIn](https://www.linkedin.com/in/animesh-prakash-139b47309) | [GitHub](https://github.com/animesh-prakash1607)

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.

---

### 🔒 Note to Reviewers

All sensitive keys have been removed from the repo. The platform supports secure JWT authentication, image uploads via ImageKit, and robust backend routing.