import Image from "next/image";
import { twMerge } from "tailwind-merge";

const NewInCard = ({ product, price, img, className }: any) => {
  return (
    <div
      className={twMerge(
        `w-[84%] max-h-[400px] overflow-hidden relative`,
        className
      )}
    >
      <Image src={img} alt=" " className="object-cover object-bottom" />
      {product && (
        <div className=" absolute bottom-3 left-3">
          <p className=" font-bold">{product}</p>
          <p className=" text-sm">{price}</p>
        </div>
      )}
    </div>
  );
};
export default NewInCard;
