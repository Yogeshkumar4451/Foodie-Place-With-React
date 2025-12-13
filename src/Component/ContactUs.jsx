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
    <div className="Form-page">
      <div className="Form-Heading">
<h1>For Any Enquiry And Issue </h1>
<h2> Contact Us By Filling  Our Form</h2>
      </div>
    <form onSubmit={handleSubmit}> {" "}
<div>{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>{" "}
      </div>{" "}
      <button type="submit">Send</button>{" "}
    </form>
    </div>
  );
};
export default ContactUs;
