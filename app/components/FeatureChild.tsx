import Image from "next/image";
type props = {
  image: string;
  title: string;
  text: string;
  background: string;
  titleColor: string;
  borderColor: string;
};

function FeatureChild(prop: props) {
  return (
    <section
      className={`flex items-start gap-4 py-6 px-6 ${prop.borderColor} border-l-[2px]`}
    >
      <section className="py-2">
        <section className={prop.background}>
          <Image src={prop.image} alt="" width={30} height={30} />
        </section>
      </section>
      <section className="flex flex-col max-w-[500px] py-0">
        <header
          className={`text-[35px] p-0 m-0 flex items-start ${prop.titleColor} `}
        >
          {prop.title}
        </header>
        <p className="text-[20px] text-[#B1B4B7]">{prop.text}</p>
      </section>
    </section>
  );
}

export default FeatureChild;
