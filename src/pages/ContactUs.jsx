import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="bg-orange-200 min-h-screen pt-32 pb-20">
      {/* CONTAINER */}
      <div className="max-w-xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            For Any Enquiry Or Issue
          </h1>
          <h2 className="text-lg text-gray-600">
            Contact Us By Filling Our Form
          </h2>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-md p-10 space-y-6"
        >
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                h-12
                px-4
                rounded-xl
                border border-gray-300
                text-gray-700 text-sm
                placeholder-gray-400
                focus:border-orange-500
                focus:ring-2 focus:ring-orange-200
                focus:outline-none
                transition
              "
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                h-12
                px-4
                rounded-xl
                border border-gray-300
                text-gray-700 text-sm
                placeholder-gray-400
                focus:border-orange-500
                focus:ring-2 focus:ring-orange-200
                focus:outline-none
                transition
              "
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              placeholder="Write Your Message Here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full
                min-h-[120px]
                px-4 py-3
                rounded-xl
                border border-gray-300
                text-gray-700 text-sm
                placeholder-gray-400
                focus:border-orange-500
                focus:ring-2 focus:ring-orange-200
                focus:outline-none
                transition
                resize-none
              "
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
              w-full
              h-12
              rounded-xl
              bg-orange-500
              text-white
              font-semibold
              hover:bg-orange-600
              active:scale-95
              transition
              shadow-sm hover:shadow-md
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
