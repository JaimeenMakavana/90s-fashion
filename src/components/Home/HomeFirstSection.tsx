import Image from "next/image";
import React from "react";
import SO1 from "/public/Images/So2.png";
import SO2 from "/public/Images/So1.png";

const HomeFirstSection = () => {
  return (
    <section className="py-10 grid gap-y-10 md:px-28 md:grid-cols-3 md:gap-x-5">
      <div className="grid gap-y-5">
        <p className=" font-playfair text-playfair font-semibold max-w-[75%] md:w-full">
          Fashion is the armor to survive the reality of everyday life.
        </p>
        <button className="w-fit mt-5 bg-white max-h-[50px] text-back py-3 px-4 cursor-pointer font-semibold ">
          Shop Now
        </button>
      </div>
      <div>
        <div className="w-full max-h-[400px] overflow-hidden">
          <Image
            src={SO1}
            alt="section 1 img"
            quality={100}
            className=" object-cover object-center"
          />
        </div>
        <p className=" text-light mt-5 font-semibold">
          The key to style is learning who you are. There&apos;s no how-to road
          map to style. It&apos;s about self expression.
        </p>
      </div>
      <div>
        <div className="w-full max-h-[400px] overflow-hidden md:max-h-[460px]">
          <Image
            src={SO2}
            quality={100}
            alt="section 1 img"
            className=" object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeFirstSection;
