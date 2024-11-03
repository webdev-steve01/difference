import Image from "next/image";
import mac from "@/public/iMac-inch.svg";
const SectionSix = () => {
  return (
    <section className="bg-[#1D1D4B] px-6 flex justify-between items-center relative my-4 py-[4em] ">
      <section className="flex flex-col gap-6 max-w-[700px] font-semibold ">
        <p className="text-[50px] text-white ">
          Let’s Join with 2.350+ Subscriber in the work
        </p>
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
      <section className="absolute right-0 top-[-40px]">
        <Image src={mac} alt="" height={100} width={500} />
      </section>
    </section>
  );
};

export default SectionSix;
