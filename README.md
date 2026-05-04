# 🧱 Tiles Gallery

Welcome to **Tiles Gallery**, a modern, elegant, and fully responsive Single Page Application (SPA) designed to showcase and manage a premium collection of tiles.

---

## 🚀 Live URL & Repository

- **Live Site URL:** https://your-live-site.vercel.app
- **GitHub Repository:** https://github.com/your-username/tiles-gallery

---

## 🎯 Purpose
The main purpose of the project is to build a modern tile showcase web application where users can browse, view details, search, and manage their profiles seamlessly. The application utilizes the Next.js App Router, BetterAuth with a MongoDB adapter, HeroUI/Tailwind CSS, and toast notifications for user feedback.

---

## ✨ Key Features

### 1. Layout & Navigation
* **Fixed Navbar:** A sleek, fixed, and modern header with a responsive mobile menu.
* **Navigation Links:** Quick access to *Home*, *All Tiles*, and *My Profile*.
* **Authentication Status:** Dynamically switches between **Login** and **Logout** with a user profile avatar.
* **Footer:** Custom footer complete with social media links and a "Contact Us" section.

### 2. Home Page
* **Hero Banner:** Features an engaging heading *"Discover Your Perfect Aesthetic"* and a *"Browse Now"* call-to-action button.
* **Scrolling Marquee:** Highlights new arrivals, weekly features, and community announcements.
* **Featured Tiles:** Displays a curated grid of the top 4 tiles fetched from the server.

### 3. Authentication & Security
* **BetterAuth Integration:** Secured with a MongoDB adapter.
* **Authentication Options:** Email/Password authentication and social login (Google only).
* **Evaluation-Friendly:** No email verification or forgotten password flows to ensure a seamless evaluation process.
* **Notifications:** Uses `react-hot-toast` to provide immediate feedback on success or error states during login/registration.

### 4. Tile Gallery & Details
* **Search & Filter:** A clean HeroUI search bar to find tiles by title.
* **Single Tile Details:** High-resolution preview alongside detailed specifications (Material, Dimensions, Price, Category, and Tags).

### 5. Challenge Requirements
* **My Profile:** A dedicated profile page displaying user information.
* **Update Information Feature:** A dedicated route to update the user's `Name` and `Image URL`.
* **Interactive Packages:** Integrates **SwiperJS** for a dynamic and modern sliding component experience.

---

## 🛠 Tech Stack & Dependencies

* **Framework:** `next` (Next.js App Router)
* **UI Library:** `@heroui/react` & `tailwindcss`
* **Authentication:** `better-auth`
* **Notifications:** `react-hot-toast`
* **Icons:** `react-icons`
* **Slider/Animation:** `swiper` (SwiperJS)
* **Database:** `mongodb`

---

## 🔑 Environment Variables

To run this project locally, create a `.env.local` file in the root directory and use the following keys:

```env
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
Security Note: Make sure to add .env.local to your .gitignore file to protect your secret keys before pushing to GitHub!

📦 Installation & Setup
To run this project locally on your machine, follow these simple steps:

Prerequisites
Make sure you have Node.js and MongoDB installed on your system.

Steps:
1. Clone the repository:

Bash
git clone [https://github.com/your-username/tiles-gallery.git](https://github.com/your-username/tiles-gallery.git)
2. Navigate to the project folder:

Bash
cd tiles-gallery
3. Install dependencies:

Bash
npm install
4. Run the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

📝 JSON Data Format Example
Here is the JSON data format used for the tiles:

JSON
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}