
import { Banner } from '@/Components/Home/Banner/Banner'
import { Count } from '@/Components/Home/TotalCount/Count'
import SkillsCard from '@/Components/Home/SkillsCard/SkillsCard'
import Testimoniya from '@/Components/Testimonia/Testimoniya'
import { ContactFrom } from '@/Components/ContactFrom/ContactFrom'
import { IDo } from '@/Components/Home/IDo/IDo'
import { About } from '@/Components/About/About'
import Products from '@/Components/Freelancer/Products'
import Project from '@/Components/Project/Project'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
  

  
    <div className="max-w-screen-xl ">
     <Banner/>
    
    </div>
     <Count/>
      <div className="max-w-screen-xl ">
  
      <SkillsCard/>
       <IDo/>

       <Project/>

       <About/>
      <Testimoniya/>
      <ContactFrom/>
     
    </div>
     <Products/>

    </>
  )
}
