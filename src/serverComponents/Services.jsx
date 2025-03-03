import Image from "next/image";
import rectangle17 from "../../public/assets/Rectangle17.png";
import rectangle18 from "../../public/assets/Rectangle18.png";
import rectangle19 from "../../public/assets/Rectangle19.png";
import rectangle20 from "../../public/assets/Rectangle20.png";
import rectangle21 from "../../public/assets/Rectangle21.png";
import rectangle22 from "../../public/assets/Rectangle22.png";
import rectangle23 from "../../public/assets/Rectangle23.png";

export default function Services() {
  const arr = [
    { img: rectangle17, desc: "Diet & Nutrition Experts" },
    { img: rectangle18, desc: "Health & Life Coaches" },
    { img: rectangle19, desc: "Fitness & Yoga Instructors" },
    { img: rectangle20, desc: "Mind & Body Therapists" },
    { img: rectangle21, desc: "Therapy & CounseliNG" },
    { img: rectangle22, desc: "Spiritual healers" },
    {
      img: rectangle23,
      desc: "Integrative, Alternative & Complementary Therapy",
    },
  ];
  return (
    <div className="nexiaBg1">
      <div className="max-w-[1024px]  flex flex-col mx-auto ">
        <div className="px-4 md:px-0 title-text font-bold text-5xl text-white text-center w-full mt-16 mb-8">
          Wellness for your body, mind and spirit
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 justify-evenly gap-2 md:gap-4 mx-4 my-25">
          {arr.map((ele, ind) => (
            <div key={ind} className=" flex flex-col gap-4 item-center">
              <div className="min-w-16 h-16 md:h-36 md:min-w-36 relative mt-4 rounded-3xl">
                <Image
                  src={ele.img}
                  fill
                  sizes="80vw"
                  alt={ele.desc}
                  style={{ objectFit: "fill" }}
                />
              </div>
              <div className="text-center text-sm text-white font-bold uppercase">
                {ele.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-4 flex flex-col md:flex-row gap-4 items-center md:justify-between py-12 border-t-2 border-t-gray-400">
          <div className="text-base md:text-xl font-normal text-gray-50">
            Whether you feel like something is missing from conventional
            medicine, you need an out-of-the box approach, our network offers a
            range of holistic health practitioners dedicated to helping you
            reach your goals.
          </div>
          <button className="py-4 px-8 text-base text-center font-bold text-white nexiaBg2 rounded-4xl w-fit">
            GETSTARTED
          </button>
        </div>
      </div>
    </div>
  );
}
