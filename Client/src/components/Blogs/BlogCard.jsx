import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description, author, date }) => {
  return (
    <div className="dark:text-white group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="No image"
          className="mx-auto h-[300px] md:h-[420px] w-full object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="space-y-2 p-4 bg-white dark:bg-gray-800 -translate-y-16">
        <h1 className="line-clamp-1 text-xl md:text-2xl font-semibold">{title}</h1>
        <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
        <p className="text-gray-400 text-xs">{author} - {date}</p>
        <div className="flex justify-end pr-4 text-gray-500">
          <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
