import TransparentButton from "./TransparentButton";
import Image from "next/image";
import johnDoe from "@/public/john-doe.svg";
import FeatureChild from "./FeatureChild";
import diamond from "@/public/diamond.svg";
import book from "@/public/file.svg";
import menu from "@/public/menu-square.svg";

const textOne =
  "Gain instant insight into your progress, upcoming tasks, and recent achievements. Visualize your learning journey with intuitive charts and statics.";
const textTwo =
  "Access a vast library of resources, from videos and document to interactive quizzes and assignments.Everything you need is just a click away";
const textThree =
  "Discover courses and content tailored to your interests and learning objectives. Our smart recommendation engine ensures your learning path is as unique as you are.";
const Features = () => {
  return (
    <section className="py-[3em]">
      <section className="flex flex-col items-center gap-4">
        <div className="max-w-[200px]">
          <TransparentButton text="OUR FEATURES" />
        </div>
        <div className="text-[50px] font-bold">
          <p>Powerful Features for Seamless Learning</p>
        </div>
      </section>
      <section className="flex justify-between items-center ">
        <section className="flex flex-col">
          <FeatureChild
            text={textOne}
            title="At-a-Glance Insights"
            image={diamond}
            background="bg-[#7D58B6] max-w-[40px] p-2 flex justify-center self-start max-h-[50px]"
            titleColor="text-[#743FCA]"
            borderColor="border-l-[#662BC2] "
          />
          <FeatureChild
            text={textTwo}
            title="Content Library"
            image={book}
            background="bg-[#F2F2F2] max-w-[40px] p-2 flex justify-center self-start max-h-[50px]"
            titleColor="text-black"
            borderColor="border-l-[#E9E9E9]"
          />
          <FeatureChild
            text={textThree}
            title="Personalized Recommendations"
            image={menu}
            background="bg-[#F2F2F2] max-w-[40px] p-2 flex justify-center self-start max-h-[50px]"
            titleColor="text-black"
            borderColor="border-l-[#E9E9E9]"
          />
        </section>
        <section className="">
          <Image src={johnDoe} alt="" width={500} height={100} />
        </section>
      </section>
    </section>
  );
};

export default Features;
