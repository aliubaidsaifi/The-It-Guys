import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import MyBackgroundImage from '../../assets/website/background.jpg'
import FisrtTest from '../../assets/website/one.jpeg'
import SecondTest from '../../assets/website/two.jpg'
import ThirdTest from '../../assets/website/testi3.jpg'
import FourthTest from '../../assets/website/testi4.jpg'
import FifthTest from '../../assets/website/testi5.jpeg'
import SixthTest from '../../assets/website/testi6.jpeg'


const testimonialData = [
  {
    id: 1,
    description:
      "The IT Guys LLC really helped us streamline our hiring process. They took the time to understand what we needed and quickly provided us with amazing candidates who were the perfect fit for our team.",
    name: "Alexender",
    img: SecondTest,
  },
  {
    id: 2,
    description:
      "Their web development team was fantastic. They turned our old, clunky website into something modern, responsive, and super easy to use. We’ve seen a huge improvement in user engagement since the update.",
    name: "Sarah",
    img: FisrtTest,
  },
  {
    id: 3,
    description:
      "The attention to detail that The IT Guys LLC put into our mobile app was impressive. They delivered everything on time and the end result exceeded our expectations — our users love it!",
    name: "Ahtisham",
    img: ThirdTest,
  },
  {
    id: 4,
    description:
      "Working with their UI/UX designers was an amazing experience. They understood exactly what we needed, and the designs they created have been getting great feedback from our users.",
    name: "Michael",
    img: FourthTest,
  },
  {
    id: 5,
    description:
      "Thanks to The IT Guys LLC’s software development services, our business operations are running much more smoothly. The custom solutions they built are exactly what we needed to improve our efficiency.",
    name: "Sofia",
    img: SixthTest,
  },
  {
    id: 6,
    description:
      "The IT Guys LLC helped us create a brand identity that really speaks to our customers. From logo design to branding, they made sure everything felt cohesive, and our customers definitely noticed.",
    name: "Mohseen",
    img: FifthTest,
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <div className="arrow prev-arrow">❮</div>,
    nextArrow: <div className="arrow next-arrow">❯</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white duration-300">
     <div
      className="relative bg-cover dark:bg-white bg-center h-[500px] flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${MyBackgroundImage})`, 
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-full w-[80%] h-[80%] sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] flex flex-col justify-center items-center p-6 text-center shadow-lg transition-colors duration-300">
        <h1
          className="text-primary text-xl sm:text-2xl md:text-3xl font-bold dark:text-white pb-3"
          data-aos="fade-up"
        >
          Our Clients Are 100% Satisfied!
        </h1>

        <h2
          className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white"
          data-aos="fade-up"
        >
          <span className="text-black dark:text-white">
            <span className="text-primary">500+</span> Happy Clients
          </span>
        </h2>
        <p
          className="text-black text-sm sm:text-lg mt-4 dark:text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The IT Guys has built strong relationships with its satisfied
          clients by providing refreshing <br />
          ideas and excellent services.
        </p>
      </div>
    </div>

      <div className="pt-12 pb-12 px-5 sm:px-20">
        <div className="container">
          <h1
            className="text-4xl sm:text-5xl font-semibold text-primary text-center"
            data-aos="fade-up"
          >
            Clients Reviews
          </h1>
          <p
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            See what some of our prestigious <br /> clients say about us
          </p>

          <Slider {...settings}>
            {testimonialData.map(
              ({ id, description, name, img, Designation }) => (
                <div
                  key={id}
                  className="testimonial-card bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={id * 100}
                >
                  <div className="flex flex-col items-center h-full">
                    <img
                      src={img}
                      alt={name}
                      className="w-20 h-20 rounded-full object-cover mb-1 shadow-sm"
                    />
                    <p className="text-md font-bold text-primary dark:text-white text-center">
                      {name}
                    </p>
                   <p className="text-gray-500 dark:text-gray-300 text-sm text-center flex-grow flex items-center text-justify justify-center">
                      <span
                        className="inline-block"
                        style={{ alignSelf: "flex-start" }}
                      >
                        <RiDoubleQuotesL fontSize={30} />
                      </span>
                      <span>{description}</span>
                      <span
                        className="inline-block"
                        style={{ alignSelf: "flex-end" }}
                      >
                        <RiDoubleQuotesR fontSize={30} />
                      </span>
                    </p>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
