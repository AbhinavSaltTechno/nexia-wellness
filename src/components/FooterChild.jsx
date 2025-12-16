"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function FooterChild({ head, links = [], icons = [] }) {
  const [showDrop, setShowDrop] = useState(true);

  return (
    <>
      <div className="relative p-4 min-w-1/6 flex flex-col">
        <div className="flex flex-row justify-between content-center mb-8">
          <h2 className="text-xl font-semibold"> {head}</h2>
          <button onClick={() => setShowDrop((prev) => !prev)}>
            <Image
              className="invert dark:invert md:hidden"
              src="assets/downArrow.svg"
              alt="Next.js logo or something aaaaa"
              width={18}
              height={18}
              priority
              style={{ width: "auto", height: "auto" }} //Added style
            />
          </button>
        </div>

        <div
          className={`flex flex-col gap-4 relative transition-all duration-300 ease-in-out  ${
            showDrop
              ? "opacity-100 max-h-[200px] "
              : "opacity-0 max-h-0 md:opacity-100 md:max-h-[200px]"
          }`}
        >
          {links.map((ele, ind) => (
            <span className="text-sm font-normal" key={ind}>
              {ele}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
