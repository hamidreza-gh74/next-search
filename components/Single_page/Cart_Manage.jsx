
"use client"
import { useState } from "react";
import Btn_Single from "./Btn_Single";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/Redux/Slices/cartSlice";
import { toast } from "react-toastify";


const Cart_Manage = ({data}) => {

    const [counter, setCounter] = useState(1);

    const dispatch= useDispatch();

    const handleAddToCart = () => {
        dispatch(removeFromCart(data.id));
        dispatch(addToCart({ product: data, qty: counter }));
        toast.success("the product was successfully added")
      };

  return (
    <div className="containar flex items-center gap-7 my-[10px]">
      <Btn_Single counter={counter} setCounter={setCounter} />

      <div onClick={()=> handleAddToCart()} className="add flex justify-center items-center p-[10px_16px] bg-[#f03c3c] text-[13px] text-[white] font-[500] rounded-[9px] capitalize cursor-pointer">
        add to cart
      </div>
    </div>
  );
};

export default Cart_Manage;
