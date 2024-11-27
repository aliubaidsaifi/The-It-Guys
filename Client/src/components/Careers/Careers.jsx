import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const Careers = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company);
    form.append('resume', formData.resume);

    
  };

  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white duration-300">
      <div className="p-20">
        <div className="container min-h-[620px] flex flex-col mt-10 sm:mt-0">
          <h1 
            className="text-5xl font-semibold text-primary text-center m-6"
            data-aos="fade-up"
          >
            Join Our Team
          </h1>

          <div className="flex flex-col sm:flex-row gap-12 mb-12">
            <div 
              className="flex-1 space-y-3 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md" 
              data-aos="fade-right"
            >
              <h2 className="text-xl font-bold text-primary mb-2">Apply Now</h2>
              <form className="space-y-2" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm">Name</label>
                  <input type="text" id="name" name="name" required className="w-full p-1 border border-gray-300 rounded" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm">Email</label>
                  <input type="email" id="email" name="email" required className="w-full p-1 border border-gray-300 rounded" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="w-full p-1 border border-gray-300 rounded" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm">Company (optional)</label>
                  <input type="text" id="company" name="company" className="w-full p-1 border border-gray-300 rounded" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm">Upload Resume</label>
                  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required className="w-full p-1 border border-gray-300 rounded" onChange={handleFileChange} />
                </div>
                <button type="submit" className="primary-btn w-full py-1">Submit</button>
              </form>
            </div>

            <div 
              className="flex-1 space-y-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md" 
              data-aos="fade-left"
            >
              <h2 className="text-xl font-bold text-primary mb-2">Contact Info</h2>
              <p className="text-sm">📧 Email: contact@theitguys.com</p>
              <p className="text-sm">📍 Location: 3412 Christiana Meadows, Bear, DE, 19701, USA</p>
              <p className="text-sm">📞 Mobile: +1 (234) 567-890</p>
              <div className="flex space-x-2 mt-1">
                <a href="#" className="text-primary">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-primary">
                  <FaTwitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/100750466/admin/dashboard/" className="text-primary">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-primary">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
