import Image from "next/image";
import logo from "@/public/machine-learning-2-logo.svg";
// import caret from "@/public/caret.svg";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center text-[20px] px-[40px] py-2 bg-white">
      <section className="flex gap-1 text-[32px]">
        <Image src={logo} height={20} width={30} alt="logo" />
        <p>Difference</p>
      </section>

      <section className="flex gap-[35px] *:flex items-center">
        <div>About</div>
        <div className="items-center relative after:content-none after:absolute after:border-black after:border">
          <p>Features </p>
        </div>
        <div>Pricing</div>
        <div>Contact</div>
      </section>

      <section className="bg-[#1c1c4a] text-white  rounded-lg">
        <button type="button" className="px-4">
          Get started
        </button>
      </section>
    </nav>
  );
};

export default Nav;
