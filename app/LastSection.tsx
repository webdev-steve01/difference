import Image from "next/image";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/facebook-02.svg";
import linkedIn from "@/public/linkedin-02.svg";
import insta from "@/public/instagram.svg";
import copy from "@/public/copyright.svg";
import logo from "@/public/machine-learning-2-logo.svg";
import difference from "@/public/DIFFERENCE.svg";
const LastSection = () => {
  return (
    <section>
      <section className="flex justify-between px-6 py-4">
        <section className=" flex flex-col gap-4">
          <section className="flex gap-2 text-[1.3em]">
            <Image src={logo} width={25} height={50} alt="" />
            <p>Difference</p>
          </section>
          <section className="flex gap-4">
            <Image src={facebook} width={20} height={20} alt="" />
            <Image src={twitter} alt="" width={20} height={20} />
            <Image src={linkedIn} alt="" width={20} height={20} />
            <Image src={insta} alt="" width={20} height={20} />
          </section>
        </section>
        <section className="flex gap-8 text-[#4D5360] ">
          <section className=" ">
            <p>LEARNING PARK</p> <p>355 JERRY UNDERPASS</p> <p>08966 VIRGINA</p>
          </section>
          <section className="flex flex-col ">
            <p>(301) 789-6820</p> <p>HEY@DIFFERENCE</p>
          </section>
          <section>
            <p>ABOUT US</p>
            <p>FEATURES</p>
            <p>PRICING</p>
            <p>CONTACT US</p>
          </section>
        </section>
      </section>

      <section className="flex justify-between px-8 py-10 font-semibold">
        <section className="flex">
          <Image src={copy} width={10} height={10} alt="" />
          <p>2024 ALL RIGHT RESERVED </p>
        </section>
        <p>SINCE 2024</p>
        <p>PRIVACY & POLICY</p>
      </section>

      <section className="py-6 flex justify-center">
        <Image src={difference} alt="" width={1200} />
      </section>
    </section>
  );
};

export default LastSection;
