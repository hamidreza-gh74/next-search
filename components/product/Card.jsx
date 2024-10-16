import Image from "next/image";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Counter from "../helper_com/Counter";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="containar min-w-[200px] w-[25%]  h-auto border-[2px] border-dashed border-[grey] bg-[white] rounded-[5px] p-[10px] flex flex-col gap-[5px] items-center ">
      {/* <Image src={item.image} width={200} height={300} alt="" /> */}
      {/* <img src={item.image} className="w-[100%] h-[100%] object-contain" /> */}

      <div className="img w-[150px] h-[100px] ">
        <img src={item.image} className="w-[100%] h-[100%] object-contain" />
      </div>

      <div className="main flex flex-col justify-start w-[100%] pl-[10px] mt-[15px] ">
        <div className="titr text-[14px] font-[500] text-[red]">
          {item.category}
        </div>

        <div className="price text-[12px] mt-[5px]">{item.price}</div>

        <div className="icon mt-[10px] flex justify-between w-[100%] pr-[10px] items-center ">
          <Link href={`/${item.id}`}>
            <FormatListBulletedIcon className="text-[18px] text-[red] cursor-pointer" />
          </Link>
          <div className="w-[25px] h-[25px] bg-[red] rounded-[50%] flex justify-center items-center cursor-pointer">
            <AddShoppingCartIcon className="text-[white] text-[15px]" />
          </div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Card;
