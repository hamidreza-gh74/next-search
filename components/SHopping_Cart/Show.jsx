import CloseIcon from "@mui/icons-material/Close";
import Btn from "./Btn";

const Show = () => {
  return (
    
      
      <div className="cart w-[95%] h-[auto] flex justify-evenly items-center p-[10px_20px] border-b-[1px] border_b-solid border-b-[grey]">
        <div className="img w-[70px] h-[70px] bg-[pink]">
          <img src="" alt="" />
        </div>

        <div className="title text-[14px] font-bold">t-shirt</div>

        <div className="price text-[13px] font-bold">215.22 $</div>

        <Btn />

        <div className="total text-[14px] font-bold">252.21$</div>

        <CloseIcon className="text-[red] text-[22px]" />
      </div>
    
  );
};

export default Show;
