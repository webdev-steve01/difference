type cardProps = {
  header: string;
  text: string;
};
const Card = (props: cardProps) => {
  return (
    <section className="px-4 py-6 flex flex-col gap-4 shadow-lg shadow-[#0000001A] max-w-[400px] bg-gradient-to-tr from-white from-[70%] to-[#9FABEC]">
      <section className="text-[2em] text-[#7657AD] font-medium">
        {props.header}
      </section>
      <section className="text-[16px] max-w-[450px] text-[#959697]">
        {props.text}
      </section>
    </section>
  );
};

export default Card;
