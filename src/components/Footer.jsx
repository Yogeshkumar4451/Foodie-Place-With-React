import { FOOTER_URL } from "../Assets/images/Logo";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white mt-24">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <img
            src={FOOTER_URL}
            alt="Foodie Place Logo"
            className="w-20 mb-4 rounded-lg"
          />
          <p className="text-sm text-orange-100 leading-relaxed">
            Serving Fresh, Crispy, And Delicious Food Since 2025. <br />
            Your Taste, Our Responsibility.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-orange-100">
            {["Home", "About Us", "Menu", "Services", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-white hover:translate-x-1 transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm text-orange-100">
            {[
              "Help & FAQ",
              "Refund Policy",
              "Terms & Conditions",
              "Support",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-white hover:translate-x-1 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <div className="text-sm text-orange-100 space-y-2">
            <p>📍 Ludhiana, Punjab</p>
            <p>📞 +91 98843 91999</p>
            <p>✉️ YogeshKumar234ldh@gmail.com</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 text-xl">
            <span className="cursor-pointer hover:scale-110 transition">📸</span>
            <span className="cursor-pointer hover:scale-110 transition">👍</span>
            <span className="cursor-pointer hover:scale-110 transition">▶️</span>
            <span className="cursor-pointer hover:scale-110 transition">🐦</span>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-orange-400 text-center py-4 text-sm text-orange-100">
        © 2025 Foodie Place. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
