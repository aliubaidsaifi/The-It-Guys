import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Web3 Forms request
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1c50fd16-3003-4d92-8523-c4972facb83b", 
          ...formData,
        }),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Your message has been sent successfully!",
          confirmButtonText: "OK",
          confirmButtonColor: "#FFD700",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          project: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Message Failed",
          text: "There was an issue sending your message. Please try again.",
          confirmButtonText: "OK",
          confirmButtonColor: "#FFD700",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please try again later.",
        confirmButtonText: "OK",
        confirmButtonColor: "#FFD700",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-black py-12 dark:text-gray-500 duration-300">
      <div className="px-4 lg:px-20">
        <div className="container flex flex-col min-h-[620px] mt-10 sm:mt-0">
          
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary text-center mb-6"
            data-aos="fade-up"
          >
            Contact Us
          </h1>

          {/* Contact Form */}
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Form Section */}
            <div
              className="flex-1 space-y-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              data-aos="fade-right"
            >
              <h2 className="text-xl font-bold text-primary mb-2">Send a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    value={formData.company}
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm">Project Brief</label>
                  <textarea
                    id="project"
                    name="project"
                    required
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    value={formData.project}
                  ></textarea>
                </div>
                <button type="submit" className="primary-btn w-full py-2" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Company Info Section */}
            <div
              className="flex-1 space-y-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              data-aos="fade-left"
            >
              <h2 className="text-xl font-bold text-primary mb-2">United States</h2>
              <p className="text-sm">📧 Email: contact@theitguys.com</p>
              <p className="text-sm">📍 Location: 3412 Christiana Meadows, Bear, DE, 19701, USA</p>
              <p className="text-sm">📞 Mobile: +1 (234) 567-890</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-primary" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-primary" aria-label="Twitter">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com/company/100750466/admin/dashboard/" className="text-primary" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-primary" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
              </div>

              {/* Google Map Section */}
              <div className="mt-6">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.7760901973586!2d-75.615803484675!3d39.574431979480504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8a5e60d3a47af%3A0xa1b4774c486888ab!2s3412%20Christiana%20Meadows%2C%20Bear%2C%20DE%2019701%2C%20USA!5e0!3m2!1sen!2sus!4v1633651769461!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
