import React from "react";

const SubscribePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[5%_45%_45%_5%] lg:grid-cols-[10%_40%_40%_10%]  justify-items-center bg-gray-100 py-20 md:py-32 min-h-40 ">
      <div></div>
      <div className="title-text black-nexia1 px-4">
        Get the latest health and wellness tips
      </div>
      <div className="col-span-2 md:col-span-1 text-xl md:text-5xl flex flex-col mx-4">
        <div className="text-[#516A6F] text-xl ">
          Subscribe to our newsletter for the latest news, tips, and tricks to
          live a life of wellness.
        </div>
        <div className="flex justify-between rounded-4xl mt-8 mb-4 bg-white w-full mx-auto">
          <input
            className="text-base bg-white text-gray-500 pl-3 md:pl-5 rounded-4xl w-3/5 md:w-4/5 py-4"
            type="text"
            placeholder="Enter your email"
          />
          <button className="text-base font-bold text-white nexiaBg2 rounded-4xl py-2 md:py-4 px-7 md:px-9">
            Subscribe
          </button>
        </div>
        <div className="text-[#516A6F] font-serif text-sm">
          *By subscribing you agree to our Privacy Policy
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SubscribePage;
