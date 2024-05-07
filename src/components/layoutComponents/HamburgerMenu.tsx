"use client";
import { CircleX, Menu } from "lucide-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [DropdownToggle, setDropdownToggle] = useState(false);
  return (
    <li className=" cursor-pointer md:hidden">
      <div
        className={`${
          DropdownToggle ? "" : "hidden"
        } shadow-sm shadow-white fixed inset-y-0 left-0 w-[60%] bg-back p-5`}
      >
        <CircleX
          onClick={() => setDropdownToggle(!DropdownToggle)}
          className=" cursor-pointer"
        />
        <ul className="h-full inline-flex flex-col gap-y-5 text-light mt-5 text-menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Shop</li>
        </ul>
      </div>
      <Menu onClick={() => setDropdownToggle(!DropdownToggle)} />
    </li>
  );
};

export default HamburgerMenu;
