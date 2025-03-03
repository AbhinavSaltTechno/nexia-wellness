import React from "react";
import img from "../../public/assets/pexels-ganinph-7790347.png";
import BlogCard from "./BlogCard";
const ReadBlog = () => {
  const arr = [
    {
      image: img,
      tag: "Diet and Nutrition",
      title: "How Nueroplasticity Can Unlock Supernatural Powers",
      link: "https://www.fast.com",
    },
    {
      image: img,
      tag: "Life Success",
      title: "How Nueroplasticity Can Unlock Supernatural Powers",
      link: "https://www.fast.com",
    },
    {
      image: img,
      tag: "Mental Wellness",
      title: "How Nueroplasticity Can Unlock Supernatural Powers",
      link: "https://www.fast.com",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-white py-32 min-h-40 black-nexia1">
      <div className="title-text black-nexia1 text-center w-full">
        Read our blogs
      </div>
      <div className="w-[90%] md:w-[90%] lg:w-[80%] flex flex-col md:flex-row  gap-4 md:gap-6 lg:gap-8 justify-between mt-8 ">
        {arr.map((card, ind) => (
          <BlogCard details={card} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default ReadBlog;
