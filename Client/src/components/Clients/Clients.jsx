import React from "react";
import Slider from "react-slick";

import WellsFargoLogo from "../../assets/website/wells-fargo.svg";
import IBMLogo from "../../assets/website/ibm-logo.svg";
import GoogleLogo from "../../assets/website/pearson-logo.svg";
import pearsonLogo from "../../assets/website/pearson-logo.svg";
import projectmain from "../../assets/website/projectmain.jpg";

const clientsData = [
  {
    name: "Wells Fargo",
    logo: WellsFargoLogo,
    description: "A leading global financial services provider.",
  },
  {
    name: "IBM",
    logo: IBMLogo,
    description: "A multinational technology and consulting company.",
  },
  {
    name: "Pearson",
    logo: pearsonLogo,
    description: "A global leader in technology and innovation.",
  },
  
  // Add more clients here...
];

const Clients = () => {
  // Slick settings
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of logos to show at a time
    slidesToScroll: 1, // How many logos to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay (in ms)
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 logos
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1, // Show 1 logo
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 dark:bg-black py-16 dark:text-white duration-300">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Introductory Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center mb-16">
          <div
            data-aos="fade-right"
            className="w-full h-[400px] sm:h-[500px] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${projectmain})`,
            }}
          ></div>

          <div
            data-aos="fade-left"
            className="w-full bg-white dark:bg-gray-800 flex flex-col items-start justify-center space-y-4 p-6 rounded-lg shadow-xl"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-primary">
              Our Clients
            </h2>
            <h3 className="text-2xl text-gray-700 dark:text-gray-300 sm:text-3xl font-semibold">
              Trusted by Leading Brands Across the Globe
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              We are proud to have partnered with industry leaders who trust our services to drive success.
            </p>
          </div>
        </div>

        {/* Clients Carousel Section */}
        <h1 className="text-center text-4xl sm:text-5xl font-semibold text-primary mb-10">
          Empowering Global Brands
        </h1>

        <Slider {...settings}>
          {clientsData.map((client, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <img
                src={client.logo}
                alt={client.name}
                className="w-24 h-24 mb-4 object-contain transition-all duration-300 hover:scale-110"
              />
              <h2 className="font-semibold text-black dark:text-white text-xl mb-2">
                {client.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {client.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
