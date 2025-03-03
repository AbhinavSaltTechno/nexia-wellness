import Image from "next/image";
import React from "react";
import approval from "../../public/assets/approval1.svg";
import secured from "../../public/assets/secured4.svg";
import communication from "../../public/assets/communication-multilingual-communication-customer-support1.svg";

const TrustedPage = () => {
  const arr = [
    {
      title: "Vetted and Verified Health Professionals",
      img: approval,
    },
    {
      title: "Secure and Easy Booking and Payment",
      img: secured,
    },
    {
      title: "Convenient and Flexible Communication",
      img: communication,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  py-32 min-h-40 black-nexia1">
      <div className="title-text black-nexia1 text-center w-full">
        Trusted holistic health & healing made easy
      </div>
      <div className="flex gap-4 justify-center overflow-x-auto w-full space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-4">
        <div className="w-[10%]"></div>

        <div className="flex flex-col items-center md:flex-row md:items-stretch gap-8">
          {arr.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col justify-center items-center">
                <Image
                  alt={item.title}
                  src={item.img}
                  width={100}
                  height={100}
                />
                <div className="text-xl font-semibold text-center">
                  {item.title}
                </div>
                <div className="text-center font-semibold text-xl"></div>
              </div>
              {index < arr.length - 1 && (
                <div className="bg-gray-400 w-32 h-0.5 md:h-40 md:w-0.5 opacity-50"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="w-[10%]"></div>
      </div>
    </div>
  );
};

export default TrustedPage;
