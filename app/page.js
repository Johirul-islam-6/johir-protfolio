import { Banner } from "@/Components/Home/Banner/Banner";
import { Count } from "@/Components/Home/TotalCount/Count";
import SkillsCard from "@/Components/Home/SkillsCard/SkillsCard";
import Testimoniya from "@/Components/Testimonia/Testimoniya";
import { ContactFrom } from "@/Components/ContactFrom/ContactFrom";
import { IDo } from "@/Components/Home/IDo/IDo";
import { About } from "@/Components/About/About";
import Products from "@/Components/Freelancer/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectList } from "@/Components/ProjectList/ProjectList";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl ">
        <Banner />
      </div>
      <Count />
      <div className="max-w-screen-xl ">
        <About />
        <ProjectList />
        <SkillsCard />
        <IDo />
        <Testimoniya />
        <ContactFrom />
      </div>
      <Products />
    </>
  );
}
