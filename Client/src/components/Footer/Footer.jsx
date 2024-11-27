import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  { title: "About Us", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Projects", link: "/projects" },
  { title: "Careers", link: "/careers" },
];

const HelpLinks = [
  { title: "Customer Support", link: "/support" },
  { title: "FAQs", link: "/faqs" },
  { title: "Delivery Details", link: "/delivery-details" },
  { title: "Terms & Conditions", link: "/terms" },
  { title: "Privacy Policy", link: "/privacy-policy" },
];

const ResourcesLinks = [
  { title: "Blog", link: "/blog" },
  { title: "Case Studies", link: "/case-studies" },
  { title: "Free Ebooks", link: "/ebooks" },
  { title: "Webinars", link: "/webinars" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white dark:bg-gray-800">
      <div className="px-4 lg:px-20">
        <section className="container mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            {/* Company Details */}
            <div className="py-8 px-4 md:col-span-1">
              <h1 className="sm:text-3xl text-xl font-bold text-left mb-3 flex items-center gap-3">
                The IT Guys LLC
              </h1>
              <p className="text-sm">
                Since our founding, we’ve built a reputation for delivering exceptional results with a client-first approach. At The IT Guys LLC, we don't just provide services—we build long-lasting partnerships that help your business thrive.
              </p>
              <br />
              {/* Social Handle */}
              <div className="flex items-center gap-4 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.linkedin.com/company/100750466/admin/dashboard/">
                  <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            {/* Links Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              {/* Company Links */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-lg font-bold text-left mb-3">Company</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-400">
                        <Link to={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Help Links */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-lg font-bold text-left mb-3">Help</h1>
                  <ul className="flex flex-col gap-3">
                    {HelpLinks.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-400">
                        <Link to={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Resources Links */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-lg font-bold text-left mb-3">Resources</h1>
                  <ul className="flex flex-col gap-3">
                    {ResourcesLinks.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-400">
                        <Link to={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
