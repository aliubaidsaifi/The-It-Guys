import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.jpg";
import Img2 from "../../assets/blog/blog2.jpg";
import Img3 from "../../assets/blog/blog3.jpg";
import Img4 from "../../assets/blog/blog4.jpg";
import Img5 from "../../assets/blog/blog5.jpg";
import Img6 from "../../assets/blog/blog6.jpg";


const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    author: "Smith",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Understanding Market Trends",
    description:
      "Market trends can change rapidly. Keeping an eye on them can help businesses adapt and thrive. Here are some insights into the latest trends.",
    author: "John",
    date: "May 5, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Effective Data Visualization",
    description:
      "Visualizing data helps in making complex information more understandable. Here are some best practices for effective data visualization.",
    author: "Alexender",
    date: "June 15, 2022",
  },
  {
    id: 4,
    image: Img4,
    title: "Boosting Team Collaboration",
    description:
      "Collaboration is key to a successful team. Here are some tools and techniques to enhance collaboration in your workplace.",
    author: "Johnson",
    date: "July 20, 2022",
  },
  {
    id: 5,
    image: Img5,
    title: "The Future of AI in Business",
    description:
      "Artificial Intelligence is reshaping the business landscape. Discover how companies are leveraging AI to stay ahead.",
    author: "Michael Brown",
    date: "August 30, 2022",
  },
  {
    id: 6,
    image: Img6,
    title: "Creating a Successful Marketing Strategy",
    description:
      "A solid marketing strategy can significantly impact your business. Here’s how to create one that works.",
    author: "Sarah Davis",
    date: "September 10, 2022",
  },
 
];

const BlogsComp = () => {
  const [showAll, setShowAll] = useState(false); // State to control showing all blogs

  const handleToggle = () => {
    setShowAll(!showAll); // Toggle between showing all blogs or the limited number
  };

  return (
    <div className="bg-gray-100 dark:bg-black py-10 pb-14">
      <div className="px-4 md:px-20">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-4xl font-semibold text-primary">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.slice(0, showAll ? BlogsData.length : 3).map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="primary-btn" onClick={handleToggle}>
              {showAll ? "Show Less" : "View All Posts"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogsComp;
