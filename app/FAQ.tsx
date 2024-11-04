import FaqChild from "./components/FaqChild";
import TransparentButton from "./components/TransparentButton";
import Image from "next/image";
import minus from "@/public/minus.svg";
const FAQ = () => {
  const title2 = "How do i track my progress using the LMS dashboard?";
  const title3 = "How do i access my LMS dashboard?";
  const title4 = "Is the LMS dashboard mobile-friendly?";
  const title5 = "What information is available on the dashboard?";
  const title6 =
    "How can i communicate with the instructor or peers through the dashboard?";
  const title7 = "Can i customize my LMS dashboard?";
  const title8 =
    "What should i do if i encounter issues with the LMS dashboard or need assistance?";
  const text =
    "LMS dashboard is a centralized interface that provides users with a visual overview of their learning and training activities. It’s important because it offers quick access to important information, track progress, and enhances the overall learning experience.";
  return (
    <section>
      <section className="py-[3em] flex justify-between items-start">
        <section className="flex flex-col gap-6">
          <section className="max-w-[100px] ">
            <TransparentButton text="FAQs" />
          </section>
          <p className="text-[45px] max-w-[450px] font-bold">
            Got Questions? We’ve Got Answers!
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <p className="max-w-[300px] text-[#9EA1A5] ">
            Don’t see your question here? Feel free to contact us for
            personalized assistance.
          </p>
          <section className="flex gap-4">
            <p className="border px-2 py-[2px] rounded border-[#00000040] cursor-pointer">
              See more FAQs
            </p>
            <button
              className="border px-2 py-[2px] rounded border-[#00000040] bg-[#1C1C4A] text-white "
              type="button"
            >
              Get in touch
            </button>
          </section>
        </section>
      </section>

      <section className="flex justify-between  py-10">
        <section className="flex flex-col gap-2">
          <FaqChild
            title="What is an LMS dashboard, and why is it important?"
            text={text}
          />
          <FaqChild title={title2} text={text} />
          <FaqChild title={title3} text={text} />
          <FaqChild title={title4} text={text} />
        </section>
        <section className="flex flex-col gap-2">
          <FaqChild title={title5} text={text} />
          <FaqChild title={title6} text={text} />
          <FaqChild title={title7} text={text} />
          <FaqChild title={title8} text={text} />
        </section>
      </section>
    </section>
  );
};

export default FAQ;
