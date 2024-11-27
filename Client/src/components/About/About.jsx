import React from "react";
import AboutUs from "../../assets/website/aboutus.jpg"; 

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white duration-300 pb-10">
      {/* Remove padding and margin at the top */}
      <div className="px-4 sm:px-10 md:px-20 m-0 pt-0">
        <div className="container min-h-[620px] flex mt-0 sm:mt-0">
          {/* Adjust grid layout for responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center m-0 p-0">
            {/* Image section */}
            <div
              data-aos="zoom-in"
              className="flex justify-center order-1 sm:order-1"
            >
              <img
                src={AboutUs}
                alt="About Us"
                className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-auto object-contain rounded-xl"
                
              />
            </div>

            {/* Text section */}
            <div className="space-y-5 order-2 sm:order-2 flex flex-col justify-center mt-0 p-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                About Us
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify leading-relaxed"
              >
                Welcome to <em>The IT Guys LLC</em>, your trusted partner in technology solutions. Established in 2020, our mission is to deliver high-quality services that help businesses grow and succeed in an ever-evolving digital landscape.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-justify leading-relaxed"
              >
                At <em>The IT Guys LLC</em>, we offer a wide range of services, including <strong>Staffing Services</strong>, <strong>Web Development</strong>, <strong>Mobile Application Development</strong>, <strong>UI/UX Designing</strong>, <strong>Domain Hosting</strong>, <strong>Logo & Branding</strong>, <strong>Digital Marketing</strong>, and <strong>Software Development</strong>. Our team of experienced professionals is dedicated to providing customized solutions that cater to the unique needs of each client.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-justify leading-relaxed"
              >
                Whether you're looking to build an impactful website, develop a mobile app, enhance your brand's online presence, or hire top talent for your team, we are here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
