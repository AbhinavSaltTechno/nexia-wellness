import Image from "next/image";
import rectangle from "../../public/assets/Rectangle16.png";
// D:\Abhinav Sachin Babar\nextjs\new\nexia-wellness\public\assets\Rectangle16.png

export default function FindPractitioner() {
  return (
    <>
      <div className="py-5 md:py-12  flex flex-col-reverse md:flex-row items-center">
        <div className="w-[10%]"></div>

        <div className="flex gap-4 flex-col-reverse md:flex-row w-[80%] nexiaBg2 py-5 md:py-12 px-4 rounded-2xl">
          <div className="w-full md:w-[50%] flex flex-col justify-center gap-9">
            <div className="md:text-3xl font-semibold text-white text-xl">
              Browse our talented group of holistic health practitioners to find
              your perfect match
            </div>
            <button className="py-4 px-8 inline-block md:w-fit rounded-4xl font-bold text-base text-center nexiaBt2 bg-white">
              Find a Practitioner
            </button>
          </div>
          <div className="w-full md:w-[50%] relative rounded-lg min-h-98">
            <Image
              src={rectangle}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              alt="Find Practioner"
            ></Image>
          </div>
        </div>

        <div className="w-[10%]"></div>
      </div>
    </>
  );
}
