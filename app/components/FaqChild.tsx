// "use client";
import plus from "@/public/add-01.svg";

import Image from "next/image";

type faqProps = {
  title: String;
};
const FaqChild = (props: faqProps) => {
  // const [open, setOpen] = useState("false");
  return (
    <section>
      <section className="bg-[#E5DBF64D] min-h-[50px] px-2  font-semibold flex justify-between items-center gap-[7.5em] min-w-[600px]">
        <p className="max-w-[400px] ">{props.title}</p>
        <Image src={plus} alt="" width={20} height={20} />
      </section>
    </section>
  );
};

export default FaqChild;
