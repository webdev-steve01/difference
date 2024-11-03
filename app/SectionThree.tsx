import Image from "next/image";
import rectangle from "@/public/new-monitor.svg";
import play from "@/public/play.svg";
import Card from "./components/Card";
import TransparentButton from "./components/TransparentButton";
import Features from "./components/Features";

const textOne =
  "More than 2,350 teams were satisfied and 90% of them felt helped by our platform ";
const textTwo =
  "Work with more than 40 global countries to help them achieve learning goals ";
const textThree =
  "Work with more than 40 global countries to help them achieve learning goals ";
const SectionThree = () => {
  return (
    <section className="bg-white py-[5em] px-10 ">
      <section className="flex justify-between">
        <article className="max-w-[600px] flex flex-col gap-4">
          <div className="max-w-[100px]">
            <TransparentButton text="ABOUT US" />
          </div>
          <header className="font-bold text-[50px] leading-[60px]">
            From Humble Beginnings to Leading LMS Provider
          </header>
          <p className="text-[#B1B4B7] px-2">
            we're committed to your success. Our plat is designed to empower you
            with the tools and insights you need to excel in your learning
          </p>
        </article>
        <section className="bg-[#70717780] self-start flex justify-center px-6 relative">
          <Image src={rectangle} width={330} height={100} alt="" />
          <section className="absolute top-[40%] z-[999] bg-green px-2">
            <Image src={play} width={30} height={30} alt="" />
          </section>
        </section>
      </section>
      <section className="flex py-4 gap-4">
        <Card text={textOne} header="90%" />
        <Card text={textTwo} header="2.350+" />
        <Card text={textThree} header="10 years" />
      </section>

      <Features />
    </section>
  );
};

export default SectionThree;
