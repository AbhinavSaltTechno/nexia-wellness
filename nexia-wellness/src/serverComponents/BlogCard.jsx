import Image from "next/image";
import linkImg from "../../public/assets/link.svg";

function BlogCard({ details }) {
  const { image, tag, title, link } = details;
  return (
    <div className="w-full md:w-[45%] lg:w-[40%] bg-white rounded-xl p-4 shadow-md">
      <div className="relative mb-5" style={{ width: "auto", height: "180px" }}>
        <Image
          alt="Blog image"
          placeholder="blur"
          fill
          sizes="100%"
          src={image}
          style={{ objectFit: "contain" }}
        ></Image>
      </div>

      <div className="self-stretch flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch  flex-col justify-start items-start flex gap-4">
          <div className="px-3 py-1 bg-[#ecf7fa] rounded-[100px] justify-center items-center inline-flex">
            <div className="text-[#3d747d] text-sm font-normal ">{tag}</div>
          </div>

          <div className="self-stretch text-[#1b3236] text-xl font-semibold  leading-7">
            {title}
          </div>
        </div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="text-center text-[#42b8ce] text-sm font-extrabold  uppercase leading-tight tracking-wide">
            <a>READ MORE</a>
          </div>
          <div data-svg-wrapper className="relative">
            {/* <Image alt="link image" src={linkImg}></Image> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
// <div className="w-full md:w-[45%] lg:w-[40%] bg-white rounded-xl p-4 shadow-md">

//           <div
//             className="relative mb-5"
//             style={{ width: "auto", height: "200px" }}
//           >
//             <Image
//               alt="Blog image"
//               placeholder="blur"
//               fill
//               sizes="100vw"
//               src={img}
//               style={{ objectFit: "contain" }}
//             ></Image>
//           </div>

//           <div className="self-stretch flex-col justify-start items-start gap-6 flex">
//             <div className="self-stretch  flex-col justify-start items-start flex gap-4">
//               <div className="px-3 py-1 bg-[#ecf7fa] rounded-[100px] justify-center items-center inline-flex">
//                 <div className="text-[#3d747d] text-sm font-normal ">
//                   Diet and Nutrition
//                 </div>
//               </div>

//               <div className="self-stretch text-[#1b3236] text-xl font-semibold  leading-7">
//                 How Nueroplasticity Can Unlock Supernatural Powers
//               </div>
//             </div>
//             <div className="justify-start items-center gap-2 inline-flex">
//               <div className="text-center text-[#42b8ce] text-sm font-extrabold  uppercase leading-tight tracking-wide">
//                 READ MORE
//               </div>
//               <div data-svg-wrapper className="relative">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M5.83268 14.1654L14.166 5.83203M14.166 5.83203V14.1654M14.166 5.83203H5.83268"
//                     stroke="#43B9CE"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>rd;
