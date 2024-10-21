"use client";

const Btn_Single = ({ counter, setCounter }) => {
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
        onClick={counter > 1 ? () => setCounter((prev) => prev - 1) : null}
      >
        -
      </div>
    </div>
  );
};

export default Btn_Single;
