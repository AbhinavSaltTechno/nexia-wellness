import Image from "next/image";
import React from "react";
import openQuotes from "../../public/assets/open-quotes.svg";
import closeQuotes from "../../public/assets/close-quotes.svg";
import profilePic from "../../public/assets/Ellipse19.svg";
import profilePic17 from "../../public/assets/Ellipse17.svg";
import profilePic18 from "../../public/assets/Ellipse18.svg";

const Testimony = () => {
  const arr = [
    {
      comment:
        "Dr. Arno has provided me with incredible medical expertise and intelligence and supported me through an integrative approach to restoring a healthy balance not only with my thyroid issues but also with my overall health. So greateful. I highly recommend him!",
      img: profilePic,
      user: "Alissa M",
      DrName: "Dr. Arno Smith",
      DrCategory: "Endocrinologist",
    },
    {
      comment:
        "Ally helped me narrow down some ideal foods for my baby’s age and nutritional needs. She helped me understand what’s “normal” for first time foods, and that the eating process is mostly just exploraotry and sensory at first.",
      img: profilePic,
      user: "Alissa M",
      DrName: "Ally Morgan",
      DrCategory: "Nutritionist",
    },
    {
      comment:
        "Dr. House is rude but effective and has provided me with incredible medical expertise and intelligence and supported me through an integrative approach to restoring a healthy balance not only with my thyroid issues but also with my overall health. So grateful",
      img: profilePic,
      user: "Gary S",
      DrName: "Dr. House",
      DrCategory: "Physician",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-32 min-h-40 black-nexia1">
      <div className="title-text black-nexia1 text-center w-full">
        Words from those we've helped
      </div>

      <div className="flex gap-4 justify-center overflow-x-auto w-full space-x-4 items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-4">
        <div className="w-[10%]"></div>

        {arr.map((ele, ind) => (
          <div
            key={ind}
            className="flex flex-col gap-4 w-[320px] md:w-[500px] flex-shrink-0 pt-2 pl-2"
            title="Shift + scroll to move horizontally"
          >
            <div className="flex gap-4 items-center">
              <Image src={openQuotes} width={44} alt="quotes"></Image>
              <span className="font-bold text-xl nexiaBt2">{ele.name}</span>
            </div>
            <div className=" text-xl font-normal ">
              <div className="p-8 relative bg-white rounded-t-3xl custom-shadow">
                Dr. Arno has provided me with incredible medical expertise and
                intelligence and supported me through an integrative approach to
                restoring a healthy balance not only with my thyroid issues but
                also with my overall health. So greateful. I highly recommend
                him!
                <Image
                  src={closeQuotes}
                  width={44}
                  height={35}
                  alt="unquote"
                  style={{ position: "absolute", bottom: 10, right: 10 }}
                ></Image>
              </div>
              <div className="flex gap-3 nexiaBg1 rounded-b-3xl px-8 py-3 text-white">
                <Image
                  src={profilePic}
                  width={68}
                  alt="profile picture"
                  style={{ borderRadius: "50%" }}
                ></Image>
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-bold">Dr. Arno Smith</span>
                  <span className="text-base font-normal">Endocrinologist</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="flex flex-col gap-4 w-[350px] md:w-[500px] flex-shrink-0">
          <div className="flex gap-4 items-center">
            <Image src={openQuotes} width={44} alt="quotes"></Image>
            <span className="font-bold text-xl nexiaBt2">Alissa M</span>
          </div>
          <div className=" text-xl font-normal ">
            <div className="p-8 relative bg-white rounded-t-3xl ">
              Dr. Arno has provided me with incredible medical expertise and
              intelligence and supported me through an integrative approach to
              restoring a healthy balance not only with my thyroid issues but
              also with my overall health. So greateful. I highly recommend him!
              <Image
                src={closeQuotes}
                width={44}
                height={35}
                alt="unquote"
                style={{ position: "absolute", bottom: 10, right: 10 }}
              ></Image>
            </div>
            <div className="flex gap-3 nexiaBg1 rounded-b-3xl px-8 py-3 text-white">
              <Image
                src={profilePic}
                width={68}
                alt="profile picture"
                style={{ borderRadius: "50%" }}
              ></Image>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold">Dr. Arno Smith</span>
                <span className="text-base font-normal">Endocrinologist</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[350px] md:w-[500px] flex-shrink-0">
          <div className="flex gap-4 items-center">
            <Image src={openQuotes} width={44} alt="quotes"></Image>
            <span className="font-bold text-xl nexiaBt2">Alissa M</span>
          </div>
          <div className=" text-xl font-normal ">
            <div className="p-8 relative bg-white rounded-t-3xl ">
              Dr. Arno has provided me with incredible medical expertise and
              intelligence and supported me through an integrative approach to
              restoring a healthy balance not only with my thyroid issues but
              also with my overall health. So greateful. I highly recommend him!
              <Image
                src={closeQuotes}
                width={44}
                height={35}
                alt="unquote"
                style={{ position: "absolute", bottom: 10, right: 10 }}
              ></Image>
            </div>
            <div className="flex gap-3 nexiaBg1 rounded-b-3xl px-8 py-3 text-white">
              <Image
                src={profilePic}
                width={68}
                alt="profile picture"
                style={{ borderRadius: "50%" }}
              ></Image>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold">Dr. Arno Smith</span>
                <span className="text-base font-normal">Endocrinologist</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[350px] md:w-[500px] flex-shrink-0">
          <div className="flex gap-4 items-center">
            <Image src={openQuotes} width={44} alt="quotes"></Image>
            <span className="font-bold text-xl nexiaBt2">Alissa M</span>
          </div>
          <div className=" text-xl font-normal ">
            <div className="p-8 relative bg-white rounded-t-3xl ">
              Dr. Arno has provided me with incredible medical expertise and
              intelligence and supported me through an integrative approach to
              restoring a healthy balance not only with my thyroid issues but
              also with my overall health. So greateful. I highly recommend him!
              <Image
                src={closeQuotes}
                width={44}
                height={35}
                alt="unquote"
                style={{ position: "absolute", bottom: 10, right: 10 }}
              ></Image>
            </div>
            <div className="flex gap-3 nexiaBg1 rounded-b-3xl px-8 py-3 text-white">
              <Image
                src={profilePic}
                width={68}
                alt="profile picture"
                style={{ borderRadius: "50%" }}
              ></Image>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold">Dr. Arno Smith</span>
                <span className="text-base font-normal">Endocrinologist</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-[10%]"></div>
      </div>
    </div>
  );
};

export default Testimony;
