import { LOGO_URL } from "../Assets/images/Logo";
import {  useContext } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const isOnline = useOnlineStatus();
  const { user, setUser } = useContext(UserContext);



  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Service", path: "/Service" },
    { name: "Contact Us", path: "/ContactUs" },
    { name: "Grocery", path: "/grocery" },
  ];

  const handleAuthToggle = () => {
  if (user) {
    
    setUser(null);
  } else {
    
    setUser({ name: "Yogesh Sahu" });
  }
};

  return (
    <header className="flex items-center justify-between px-8 py-3 bg-gradient-to-br from-blue-600 via-pink-500 to-blue-400 rounded-2xl shadow-2xl">

      <img
        src={LOGO_URL}
        alt="App Logo"
        className="w-16 h-16 cursor-pointer transition-all duration-500 hover:scale-125 hover:rotate-180"
      />

      <nav className="flex items-center gap-5 pr-6">
        <ul className="flex items-center gap-4 px-2 py-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `inline-flex items-center justify-center
                   min-w-[140px] min-h-[44px]
                   px-6 py-2 rounded-3xl font-bold text-base
                   transition-all duration-300 border border-white/30
                   ${
                     isActive
                       ? "bg-white text-purple-600 shadow-2xl scale-105"
                       : "text-white bg-white/20 hover:bg-white/40 hover:scale-105"
                   }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mr-4">

          <span
            className={`w-3.5 h-3.5 rounded-full ${
              isOnline
                ? "bg-green-400 animate-pulse shadow-md shadow-green-400/40"
                : "bg-gray-300"
            }`}
            title={isOnline ? "Online" : "Offline"}
          />

    <button
  onClick={handleAuthToggle}
  className={`
    group inline-flex items-center justify-center
    min-w-[160px] min-h-[44px]
    px-6 py-2
    rounded-3xl
    font-bold text-base
    border
    transition-all duration-300 ease-out
    ${
     user
  ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white ring-2 ring-sky-300 ring-offset-2"
  : "bg-white text-orange-500 border-white/40"

    }
    hover:shadow-lg
    active:scale-[0.97]
  `}
>
  <span
    className="transition-transform duration-150 ease-out group-active:scale-110"
  >
    {user ? `${user.name} · Logout` : "Guest · Login"}
  </span>
</button>


        </div>
      </nav>
    </header>
  );
};

export default Header;
