import React from "react";
import NewInCard from "../Resusables/ImgCard";
import FS1 from "/public/Images/fr1.png";
import FS2 from "/public/Images/fr2.png";
import FF1 from "/public/Images/ff1.png";
import SS1 from "/public/Images/ss1.png";
import { MoveRight } from "lucide-react";

const HomeFourthSection = () => {
  return (
    <div className=" py-10 border-b-[2px] border-white md:mx-28">
      <div>
        <h1 className=" font-playfair text-[30px]">Featured Collections</h1>
        <p className=" text-light font-semibold">
          What you wear is how you present yourself to the world, especially
          today, when human contacts are so quick. Fashion is instant language
        </p>
      </div>
      <div className=" grid mt-5 md:grid-cols-2 gap-y-10">
        <NewInCard img={FS1} />
        <NewInCard img={FS2} className="max-h-[330px]" />
      </div>
      <div className=" bg-white py-5 mt-10">
        <ul className="px-10 inline-flex w-full gap-x-10 overflow-x-auto font-bold text-back text-[20px] justify-between scrollbar-remove items-center">
          <li className=" shrink-0 w-[150px] font-extrabold whitespace-nowrap ">
            Free shipping
          </li>
          <li className=" shrink-0 w-[150px] font-extrabold whitespace-nowrap ">
            10 Days returns
          </li>
          <li className=" shrink-0 w-[150px] font-extrabold whitespace-nowrap ">
            Weekend offers
          </li>
        </ul>
      </div>
      <div className="py-10">
        <NewInCard img={FF1} />
      </div>
      <div className=" grid md:grid-cols-2">
        <NewInCard img={SS1} />
        <div className=" py-10 flex flex-col gap-y-3">
          <p> Know about our newest arrivals.</p>
          <h1 className=" font-playfair text-[30px]">Get in Touch</h1>
          <p className=" text-light">
            Fashion is part of the daily air and it changes all the time, with
            all the events. You can even see the approaching of a revolution in
            clothes. You can see and feel everything in clothes.
          </p>
          <div className=" inline-flex justify-start items-center">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" w-full border-b px-3 py-2 border-white bg-transparent focus:outline-none"
            />
            <MoveRight className="transition-all animate-ping duration-500" />
          </div>
        </div>
      </div>
      <div className=" bg-white py-5 mt-10">
        <ul className="px-10 inline-flex w-full align-center gap-x-10 overflow-x-auto font-bold text-back text-[20px] justify-between scrollbar-remove items-center">
          <li className=" shrink-0 font-extrabold align-center whitespace-nowrap ">
            Follow us on Instagram
          </li>
          <li className=" shrink-0 font-extrabold align-center whitespace-nowrap ">
            Follow us on Instagram
          </li>
          <li className=" shrink-0 font-extrabold align-center whitespace-nowrap ">
            Follow us on Instagram
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeFourthSection;
