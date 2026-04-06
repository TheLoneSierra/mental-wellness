# 🧘‍♀️ SerenityAI – AI-Powered Mental Wellness Platform

SerenityAI is a full-stack mental wellness web application designed to help users improve emotional well-being through **mood tracking, journaling, and AI-powered interaction**. It combines modern frontend design with backend API integration to deliver a seamless and calming user experience.

---

## 🚀 Features

- 🧠 **Mood Tracker**  
  Track daily emotions using interactive UI and visualize trends over time.

- ✍️ **Journal System**  
  Write and store personal reflections with a clean, distraction-free interface.

- 🤖 **AI Chatbot**  
  Conversational assistant to support emotional reflection and engagement.

- 🌿 **Daily Affirmations**  
  Dynamic quotes fetched via API with backend integration and fallback handling.

- 📊 **Insights Dashboard**  
  Visual representation of mood patterns and user activity.

- 📱 **Responsive Design**  
  Fully optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

### Frontend

- ReactJS
- TailwindCSS
- React Router
- Fetch API / Axios

### Backend

- NodeJS
- ExpressJS
- MongoDB
- REST APIs

### AI / External APIs

- Gemini AI / OpenAI (chatbot)
- Quote API (affirmations)

---

## 🏗️ Architecture

- Component-based frontend using React with reusable UI components
- RESTful backend with modular routes and middleware
- Client → Backend → External API → Response flow
- Environment-based configuration using `.env`

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/serenityAI.git
cd serenityAI
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file in backend:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection
FRONTEND_URL=http://localhost:5173
```

Run backend:

```bash
npm start
```

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

| Endpoint          | Method | Description              |
| ----------------- | ------ | ------------------------ |
| /api/affirmations | GET    | Fetch random affirmation |
| /api/auth         | POST   | User authentication      |
| /api/health       | GET    | Server health check      |

---

## 📸 Screens

- Landing Page
- Mood Tracker
- Journal Page
- Insights Dashboard

_(Add screenshots here)_

---

## 🎯 Key Learnings

- Full-stack development using MERN stack
- API integration and error handling
- Responsive UI/UX design using TailwindCSS
- React routing and component structuring
- Backend architecture using Express and middleware

---

## ⚠️ Challenges Faced

- Handling third-party API rate limits
- Managing frontend-backend communication
- Designing a calming and accessible UI
- Structuring scalable backend code

---

## 🚀 Future Improvements

- User authentication and personalization
- Daily quote caching system
- Advanced mood analytics (charts)
- AI-based personalized recommendations
- Deployment with CI/CD

---

## 👩‍💻 Author

**Aanchal Pal**  
Software Engineer | Full-Stack Developer
