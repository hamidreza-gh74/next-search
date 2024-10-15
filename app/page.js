import Product from "@/components/product/Product";



export default function Home({ searchParams }) {
  // const param = searchParams.search;

  return (
    <>
      <Product searchParams = { searchParams } />
    </>
  );
}
