"use client";

import { decrement, increment } from "@/Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const Btn = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="btn flex  w-[75px] h-[30px] bg-[#c7c2c2] rounded-[5px] ">
      <div
        className="pos w-[25px] h-[inherit]  flex justify-center items-center cursor-pointer"
        onClick={() => dispatch(increment(item.id))}
      >
        +
      </div>

      <div className="quy w-[25px] h-[inherit] flex justify-center items-center ">
        {item.qty}
      </div>
      <div
        className="neg w-[25px] h-[inherit] flex justify-center items-center cursor-pointer"
        onClick={item.qty > 1 ? () => dispatch(decrement(item.id)) : null}
      >
        -
      </div>
    </div>
  );
};

export default Btn;
