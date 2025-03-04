import Image from "next/image";
import banner from "../../public/assets/1.png";
import logo from "../../public/assets/Whitelogo.svg";
export default function Banner() {
  return (
    <>
      <div className="h-screen relative">
        <div
          className="px-4 h-full"
          style={{
            backgroundImage: `url(${banner.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundAttachment: "",
          }}
        >
          <div className="hidden col-span-3 md:flex justify-between items-center text-white w-full">
            <div className="flex justify-evenly items-center gap-8">
              <div className="relative min-w-[250px] min-h-[50px]">
                <Image src={logo} alt="logo" fill sizes="100vw"></Image>
              </div>
              <div className="flex justify-evenly gap-4">
                <span>Specialization</span>
                <span>Find a practitioner</span>
                <span>Discover</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="text-xs font-bold text-white nexiaBg2 rounded-4xl py-2  px-5 md:px-4">
                CREATE A PRACTITIONER PROFILE
              </button>
              <button className="text-xs font-bold text-white bg-transparent border border-white rounded-4xl py-2  px-2 md:px-4">
                LOG IN / SIGN UP
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-[10%_40%_50%] grid-cols-1 justify-center items-center h-[80%]">
            <div></div>
            <div className=" flex flex-col items-start gap-4 md:gap-8 ">
              <h1 className="text-white font-bold md:text-6xl text-4xl">
                Your Personal Holistic Guidance
              </h1>
              <p className="text-gray-100 md:text-xl text-lg font-normal leading-7">
                Finally get one-o-one health support tailored to your personal
                needs and unique goals
              </p>

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
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
