# Adarsh Automobiles - Dealership Website

A complete, professional, fully responsive full-stack website built for Adarsh Automobiles, an Authorized Hero MotoCorp Two-Wheeler Dealer in Ner, Dhule. 

The website uses a modern MERN stack architecture with a highly premium, Hero-inspired dark UI theme. It focuses exclusively on two-wheelers and includes a working backend API to handle customer enquiries.

---

## 🌟 Features
* **Premium Hero MotoCorp UI:** Custom Apple-level spacing, glassmorphism, and dark theme (#0D0D0D, #E8001A, #FAFAFA).
* **Scroll Animations:** Native Javascript intersection observers trigger smooth fade-and-slide reveals as users scroll.
* **Animated Data Counters:** JustDial ratings and customer counts animate from zero upon entering the viewport.
* **Dynamic Bike Filtering:** Instantly filter the inventory (Motorcycles, Scooters, Electric) with smooth scaling transitions.
* **Smart Enquire Button:** Clicking "Enquire Now" on any bike automatically scrolls to the contact form and pre-fills the model.
* **Full-Stack Form Submission:** Form data is posted to an Express backend and saved to MongoDB Atlas, showing a custom 5-second success notification.
* **Mobile First:** 100% responsive with a mobile hamburger navigation.

---

## 🛠️ Tech Stack

**Frontend:**
* React.js (Vite)
* Custom CSS (CSS Variables, Flexbox, CSS Grid)
* Axios (API requests)

**Backend:**
* Node.js
* Express.js
* MongoDB Atlas & Mongoose
* CORS & Dotenv

---

## 📁 Folder Structure

```
Adarsh-Automobiles/
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       └── components/
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── Stats.jsx
│           ├── WhyChooseUs.jsx
│           ├── Testimonials.jsx
│           ├── About.jsx
│           ├── Bikes.jsx
│           ├── Services.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
│
└── backend/
    ├── package.json
    ├── server.js
    ├── .env
    ├── models/
    │   └── Enquiry.js
    ├── routes/
    │   └── enquiryRoutes.js
    └── controllers/
        └── enquiryController.js
```

---

## 🚀 Installation & Running

### 1. Backend Setup

Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
```

Configure your environment variables inside `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/adarsh  # Replace with your MongoDB Atlas connection string
```

Start the backend server:
```bash
npm run dev
```

### 2. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
```

Start the Vite development server:
```bash
npm run dev
```

Your React app will typically run on `http://localhost:5173`.

---

## 📡 API Endpoints

### Enquiries
* **`POST /api/enquiries`** - Submit a new contact form enquiry.
  * **Payload:** `{ fullName, mobile, interest, model, message }`
* **`GET /api/enquiries`** - Fetch all submitted enquiries (sorted by date).

---

## 📸 Screenshots

*(Add screenshots of your application here)*
* `hero-section.png`
* `bike-filtering.png`
* `contact-form.png`

---

## 👤 Author
Developed by the Adarsh Automobiles Development Team.
