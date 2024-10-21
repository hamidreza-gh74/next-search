"use client";
import { useDispatch, useSelector } from "react-redux";
import Factor from "./Factor";
import Show from "./Show";
import { clearCart } from "@/Redux/Slices/cartSlice";

const Shopping_Cart = () => {
  const state = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  return (
    <div className=" w-[100%] h-[auto] flex justify-center ">
      <div className="w-[70%] h-[auto] p-[20px] border-[1px] border-[#grey] border-solid shadow-[0_0_10px] shadow-[#9b9898] flex flex-col items-center">
        {state.cart.length > 0 ? (
          <>
            <div
              className="clear_btn w-fit h-fit text-[14px] capitalize p-[7px_20px] bg-[#e95858] text-[white] rounded-[8px] cursor-pointer"
              onClick={() => dispatch(clearCart())}
            >
              clear cart
            </div>

            <Show cart={state.cart} />

            <Factor />
          </>
        ) : <div className="text-[25px] font-[700] capitalize my-[100px]">

          your cart is empty
          
          </div>}
      </div>
    </div>
  );
};

export default Shopping_Cart;
