import { totalAmountOfCart } from "@/Redux/Slices/cartSlice";
import { useSelector } from "react-redux";

const Factor = () => {

  const totalAmount = useSelector(totalAmountOfCart)
  return (
    <div className="factor w-[40%] h-[auto] my-[20px] border-solid border-[1px] border-[grey] rounded-[4px] p-[20px] ">
      <div className="titr  text-[16px] font-bold capitalize ">total cart</div>

      <div className="info w-[90%] h-fit border-solid border-[1px] border-[grey] flex flex-col m-[0_auto] mt-[10px] rounded-[4px]">
        <div className="text-[14px]  capitalize p-[5px_10px] flex justify-between border-b-[1px] border-solid border-[grey]">
          <div className="">total price :</div>
          <div className="">{totalAmount.toFixed(3)} $</div>
        </div>

        <div className="text-[14px]  capitalize p-[5px_10px] flex justify-between border-b-[1px] border-solid border-[grey]">
          <div className="">discount :</div>
          <div className="text-[red]">0 $</div>
        </div>

        <div className="text-[14px]  capitalize p-[5px_10px] flex justify-between border-b-[1px]">
          <div className="">paid price :</div>
          <div className="">{totalAmount.toFixed(3)} $</div>
        </div>
      </div>

      <div className="paid_btn w-fit h-fit p-[8px_20px] rounded-[8px] capitalize text-[12px] font-[700] bg-[#ed2c2c] mt-[15px] cursor-pointer">
        paid
      </div>
    </div>
  );
};

export default Factor;
