import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/Component/Header.jsx"
import Footer from "./src/Component/Footer.jsx"
import Body from "./src/Component/Body.jsx"
import AboutUs from "./src/Component/AboutUs.jsx"
import Service from "./src/Component/Service.jsx"
import Error from "./src/Component/Error.jsx"
import RestoMenuPage from "./src/Component/RestoMenuPage.jsx"
import ShimmerCard from "./src/Component/ShimmerUI.jsx";
import ContactUs from "./src/Component/ContactUs.jsx"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const  App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [ 
      {
    path: "/",
    element: <Body />,
     },
      {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Service",
    element: <Service />,
  },
    {
    path: "/Restaurants/:resId",
    element: <RestoMenuPage />
  },
   {
    path: "/ContactUs",
    element: <ContactUs />
  }, 
 ],
  
}
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router={AppRouter} />);