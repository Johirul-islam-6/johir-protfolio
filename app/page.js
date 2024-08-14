import { Banner } from "@/Components/Home/Banner/Banner";
import { Count } from "@/Components/Home/TotalCount/Count";
import SkillsCard from "@/Components/Home/SkillsCard/SkillsCard";
import { ContactFrom } from "@/Components/ContactFrom/ContactFrom";

import { About } from "@/Components/About/About";
import Products from "@/Components/Freelancer/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectList } from "@/Components/ProjectList/ProjectList";
import "./globals.css";
import { Reviews } from "@/Components/Review/Reviews";
import { Services } from "@/Components/Home/Services/Services";

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
        <Services />

        <Reviews />
        <ContactFrom />
      </div>
      <Products />
    </>
  );
}
