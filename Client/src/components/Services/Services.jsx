import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
  FaUserFriends,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaServer,
  FaSignInAlt,
  FaBullhorn,
  FaCogs,
} from "react-icons/fa";

const skillsData = [
  {
    name: "Staffing Services",
    icon: <FaUserFriends className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our expert staffing solutions help businesses find the right talent to drive success. Whether you need short-term support or permanent team members, we deliver customized recruitment strategies that align with your unique requirements.",
    aosDelay: "0",
  },
  {
    name: "Web Development",
    icon: <FaCode className="text-4xl text-primary" />,
    link: "#",
    description:
      "We create responsive, dynamic, and scalable websites tailored to meet your business goals. From corporate sites to e-commerce platforms, our web development services combine technology and creativity to provide seamless user experiences.",
    aosDelay: "25",
  },
  {
    name: "Mobile Application Development",
    icon: <FaMobileAlt className="text-4xl text-primary" />,
    link: "#",
    description:
      "Stay ahead in the mobile-first world with our custom mobile app development services. We design and build apps that offer smooth functionality and deliver an engaging user experience across both iOS and Android platforms.",
    aosDelay: "50",
  },
  {
    name: "UI/UX Designing",
    icon: <FaPalette className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our UI/UX design services focus on delivering visually appealing and user-friendly designs. We prioritize functionality while creating intuitive interfaces that enhance user engagement and satisfaction.",
    aosDelay: "100",
  },
  {
    name: "Domain Hosting",
    icon: <FaServer className="text-4xl text-primary" />,
    link: "#",
    description:
      "Ensure your online presence with our reliable domain hosting services. We offer secure, fast, and scalable hosting solutions, ensuring your website remains accessible and performs optimally around the clock.",
    aosDelay: "200",
  },
  {
    name: "Logo & Branding",
    icon: <FaSignInAlt className="text-4xl text-primary" />,
    link: "#",
    description:
      "Your brand identity starts with a strong logo. We offer complete logo and branding services to help you create a distinct and memorable brand presence that resonates with your target audience.",
    aosDelay: "300",
  },
  {
    name: "Digital Marketing",
    icon: <FaBullhorn className="text-4xl text-primary" />,
    link: "#",
    description:
      "Maximize your online reach and grow your business with our tailored digital marketing strategies. From SEO to social media campaigns, we help you build your online presence, attract more customers, and boost your revenue.",
    aosDelay: "500",
  },
  {
    name: "Software Development",
    icon: <FaCogs className="text-4xl text-primary" />,
    link: "#",
    description:
      "Transform your business processes with our innovative software solutions. We specialize in developing custom software tailored to your specific needs, improving efficiency and driving growth through technology.",
    aosDelay: "700",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
    });
  }, []);

  return (
    <>
      <div className="bg-gray-100 dark:bg-black py-12 sm:grid sm:place-items-center">
        <div className="px-6 md:px-20"> {/* Adjust padding for small screens */}
          <div className="container">
            {/* Header */}
            <div className="pb-12 text-center space-y-3">
              <h1
                data-aos="fade-up"
                className="text-3xl font-semibold sm:text-5xl text-primary dark:text-primary"
              >
                Explore Our Services
              </h1>
              <p
                data-aos="fade-up"
                className="text-gray-600 dark:text-gray-400 text-sm"
              >
                We are self-service data analytics software that lets you create visually.
              </p>
            </div>

            {/* Services cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsData.map((skill) => (
                <div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={skill.aosDelay}
                  className="card space-y-5 sm:space-y-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div>{skill.icon}</div>
                  <h1 className="text-lg font-semibold text-black dark:text-white">
                    {skill.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-justify">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
