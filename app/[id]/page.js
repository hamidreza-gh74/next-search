import Single_page from "@/components/Single_page/Single_page";
import { Fetch_Data } from "@/utils/Fetch";

export async function generateMetadata({ params }) {
  const data = await Fetch_Data(
    `https://fakestoreapi.com/products/${params.id}`,
    { cache: "force-cache" }
  );

  return { title: data.category };
}

export function generateStaticParams() {

  
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function SinglePage(params) {
  const data = await Fetch_Data(
    `https://fakestoreapi.com/products/${params.params.id}`,
    { cache: "force-cache" }
  );

  return (
    <>
      <Single_page data={data} />
    </>
  );
}
