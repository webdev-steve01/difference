"use client";
import Image from "next/image";
import person from "@/public/boy.svg";
import left from "@/public/left-arrow-svgrepo-com.svg";
import right from "@/public/right-arrow-svgrepo-com.svg";
import { useState } from "react";
const SectionFour = () => {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(true);

  const handleNext = () => {
    setNext(true);
    setPrev(false);
  };
  const handlePrev = () => {
    setNext(false);
    setPrev(true);
  };
  return (
    <section className="bg-[#1d1d4b] text-white py-4">
      <section className="px-[2.5em] py-10 flex flex-col gap-4">
        <section className="flex justify-between ">
          <p className="max-w-[255px] text-[2em] bg-gradient-to-r from-[#51aaea] to-[#7958ba] to-[90%] text-transparent bg-clip-text font-medium">
            Real Stories From Entrepreneurs
          </p>
          <section className="flex items-center gap-4">
            <section className="p-2 border" onClick={handlePrev}>
              <Image src={left} width={40} height={50} alt="" />
            </section>
            <section className="text-[#747491] font-medium">
              <span
                className={prev ? `underline font-semibold text-white` : ``}
              >
                01
              </span>{" "}
              /
              <span
                className={next ? `underline font-semibold text-white` : ``}
              >
                05
              </span>
            </section>
            <section className="p-2 border" onClick={handleNext}>
              <Image src={right} width={40} height={50} alt="" />
            </section>
          </section>
        </section>
        <section className="flex justify-between py-4">
          <section className="flex flex-col gap-3">
            <section>
              <Image src={person} alt="" height={50} width={45} />
            </section>
            <section>
              <p>Kunkle kem</p>
              <p className="text-[0.8em] text-[#606080]">founder and ceo</p>
            </section>
          </section>
          <p className="max-w-[900px] text-[1.5em]">
            &quot;It&apos;s like having a personal learning assistant. The
            recommendation are spot on, and the progress tracking keeps me
            motivated. The dashboard makes my online courses feels like a
            breeze&quot;
          </p>
        </section>
      </section>
    </section>
  );
};

export default SectionFour;
