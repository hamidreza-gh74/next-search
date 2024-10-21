import Rating_MUI from "../helper_com/Rating_MUI";
import Cart_Manage from "./Cart_Manage";

const Single_page = ({ data }) => {
  return (
    <div className="w-[95%] h-auto flex gap-[15px] justify-center  p-[10px]  ">
      <div className="containar w-[50%] h-[auto] p-[20px] flex flex-col items-center gap-[20px] bg-[white] border-solid border-[1px] border-[grey] shadow-[0_0_15px] shadow-[#acaaaa]  ">
        <div className="img w-[150px] h-[100px]">
          <img src={data.image} className="w-[100%] h-[100%] object-contain" />
        </div>
        <div className="titr mt-[10px] text-[14px] font-[500] text-[red]">
          {data.title}
        </div>

        <div className="main flex flex-col justify-start capitalize w-[100%] pl-[10px] mt-[15px] ">
          <div className="titr w-[100%] mt-[10px] text-[12px] font-[500] flex gap-[10px]">
            <div className="w-[20%]">category :</div>
            <div> {data.category}</div>
          </div>
          <div className="price w-[100%] mt-[10px] text-[12px] font-[500] flex gap-[10px]">
            <div className="w-[20%]">price :</div>

            <div>{data.price}$</div>
          </div>
        </div>

        <div className="description w-[80%] text-[12px] leading-[20px] text-justify">
          {data.description}
        </div>

        <div className="cart w-fit">
          <Cart_Manage data={data} />
        </div>

        <div className="last mt-[10px] w-[90%] flex justify-between capitalize text-[12px] font-[500] pb-[10px]">
          <div className="count flex gap-[10px]">
            <div>count : </div>
            <div>{data.rating.count}</div>
          </div>
          <div className="rate flex gap-[10px]">
            {/* <div>rating : </div>
            <div>{data.rating.rate}</div> */}
            <Rating_MUI />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_page;
