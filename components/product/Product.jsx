import Card from "./Card";
import Search from "./Search";
import Category from "./Category";
import { manageData } from "./Data";

const Product = async ({ searchParams }) => {
  // fetch and manage data
  const data = await manageData(searchParams);

  return (
    <div className="w-[95%] h-auto flex flex-col gap-[15px] justify-center  p-[5px]  ">
      <Search />

      <div className="containar w-[100%] flex gap-[5px] mt-[20px]">
        <div className="left w-[80%] h-auto flex  flex-wrap justify-center gap-[15px] ">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <div className=" w-[20%] h-[200px] flex justify-start cursor-pointer ">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Product;
