import React from "react";
import Team from "../../assets/website/team.jpg";

const Hero = () => {
  return (
    <div className="bg-gray-100 dark:bg-black duration-300">
      {/* Adjust padding for different screen sizes */}
      <div className="px-4 sm:px-10 md:px-20">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          {/* Grid layout adjustment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-10 sm:pt-20">
            {/* Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <img
                src={Team}
                alt="Team"
                className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-auto object-contain rounded-xl"
              />
            </div>

            {/* Text section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30 sm:pr-10 md:pr-20">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl md:text-5xl font-semibold"
                style={{ lineHeight: 1.3 }}
              >
                A Better Solutions for your{" "}
                <span className="text-primary">Digital Products.</span>
              </h1>
              {/* Justified text */}
              <p data-aos="fade-up" data-aos-delay="300" className="text-justify leading-relaxed">
                Welcome to The IT Guys LLC, your trusted partner in technology solutions. Established in 2020, our mission is to deliver high-quality services that help businesses grow and succeed in an ever-evolving digital landscape.
              </p>
              <div className="transition-all duration-300 ease-in">
                <p data-aos="fade-up" data-aos-delay="400" className="text-justify leading-relaxed">
                  At The IT Guys LLC, we believe that every challenge presents an opportunity for innovation. Our approach to solving complex problems is rooted in creativity, enabling us to deliver solutions that not only meet your immediate needs but also pave the way for future growth.
                </p>
                <p data-aos="fade-up" data-aos-delay="500" className="text-justify leading-relaxed">
                  Our experienced team is dedicated to providing innovative solutions that drive success for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
