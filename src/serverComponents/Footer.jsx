import FooterChild from "@/components/FooterChild";
import Image from "next/image";

function Footer() {
  const footerArr = [
    "assets/fb.svg",
    "assets/linkedIn.svg",
    "assets/instagram.svg",
  ];
  return (
    <footer className="">
      <div className="nexiaBg1 px-4 py-12 md:pt-24 md:px-20 md:pb-10">
        <div className="flex flex-col md:flex-row  text-white ">
          <div className="grow-1 p-4 flex md:items-start items-center md:flex-col gap-7 ">
            <span className="text-lg font-semibold">Social</span>

            <span className="flex gap-4 ">
              {footerArr.map((e, ind) => (
                <Image
                  key={ind}
                  src={e}
                  alt="Next.js logo"
                  width={24}
                  height={24}
                  priority
                />
              ))}
            </span>

            <span className="border-2 border-slate-400 text-[1rem] font-normal px-4 py-1 rounded-sm ml-auto md:ml-0">
              USD
            </span>
          </div>

          <FooterChild
            head={"Nexia Wellness Inc."}
            links={[
              "About us",
              "Terms and condition",
              "Privacy Policy",
              "CCPA Privacy Policy",
              "Conversion Policy",
            ]}
          ></FooterChild>
          <FooterChild
            head={"Specializations"}
            links={[
              "Coaching",
              "Traditional Medicine",
              "Integrative and Functional Medicine",
            ]}
          ></FooterChild>
          <FooterChild
            head={"For Practitioners"}
            links={["Blogs", "Contact us"]}
          ></FooterChild>
          <FooterChild
            head={"Contact Info"}
            links={[
              "contact@nexiawellness.com ",
              "Call us +1 925-307-9697",
              "Privacy Policy",
              "11501 Dublin Blvd Ste. 200 Dublin, CA 94568",
            ]}
          ></FooterChild>
        </div>
        <hr className="w-4/5 mx-auto my-5 border-[1px] border-slate-300 opacity-25 " />

        <div className="flex flex-col items-center gap-5 text-gray-50 text-sm text-center">
          <p className="text-center">
            The content and products of tis website is for informational
            purposes only and should not be used to replace medical consult,
            diagnosis, or treatment.
          </p>
          <p>
            Practitioners on this platform have a contractual relationship with
            Nexia Wellness, LLC
          </p>
          <p>
            © 2023 Nexia Wellness LLC &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
