"use client";
import React from "react";

const Footer = () => {
  return (
    <div className=" px-5 py-10 grid gap-y-5 md:grid-cols-4 md:gap-x-10 md:mx-28">
      <div>
        <h1 className=" font-playfair text-[20px] font-bold">FASHION 90’S</h1>
        <p className=" text-light">Let’s go back to the 90s and dance.</p>
      </div>
      <div>
        <h1 className="text-[20px] font-bold">Location</h1>
        <p className=" text-light">767 5th street, 21st Floor, New York,USA</p>
      </div>
      <div>
        <h1 className="text-[20px] font-bold">Links</h1>
        <ul className=" text-light">
          <li>About us</li>
          <li>Our sports</li>
          <li>News</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[20px] font-bold">Legal</h1>
        <ul className=" text-light">
          <li>Privacy policy</li>
          <li>Terms of Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
