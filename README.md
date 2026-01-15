# 🍔 Foodie Place – React Food Ordering App

Foodie Place is a modern React-based food ordering application inspired by real-world platforms like Swiggy and Zomato.  
The project focuses on **clean component architecture**, **reusability**, and **real-world React patterns**.

---

## 🚀 Features

- 🏪 Restaurant listing and dynamic menu pages
- 📋 Reusable Accordion component (used across multiple pages)
- 🧠 Proper separation of Data Layer and UI Layer
- ⚡ Custom Hooks for data fetching
- ⏳ Shimmer UI for loading states
- 🔐 Login / User state management using **Context API**
- 🔁 Toggle Login / Logout UI without prop drilling
- 📱 Responsive UI with Tailwind CSS

---

## 🔐 Authentication UI (Context API)

The application uses **React Context API** to manage user login state globally.

### How It Works:
- Default user state: **Guest**
- Clicking the **Login** button updates the global context
- Username changes to **Yogesh Sahu**
- Clicking again resets state back to **Guest**
- Navbar updates instantly without prop drilling

### Why Context API?
- Avoids passing props through multiple components
- Centralized user state management
- Cleaner and scalable architecture

---

## 🧩 Component Architecture

### 1️⃣ Accordion (Reusable UI Component)

- Fully generic and reusable
- Controlled by parent components
- Uses `children` as a slot to render dynamic content
- Used in:
  - About Us page
  - Restaurant Menu page

**Props:**
- `title` – Header text
- `isOpen` – Controls open/close state
- `onToggle` – Callback for toggle action
- `children` – Dynamic content slot

---

### 2️⃣ AboutUs Page (Data + Control Layer)

- Provides static content data
- Controls accordion open/close state
- Passes content to Accordion via props

---

### 3️⃣ Restaurant Menu Page (Advanced Data Layer)

- Fetches live restaurant menu data using a custom hook
- Handles asynchronous API states safely
- Reuses the same Accordion component for menu categories
- Demonstrates defensive rendering and clean state management

---

### 4️⃣ Navbar (Global UI Using Context)

- Consumes user context
- Dynamically updates Login / Username text
- Demonstrates real-world usage of Context API

---

## 🧠 Key Concepts Used

- Controlled Components
- Props & `children`
- React Context API
- Custom Hooks
- Conditional Rendering
- Defensive Rendering for async data
- Separation of Concerns
- Reusable UI patterns

---

## 🛠️ Tech Stack

- **React**
- **React Router**
- **Context API**
- **Tailwind CSS**
- **JavaScript (ES6+)**

---

## 📂 Project Structure (Simplified)

