import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
// import SectionFive from "./SectionFive";
import { SectionFive } from "./SectionFive";
import SectionSix from "./SectionSix";
import LastSection from "./LastSection";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <LastSection />
    </section>
  );
}
