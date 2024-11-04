"use client";
import plus from "@/public/add-01.svg";
import minus from "@/public/minus.svg";
import { useState } from "react";

import Image from "next/image";

type faqProps = {
  title: string;
  text: string;
};
const FaqChild = (props: faqProps) => {
  const [drop, setDrop] = useState(false);
  // let toggle = false;
  const handleClick = () => {
    if (drop == false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  // const [open, setOpen] = useState("false");
  return (
    <section
      onClick={handleClick}
      className={
        drop
          ? `max-h-[300px] overflow-hidden bg-[#f7f4fc] max-w-[600px] cursor-pointer`
          : `max-h-[55px] overflow-hidden cursor-pointer`
      }
    >
      <section className="bg-[#f7f4fc] min-h-[50px] px-2  font-semibold flex justify-between items-center gap-[7.5em] min-w-[600px] max-w-[400px]">
        <p className="max-w-[400px] ">{props.title}</p>
        <Image src={drop ? minus : plus} alt="" width={20} height={20} />
      </section>
      <p className="p-2">{props.text}</p>
    </section>
  );
};

export default FaqChild;
