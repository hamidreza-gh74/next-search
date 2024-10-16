import Factor from "./Factor";
import Show from "./Show";

const Shopping_Cart = () => {
  return (
    <div className=" w-[100%] h-[auto] flex justify-center ">
      <div className="w-[70%] h-[auto] p-[20px] border-[1px] border-[#grey] border-solid shadow-[0_0_10px] shadow-[#9b9898] flex flex-col items-center">
        <Show />

        <Factor />
      </div>
    </div>
  );
};

export default Shopping_Cart;
