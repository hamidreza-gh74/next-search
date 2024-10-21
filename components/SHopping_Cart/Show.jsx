"use client";
import CloseIcon from "@mui/icons-material/Close";
import Btn from "./Btn";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/Redux/Slices/cartSlice";
import Link from "next/link";

const Show = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <>
   

      {cart.map((item) => (
        <div
          key={item.id}
          className="cart w-[95%] h-[auto] flex justify-evenly items-center p-[10px_20px] border-b-[1px] border_b-solid border-b-[grey]"
        >
          <Link href={`/${item.id}`} className="img w-[70px] h-[70px] bg-[pink]">
            <img src={item.image} alt="" className="w-[100%] h-[100%]" />
          </Link>

          <div className="w-[30%]  title text-[11px] leading-5 ">
            {item.title}
          </div>

          <div className="price text-[13px] font-bold">{item.price} $</div>

          <Btn item={item} />

          <div className="total text-[14px] font-bold">
            {(item.price * item.qty).toFixed(3)}$
          </div>

          <div
            className="cursor-pointer"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <CloseIcon className="text-[red] text-[22px]" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Show;
