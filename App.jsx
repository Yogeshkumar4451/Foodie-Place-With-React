import "./index.css";
import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "./src/components/Header.jsx";
import Footer from "./src/components/Footer.jsx";
import Body from "./src/pages/Body.jsx";
import AboutUs from "./src/pages/AboutUs.jsx";
import Service from "./src/pages/Service.jsx";
import Error from "./src/pages/Error.jsx";
import RestoMenuPage from "./src/pages/RestoMenuPage.jsx";
import ContactUs from "./src/pages/ContactUs.jsx";

import useOnlineStatus from "./src/hooks/useOnlineStatus.jsx";
import ShimmerCard from "./src/components/ShimmerUI.jsx";
import UserContext from "./src/utils/UserContext";

const Grocery = lazy(() => import("./src/pages/Grocery.jsx"));

/* ================= APP LAYOUT ================= */

const App = () => {
  const isOnline = useOnlineStatus();

  // ✅ GLOBAL LOGIN STATE (SOURCE OF TRUTH)
    const [user, setUser] = useState(null);

  if (!isOnline) {
    return (
      <div className="offline-screen">
        <div className="offline-box">
          <h1>🔴 Connection Lost</h1>
          <p>Your Internet Is Offline. Please Check Your Network.</p>
        </div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <Header />

        <Suspense fallback={<ShimmerCard />}>
          <Outlet />
        </Suspense>

        <Footer />
      </div>
    </UserContext.Provider>
  );
};

/* ================= ROUTER ================= */

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Service", element: <Service /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Restaurants/:resId", element: <RestoMenuPage /> },
      { path: "/grocery", element: <Grocery /> },
    ],
  },
]);

/* ================= ROOT ================= */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
