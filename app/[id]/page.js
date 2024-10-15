import Single_page from "@/components/Single_page/Single_page";
import { Fetch_Data } from "@/utils/Fetch";

export default async function SinglePage(params) {
  const data = await Fetch_Data(
    `https://fakestoreapi.com/products/${params.params.id}`,
    {
      cache: "no-store",
    }
  );


  return (
    <>
      <Single_page data={data} />
    </>
  );
}
