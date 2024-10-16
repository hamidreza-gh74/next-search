import Product from "@/components/product/Product";




export default function Home({ searchParams }) {

  return (
    <>
      <Product searchParams = { searchParams } />
    </>
  );
}
