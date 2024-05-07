import HomeFirstSection from "@/components/Home/HomeFirstSection";
import HomeFourthSection from "@/components/Home/HomeFourthSection";
import HomeSecondSection from "@/components/Home/HomeSecondSection";
import HomeThirdSection from "@/components/Home/HomeThirdSection";

export default function Home() {
  return (
    <section className=" px-5">
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection />
    </section>
  );
}
