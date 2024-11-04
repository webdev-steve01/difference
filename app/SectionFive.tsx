"use client";
import TransparentButton from "./components/TransparentButton";
import ellipse from "@/public/ellipse.svg";
import Image from "next/image";
import pinkLeft from "@/public/pink-left.svg";
import check from "@/public/white-tick.svg";
import BlackCheck from "@/public/tick.svg";
import FAQ from "./FAQ";
import { useState } from "react";
// import PriceSwitch from "./components/PriceSwitch";
export const SectionFive = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <section className="py-10 px-6">
      <div className="max-w-[120px]">
        <TransparentButton text="PRICING LIST" />
      </div>
      <section className="flex justify-between">
        <p className="text-[2.2em] font-bold max-w-[360px]">
          Flexible Pricing Plans to Suit Your Needs
        </p>
        <article className="flex flex-col justify-between">
          <p className="max-w-[250px] text-[#9EA1A5]">
            Highlight different subscription levels with clear pricing details.
          </p>
          <section className="flex items-center gap-2">
            <p>Annually</p>
            <section
              onClick={handleToggle}
              className={
                toggle
                  ? `bg-[#6D4EA5] w-[40px] after:contents after:border after:w-4 after:h-2 h-[20px] rounded-full flex items-center justify-start`
                  : `bg-[#6D4EA5] w-[40px] after:contents after:border after:w-4 after:h-2 h-[20px] rounded-full flex items-center justify-end`
              }
            >
              <Image src={ellipse} alt="" width={20} height={20} />
            </section>
            <p>Monthly</p>
          </section>
        </article>
      </section>
      <section className="flex gap-4 py-10 ">
        <section className="border max-w-[] px-6 text-white bg-gradient-to-t from-[#7D58B7] from-[5%] to-[#201E50] flex flex-col gap-2 py-10 shadow-xl shadow-[#5C13CE26] hover:shadow-2xl hover:shadow-[#5C13CE26] hover:scale-105 transition-all duration-[300ms] ease-in-out ">
          <h1 className="text-[2em]">Basic Plan</h1>
          <p className="text-[1.4em] text-[#767692] ">
            Ideal for small startups
          </p>
          <section>
            $0/<span> {toggle ? "year" : "month"}</span>
          </section>
          <section className="flex gap-4 items-center bg-white rounded-lg px-6 py-1">
            <p className="text-[1.2em] text-[#7D58B7]">Try for free</p>
            <Image src={pinkLeft} width={15} height={15} alt="" />
          </section>
          <section className="flex flex-col gap-4 my-4 max-w-[250px]">
            <section className="flex gap-2">
              <Image src={check} width={20} height={20} alt="" />
              <p>User-friendly interface</p>
            </section>
            <section className="flex gap-2">
              <Image src={check} width={20} height={20} alt="" />
              <p>Basic course creation and content upload</p>
            </section>
            <section className="flex gap-2">
              <Image src={check} width={20} height={20} alt="" />
              <p>Progress tracking and reporting</p>
            </section>
            <section className="flex gap-2">
              <Image src={check} width={20} height={20} alt="" />
              <p>Email support</p>
            </section>
          </section>
        </section>
        <section className="border max-w-[] px-6 text-black bg-gradient-to-t from-[#ffffff] from-[70%] to-[#C3C8F380] flex flex-col gap-2 py-10 shadow-lg shadow-[#0000000D]  hover:shadow-2xl hover:shadow-[#0000000D] hover:scale-105 transition-all duration-[300ms] ease-in-out">
          <h1 className="text-[2em]">Pro Plan</h1>
          <p className="text-[1.2em] text-[#767692]">
            Ideal for Growing businesses
          </p>
          <section>
            $0/<span> {toggle ? "year" : "month"}</span>
          </section>
          <section className="flex gap-4 items-center border-[#f1f1f1] border bg-white rounded-lg px-6 py-1">
            <p className="text-[1.2em] text-[#7D58B7]">Get Started</p>
            <Image src={pinkLeft} width={15} height={15} alt="" />
          </section>
          <section className="flex flex-col gap-4 my-4 max-w-[250px]">
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Advanced course authoring tools</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Unlimited user accounts</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Compliance tracking</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Integration with popular apps</p>
            </section>
          </section>
        </section>
        <section className="border max-w-[] px-6 text-black bg-gradient-to-t from-[#ffffff] from-[70%] to-[#C3C8F380] flex flex-col gap-2 py-10 shadow-lg shadow-[#0000000D]  hover:shadow-2xl hover:shadow-[#0000000D] hover:scale-105 transition-all duration-[300ms] ease-in-out">
          <h1 className="text-[2em]">Enterprise Plan</h1>
          <p className="text-[1.2em] text-[#767692]">
            Ideal for Large enterprise
          </p>
          <section>
            $0/<span> {toggle ? "year" : "month"}</span>
          </section>
          <section className="flex gap-4 items-center bg-white border-[#f1f1f1] border rounded-lg px-6 py-1">
            <p className="text-[1.2em] text-[#7D58B7]">Get Started</p>
            <Image src={pinkLeft} width={15} height={15} alt="" />
          </section>
          <section className="flex flex-col gap-4 my-4 max-w-[250px]">
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Include Pro Plan features</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>SCORM and xAPI suupport</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Customizable reporting and analytics</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Priority support</p>
            </section>
          </section>
        </section>
        <section className="border max-w-[] px-6 text-black bg-gradient-to-t from-[#ffffff] from-[70%] to-[#C3C8F380] flex flex-col gap-2 py-10 shadow-lg shadow-[#0000000D]  hover:shadow-2xl hover:shadow-[#0000000D] hover:scale-105 transition-all duration-[300ms] ease-in-out">
          <h1 className="text-[2em]">Education Plan</h1>
          <p className="text-[1.2em] text-[#767692]">
            Ideal for Educational Instutions
          </p>
          <section>
            $0/<span> {toggle ? "year" : "month"}</span>
          </section>
          <section className="flex gap-4 items-center bg-white border border-[#f1f1f1] rounded-lg px-6 py-1">
            <p className="text-[1.2em] text-[#7D58B7]">Get Started</p>
            <Image src={pinkLeft} width={15} height={15} alt="" />
          </section>
          <section className="flex flex-col gap-4 my-4 max-w-[250px]">
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Includes enterprise Plan features</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Access fork-12 Institutions</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Student and Teacher accounts</p>
            </section>
            <section className="flex gap-2">
              <Image src={BlackCheck} width={20} height={20} alt="" />
              <p>Gradebook and assessment</p>
            </section>
          </section>
        </section>
      </section>
      <FAQ />
    </section>
  );
};

//  SectionFive;
