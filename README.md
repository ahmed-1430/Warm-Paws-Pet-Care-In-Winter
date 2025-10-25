#  WarmPaws – Pet Care in Winter

### **Assignment Category:** Assignment-09_category_rose  
**Theme:** A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.

---

##  Live Demo
 [Live Site URL](https://b-12a-09-warm-paws-pet-care.web.app/)  
 [GitHub Repository](https://github.com/programming-hero-web-course2/b12-a9-firesheild-ahmed-1430)

---

##  Project Purpose

**WarmPaws** is a single-page React web application built to help pet owners take extra care of their furry companions during the winter season.  
It brings together everything in one cozy interface — from **local pet care services**, **winter clothing**, **grooming options**, to **expert vet tips** — making it a friendly and reliable winter guide for pet lovers.

---

##  Key Features

###  **Home Page**
- A warm, winter-themed **hero carousel** built using **Swiper.js**.
- **Popular Winter Services** section that dynamically displays JSON-based service data.
- **Winter Care Tips**, **Expert Vets**, and **Winter Pet Products** sections, all animated with **AOS**.
- Fully responsive layout across mobile, tablet, and desktop.

###  **Authentication System**
- **Login** and **Signup** pages with:
  - Firebase Authentication
  - Google Social Login
  - Password validation (Uppercase, Lowercase, Min 6 chars)
  - Password visibility toggle (eye icon)
- **Forgot Password** functionality (redirects user to Gmail after reset).

###  **Profile Management**
- Displays user info (Name, Email, Image).
- Functional **Update Profile** using `updateProfile()`.

###  **Service Details Page**
- Protected Route — accessible only when logged in.
- Displays complete service info from JSON.
- Includes **Book Service form** with success toast notifications.

###  **Notifications**
- Real-time success/error messages with **React Hot Toast**.

###  **Design & Responsiveness**
- Minimalist, modern UI with warm tones and soft shadows.
- Subtle scroll animations powered by **AOS**.
- Fully responsive — no crashes or reload errors on route navigation.

---

##  Technologies Used

### **Frontend Stack**
- React.js (Vite)
- React Router DOM
- Tailwind CSS / DaisyUI

### **Animation & Interactivity**
- **AOS** (Animate on Scroll)
- **Swiper.js** (for carousel/slider)
- **React Hot Toast** (for notifications)

### **Authentication**
- Firebase Authentication
- Google Sign-In
- Environment Variables for security (`.env`)

### **Deployment**
- Hosted on **Netlify** (SPA mode, route-safe reloads)

---

##  NPM Packages Used

| Package | Purpose |
|----------|----------|
| **aos** | Smooth scroll-based animations for all sections |
| **react-hot-toast** | Success/error notifications on user actions |
| **swiper** | Beautiful, responsive hero slider on homepage |