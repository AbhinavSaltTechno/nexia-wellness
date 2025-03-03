import React from "react";
import human from "../../public/assets/hr-human-resources-1.svg";
import therapy from "../../public/assets/therapy-counseling1.svg";
import calender from "../../public/assets/savings-calendar-3.svg";
import olConsult from "../../public/assets/online-consultation-21.svg";
import Image from "next/image";

const HowDoes = () => {
  const arr = [
    { title: "Browse the network", img: human },
    { title: "Choose your practitioner", img: therapy },
    { title: "Book and pay for it", img: calender },
    { title: "Meet with your practitioner", img: olConsult },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-white py-32 min-h-40 black-nexia1">
      <div className="title-text black-nexia1 text-center w-full">
        How does it work?
      </div>

      <div className="flex gap-4 justify-center overflow-x-auto w-[100vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  p-4 px-4 md:px-16">
        {arr.map((ele, ind) => (
          <div
            title="Shift + scroll to move horizontally"
            key={ind}
            className="flex flex-col p-6 rounded-3xl bg-white border border-transparent hover:border-[#43B9CE] w-auto md:w-72 flex-shrink-0"
          >
            <div className="text-4xl nexiaBt2 font-bold">{ind + 1}</div>
            <div className="text-base md:text-xl text-[rgba(27, 50, 54, 0.80)] font-semibold">
              {ele.title}
            </div>
            <div className="min-w-16 h-16 md:h-36 md:min-w-36 relative mt-4">
              <Image src={ele.img} fill sizes="100vw" alt="the human" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoes;
