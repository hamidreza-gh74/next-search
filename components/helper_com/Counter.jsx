"use client";

const Counter = ({ count, setCount }) => {
  return (
    <div className=" flex  items-center gap-[8px]">
      <button
        className="w-[18px]  h-[18px] rounded-[4px] bg-[red] flex justify-center items-center text-[white] text-[14px] cursor-pointer"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <span className="text-[14px]">{count}</span>

      <button
        className="w-[18px]  h-[18px] rounded-[4px] bg-[red] flex justify-center items-center text-[white] text-[14px]"
        onClick={count > 1 ? () => setCount((prev) => prev - 1) : null}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
