# Foodie Place - Dynamic React Food Listing Website

## Project Description

**Foodie Place Is A Fully Functional, Dynamic Food Listing Website Built Using React.**  
It Fetches Restaurant Data Directly From The Swiggy API Using Fetch Calls.  

To Handle CORS Issues During Development, **We Are Using The Proxy URL `"https://proxy.corsfix.com/?"`** Instead Of The Chrome Extension.  
The Website Is Interactive, User-Friendly, And Dynamically Updates The UI Based On User Actions.

---

## Features

- **API Data Fetching:** Real-Time Restaurant Data Fetched From Swiggy API.  
- **Shimmer UI Loading Effect:** Displays Loading Shimmer Cards While Fetching Data.  
- **Login/Logout Button:** Toggle Functionality Using `useState` To Demonstrate Dynamic Re-Rendering.  
- **Dynamic Search Bar:** Filters Restaurants Based On User Input And Allows Resetting To Original Data.  
- **Top Rated Filter Button:** Filters Restaurants With Average Rating Above 4 Using Mock Data.  
- **Reusable Components:** Each Restaurant Card And UI Element Is Modular And Reusable.  
- **Conditional Rendering:** Displays Loading, Filtered, Or Full Data Based On State.

---

## React Router v6 Features

- **createBrowserRouter:** Creates A Browser Router Instance.  
- **RouterProvider:** Provides Router Context To The App.  
- **Outlet:** Renders Child Routes In The Parent Layout.  
- **useRouteError:** Handles Errors For Unmatched Routes Or Failed Navigation.

---

## React Concepts Covered

- Functional Components & JSX  
- `useState` For State Management  
- `useEffect` For API Calls And Side Effects  
- Conditional Rendering (If-Else & Ternary)  
- Dynamic Rendering Using `.map()`  
- Component Reusability  
- State-Driven UI Updates & Re-Rendering  
- Virtual DOM Understanding  
- React Router v6: Nested Routing, Dynamic Routes, Error Handling

---

## Project Structure

/FoodiePlace
├─ /src
│ ├─ /Assets/images
│ │ └─ Logo.js
│ ├─ /Component
│ │ ├─ AboutUs.jsx
│ │ ├─ Body.jsx
│ │ ├─ ContactUs.jsx
│ │ ├─ Error.jsx
│ │ ├─ Footer.jsx
│ │ ├─ Header.jsx
│ │ ├─ RestoMenuPage.jsx
│ │ ├─ Service.jsx
│ │ └─ ShimmerUI.jsx
│ ├─ /Utils
│ │ ├─ Carditem-Template.jsx
│ │ └─ MockData.jsx
│ ├─ App.jsx
│ ├─ style.css
│ └─ index.html
├─ package.json
├─ package-lock.json
└─ dist

yaml
Copy code

---

## Components & Features

### App & Routing

**File:** `App.jsx`  

- Main Layout Component With Header, Footer, And Dynamic Outlet For Rendering Child Routes.  
- Routing Implemented Using React Router v6:  
  - **createBrowserRouter:** Browser Router Instance Creation  
  - **RouterProvider:** Provides Router To App  
  - **Outlet:** Renders Nested Routes Inside Layout  
  - **useRouteError:** Handles Errors In Routing (`Error.jsx`)  
- Routes Included:  
  - `/` → Home (`Body.jsx`)  
  - `/AboutUs` → About Page  
  - `/Service` → Services Page  
  - `/ContactUs` → Contact Page  
  - `/Restaurants/:resId` → Dynamic Restaurant Menu Page (`RestoMenuPage.jsx`)  
- Error Handling For Unmatched Paths (`Error.jsx`)  

---

### RestoMenuPage Component

**File:** `RestoMenuPage.jsx`  

- Fetches Restaurant Menu Dynamically Using `resId` From Route Parameters (`useParams`).  
- Displays Restaurant Info (Name, Rating, Cost, Category, Description, Image).  
- Conditional Rendering With ShimmerUI While Data Is Loading.  

---

### ContactUs Component

**File:** `ContactUs.jsx`  

- Simple Contact Form Capturing Name, Email, Message.  
- Form State Handled With `useState` And Submission Logged To Console.  

---

### AboutUs Component

**File:** `AboutUs.jsx`  

- Static Page Displaying Project/Company Information.  

---

### Service Component

**File:** `Service.jsx`  

- Static Page Listing Services Offered By The Website.  

---

### Utilities

- **Carditem-Template.jsx:** Template For Rendering Restaurant Cards.  
- **MockData.jsx:** Mock Data For Initial Display And Testing Filtering.  

---

## How It Works

1. **Page Load:** `Body.jsx` Fetches Restaurant Data From Swiggy API.  
2. **Loading State:** ShimmerUI Shows Loading Placeholders.  
3. **Data Display:** Fetched Data Stored In State And Rendered Dynamically.  
4. **Filtering:** Search Bar Filters Restaurants, Top Rated Button Shows Restaurants With Rating > 4.  
5. **Login/Logout:** Demonstrates State-Based Dynamic Re-Rendering.  

---

## Routing

- Nested Routes Rendered Via `Outlet`.  
- `useRouteError` Handles Errors For Unmatched Routes.