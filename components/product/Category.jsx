"use client";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Category = () => {
  const data = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const pathname = usePathname();
  const router = useRouter();
  const searchparam = useSearchParams();

  const categoryHandler = (index) => {
    const param = new URLSearchParams(searchparam);
    param.delete("search");

    if (index == 0) {
      param.delete("category");
      router.replace(`${pathname}?${param.toString()}`);
    } else {
      param.set("category", data[index]);
      router.replace(`${pathname}?${param.toString()}`);
    }
  };

  return (
    <div className="w-fit h-fit bg-[white] border-[2px] border-dashed border-[grey] py-[15px] pr-[40px] pl-[15px]  capitalize">
      <div className="titr text-[red] text-[14px] font-[500] flex items-center gap-[15px]  ">
        <FormatListBulletedIcon className="text-[17px]" />
        categories
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="text-[12px] font-[500] mt-[8px] "
          onClick={() => categoryHandler(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Category;
