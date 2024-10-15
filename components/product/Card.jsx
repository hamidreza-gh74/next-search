import Image from "next/image";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Counter from "../helper_com/Counter";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="containar min-w-[200px]  h-auto border-[2px] border-dashed border-[grey] bg-[white] rounded-[5px] p-[10px] flex flex-col gap-[5px] items-center ">
      {/* <Image src={item.image} width={200} height={300} alt="" /> */}

      <div className="img w-[150px] h-[100px]">
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
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Card;
