import { ShoppingCart } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <section className=" fixed top-0 inset-x-0 h-[60px] bg-back z-[2] md:px-28">
      <ul className=" inline-flex justify-between items-center size-full px-5">
        <HamburgerMenu />
        <ul className="hidden md:inline-flex justify-start gap-x-5 text-light items-center h-full">
          <li className=" hover:text-white transition-all duration-500 font-bold">
            Home
          </li>
          <li className=" hover:text-white transition-all duration-500 font-bold">
            About Us
          </li>
          <li className=" hover:text-white transition-all duration-500 font-bold">
            Blog
          </li>
          <li className=" hover:text-white transition-all duration-500 font-bold">
            Shop
          </li>
        </ul>
        <h1 className=" font-playfair font-bold text-[20px]">
          FASHION 90&apos;S
        </h1>
        <div className=" flex justify-start items-center gap-1">
          <ShoppingCart />
          <p className="hidden md:block font-bold">Add to cart</p>
        </div>
      </ul>
    </section>
  );
};

export default Header;
