// "use client";
// import { useInView } from "react-intersection-observer";
// import Card from "@/components/product/Card";
// import { useEffect, useState } from "react";
// import loadingGif from "@/public/images/loading.gif";
// import Image from "next/image";

// const VisiblePost = ({ data }) => {
//   const { ref, inView, entry } = useInView({
//     threshold: 0.5,
//     delay: 200,
//   });

//   const [visiblePost, setVisiblePost] = useState(data.slice(0, 5));
//   const [index, setIndex] = useState(5);
//   const show = visiblePost.length >= data.length;


//   useEffect(() => {
//     if (visiblePost.length < data.length && inView) {
//       setIndex((prev) => prev + 5);
//       setVisiblePost(data.slice(0, index));
//     }
//   }, [inView]);

//   return (
//     <>
//       {visiblePost.map((item) => {
//         return <Card key={item.id} item={item} />;
//       })}

//       <div
//         ref={ref}
//         className={
//           show ? "hidden" : "w-[100%] h-[100px] my-[20px] flex justify-center"
//         }
//       >
//         {show ? null : (
//           <Image src={loadingGif} alt="" className="w-[100px] h-[100%]" />
//         )}
//       </div>
//     </>
//   );
// };

// export default VisiblePost;

// // const scrollTop = window.scrollY; // Distance from the top
// // const windowHeight = window.innerHeight; // Viewport height
// // const documentHeight = document.documentElement.offsetHeight;

// // const [visiblePost, setVisiblePost] = useState([]);
// // const [itemsToShow, setItemsToShow] = useState(5);
// // const [loading, setLoading] = useState(false);

// // useEffect(() => {
// //   setVisiblePost(data.slice(0, itemsToShow));
// //   // console.log("set");

// // }, [itemsToShow, data]);

// // const handleScroll = () => {
// //   if (scrollTop + windowHeight != documentHeight ) {
// //     return
// //   }
// //         loadingMorePosts();

// // }
// // useEffect(()=>{
// //   window.addEventListener("scroll", handleScroll);

// //   return () => {
// //     window.removeEventListener("scroll", handleScroll);
// //   };
// // },[loading]);

// // {visibleProducts?.map((item, index) => (
// //   <Card
// //     key={item.id}
// //     item={item}
// //     index={index}
// //     visibleProducts={visibleProducts}
// //     lastProductRef={lastProductRef}
// //   />
// // ))}
