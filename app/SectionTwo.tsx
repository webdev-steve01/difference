import Image from "next/image";
import difference from "@/public/difference-one.svg";
import laptop from "@/public/monitor.png";
import boy from "@/public/boy.svg";
import girl from "@/public/girl.svg";
import plus from "@/public/purple-plus.svg";
const SectionTwo = () => {
  return (
    <section className="bg-[#1d1d4b] py-12   flex flex-col gap-[250px] px-10">
      <section className="relative">
        <Image
          src={difference}
          alt="diff"
          height={50}
          width={90}
          className="w-[100%]"
        />
        <section className="absolute left-[25%] top-[40%] z-40 w-[1100px] ">
          <Image src={laptop} height={400} width={950} alt="" />
        </section>
      </section>

      <section className="  text-[#C7C7F9] flex justify-between">
        <section className="flex flex-col gap-6">
          <section className="max-w-[450px]">
            <p className="">
              Our platform allows you to create dynamic quizzes surveys, and
              assignments that test learners’ knowledge and comprehension
            </p>
          </section>
          <form action="" className="flex gap-4">
            <input
              type="text"
              name=""
              id="text"
              placeholder="Your email address"
              className="bg-[#34345d] px-2 py-[0.1em]"
            />
            <section className="bg-white text-black px-2 rounded-lg overflow-hidden font-medium">
              <button type="button" className="rounded-lg">
                Get access
              </button>
            </section>
          </form>
        </section>
        <section>
          <section className="flex">
            <Image src={boy} width={20} height={20} alt="" />
            <Image src={girl} width={20} height={20} alt="" />
            <Image src={plus} width={20} height={20} alt="" />
            <p className="font-bold text-white text-[20px]">1.5k</p>
          </section>
          <p className="max-w-[250px] text-[14px]">
            Thousand of companies across SEA trust to manage critical learning
            management
          </p>
        </section>
      </section>
    </section>
  );
};

export default SectionTwo;
