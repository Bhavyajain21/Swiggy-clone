import { useState } from "react";
import contact from "../../Images/Contact-Us.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={contact} alt="" />
      </div>

      <div className="contact-right">
        <h1>Contact us</h1>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your Message here..." required></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting FoodFire, We will reply ASAP.</span>
          )}
        </form> */}
        <div className="reachout">
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/bhavyajain21/" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/Bhavyajains21" target="_blank">
              <FaTwitter />
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://www.instagram.com/the_bhavya__jain/"
              target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
