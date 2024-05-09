import Image from "next/image";
import React from "react";
import SS1 from "/public/Images/ssr1.png";
import SS2 from "/public/Images/ssr2.png";
import SS3 from "/public/Images/ssr3.png";
import NewInCard from "../Resusables/ImgCard";

const NewInCardData = [
  { id: 1, product: "T Shirt", price: 2700, img: SS1 },
  { id: 1, product: "Jacket", price: 3200, img: SS2 },
  { id: 1, product: "Jeans", price: 2300, img: SS3 },
];

const HomeSecondSection = () => {
  return (
    <section className=" py-10 border-b-[2px] border-white md:mx-28">
      <div className="h-[2px] bg-white relative">
        <div className="flex justify-center gap-2 bg-back px-2 items-center absolute -top-3 left-[3%] md:left-[35%] md:gap-10">
          <p>&#x2022;facebook</p>
          <p>&#x2022;instagram</p>
          <p>&#x2022;twitter</p>
        </div>
      </div>
      <div className=" grid py-10 gap-y-5 md:grid-cols-2">
        <div>
          <h1 className=" font-playfair text-playfair">New In</h1>
          <p className=" text-light font-semibold">
            Style is the only thing you can’t buy. It’s something reflected from
            our soul to the outside world.
          </p>
        </div>
        <ul className=" inline-flex justify-between items-center font-bold">
          <li>Hoddies</li>
          <li>Jeans& Shirts</li>
          <li>T- Shirts</li>
          <li>Jackets</li>
        </ul>
      </div>
      <div className=" grid gap-y-10 z-[1] md:grid-cols-3">
        {NewInCardData?.map((ele: any) => (
          <NewInCard
            key={ele.id}
            product={ele.product}
            price={ele.price}
            img={ele.img}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSecondSection;
