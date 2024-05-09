import React from "react";
import NewInCard from "../Resusables/ImgCard";
import TS1 from "/public/Images/tr1.png";
import TS2 from "/public/Images/tr2.png";
import Image from "next/image";
const HomeThirdSection = () => {
  return (
    <div className=" py-10 border-b-[2px] border-white md:mx-28">
      <div>
        <p className="text-[30px] font-extrabold">
          Don’t let anyone tell you that you have to be a certain way. Be
          unique, be what you feel like being. Life is too short to be perfect.{" "}
        </p>
      </div>
      <div className=" grid gap-y-5 mt-10 md:grid-cols-2">
        <NewInCard img={TS1} className="md:!max-h-[470px]" />
        <div>
          <div className="w-full max-h-[400px] overflow-hidden">
            <Image
              src={TS2}
              alt="section 1 img"
              quality={100}
              className=" object-cover object-center"
            />
          </div>
          <p className=" text-light mt-5 font-semibold">
            We all have those pieces in our closet that we keep for years and
            literally wear out before we retire them. We are here for you to
            bring &apos;90s fashion vibes again.
          </p>
          <button className="w-fit mt-5 bg-white text-back py-3 px-4 cursor-pointer font-semibold hover:bg-[#F6F4EB]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeThirdSection;
