"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import loadingGif from "@/public/images/loading.gif";
import Image from "next/image";

const DataDevided = ({ data }) => {
  const [visiblePost, setVisiblePost] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(5);
  const show = visiblePost.length >= data.length;

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setItemsToShow(5);
  }, [data]);

  useEffect(() => {
    setVisiblePost(data.slice(0, itemsToShow));
  }, [itemsToShow ,data]);

  useEffect(() => {
    if (visiblePost.length < data.length && inView) {
      setItemsToShow((prev) => prev + 5);
    }
  }, [inView]);

  return (
    <>
      {visiblePost.map((item) => {
        return <Card key={item.id} item={item} />;
      })}

      <div
        ref={ref}
        className={
          show ? "hidden" : "w-[100%] h-[100px] my-[20px] flex justify-center"
        }
      >
        {show ? null : (
          <Image src={loadingGif} alt="" className="w-[100px] h-[100%]" />
        )}
      </div>
    </>
  );
};

export default DataDevided;
