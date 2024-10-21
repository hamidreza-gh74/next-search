
"use client"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import { useSelector } from "react-redux";
const Header = () => {
  const state = useSelector((state => state.shoppingCart));

  return (
    <div className="w-[95%] h-[50px] max-w-[1400px] bg-[red] mt-[5px] rounded-[5px] flex justify-between  items-center pr-[30px]">
      <Link href="/" className="text-[20px] text-[white] font-[700] capitalize pl-[20px] ">
        boto shop
      </Link>
      <Link href="/cart" className="w-fit h-fit cursor-pointer relative ">
        <AddShoppingCartIcon className="text-[white] text-[25px]" />
        <div className="w-[20px] h-[20px] bg-[black] flex justify-center items-center rounded-[50%] absolute top-[-10px] right-[-15px] text-[white] text-[13px] ">
          {state.cart.length}
        </div>
      </Link>
    </div>
  );
};

export default Header;
