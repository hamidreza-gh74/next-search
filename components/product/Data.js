import { Fetch_Data } from "@/utils/Fetch";

export const manageData = async (searchParams) => {
  const search = searchParams.search ? searchParams.search : "";
  const category = searchParams.category ? searchParams.category : "";

  const data = await Fetch_Data("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (search != "") {
    const newData = data?.filter((item) => item.category == search);

    return newData;
  }

  if (category != "") {
    const newData = data?.filter((item) => item.category == category);

    return newData;
  }

  return data;
};
