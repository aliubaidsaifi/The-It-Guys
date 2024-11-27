import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const testimonialData = [
  {
    id: 1,
    description: "The IT Guys LLC helped us streamline our staffing needs. Their team was quick to understand our requirements and delivered top-notch candidates in no time.",
    name: "John Doe",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/400",
  },
  {
    id: 2,
    description: "Their web development team is outstanding. They transformed our outdated site into a responsive and user-friendly platform that has boosted our online presence.",
    name: "Sarah Johnson",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/401",
  },
  {
    id: 3,
    description: "I was impressed by their attention to detail in our mobile app project. The team delivered on time and exceeded our expectations.",
    name: "Emily Roberts",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/402",
  },
  {
    id: 4,
    description: "We had a great experience working with their UI/UX designers. The designs were modern, and our users have given excellent feedback since the update.",
    name: "Michael Lee",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/403",
  },
  {
    id: 5,
    description: "The IT Guys LLC made our digital marketing campaign a success. Their innovative strategies helped us reach a wider audience and grow our customer base.",
    name: "David Smith",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/404",
  },
  {
    id: 6,
    description: "Their software development services have significantly improved our operational efficiency. The custom solutions they built are exactly what we needed.",
    name: "Jessica Brown",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/405",
  },
  {
    id: 7,
    description: "Their domain hosting services have been reliable and secure. We’ve never had an issue, and their support team is always responsive.",
    name: "Chris Evans",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/406",
  },
  {
    id: 8,
    description: "From branding to logo design, The IT Guys LLC helped us build a strong visual identity that truly resonates with our customers.",
    name: "Megan Wilson",
    Designation: "Product Manager",
    img: "https://picsum.photos/400/407",
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
 <div className="relative bg-gray-300 bg-cover dark:bg-white bg-center h-[500px] flex justify-center items-center overflow-hidden">
  <div className="bg-white dark:bg-gray-800 rounded-full w-[80%] h-[80%] sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] flex flex-col justify-center items-center p-6 text-center shadow-lg transition-colors duration-300">
    <h1 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold dark:text-white pb-3" data-aos="fade-up">
      Our Clients Are 100% Satisfied!
    </h1>
    
    <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white" data-aos="fade-up">
      <span className="text-black dark:text-white"><span className="text-primary">500+</span> Happy Clients</span>
    </h2>
    <p className="text-black text-sm sm:text-lg mt-4 dark:text-white" data-aos="fade-up" data-aos-delay="200">
      The IT Guys has built strong relationships with its satisfied clients by providing refreshing <br />ideas and excellent services.
    </p>
    
  </div>
</div>



      <div className="pt-12 pb-12 px-5 sm:px-20">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-semibold text-primary text-center" data-aos="fade-up">
            Clients Reviews
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="300">
            See what some of our prestigious <br /> clients say about us
          </p>

          <Slider {...settings}>
            {testimonialData.map(({ id, description, name, img, Designation }) => (
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
                  <p className="text-sm font-italic text-primary dark:text-white text-center mb-5">
                    {Designation}
                  </p>
                  <p className="text-gray-500 dark:text-gray-300 text-sm text-center flex-grow flex items-center text-justify justify-center">
                    <span className="inline-block" style={{ alignSelf: "flex-start" }}>
                      <RiDoubleQuotesL fontSize={30} />
                    </span>
                    <span >{description}</span>
                    <span className="inline-block" style={{ alignSelf: "flex-end" }}>
                      <RiDoubleQuotesR fontSize={30} />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
