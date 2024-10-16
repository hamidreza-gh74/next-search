
"use client"
import { useState } from "react";

const Btn = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="btn flex  w-[75px] h-[30px] bg-[#c7c2c2] rounded-[5px] ">
      <div
        className="pos w-[25px] h-[inherit]  flex justify-center items-center cursor-pointer"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </div>

      <div className="quy w-[25px] h-[inherit] flex justify-center items-center ">
        {counter}
      </div>
      <div
        className="neg w-[25px] h-[inherit] flex justify-center items-center cursor-pointer"
        onClick={ counter > 0 ? () => setCounter((prev) => prev - 1) : null}
      >
        -
      </div>
    </div>
  );
};

export default Btn;
