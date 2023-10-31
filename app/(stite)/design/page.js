"use client"
import Image from "next/image";
import image01 from '../../assets/design/01.png'
import image02 from '../../assets/design/02.png'
import image03 from '../../assets/design/03.png'
import image04 from '../../assets/design/04.png'
import image05 from '../../assets/design/05.png'
import image06 from '../../assets/design/06.png'
import image07 from '../../assets/design/07.png'
import image08 from '../../assets/design/08.png'
import image09 from '../../assets/design/09.png'
import image10 from '../../assets/design/10.png'
import image11 from '../../assets/design/11.png'
import image12 from '../../assets/design/12.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import '../../../node_modules/react-photo-view/dist/react-photo-view.css';


import './Design.css'
import { useState } from "react";
 const Design = () => {

  const project = [
    {
      id: "1",
      name : "Ema Jon today",
      image : image01,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image02,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image03,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image04,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image05,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image06,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image07,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image08,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image09,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image10,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image11,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : image12,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
  ]

 const [currentImageIndex, setCurrentImageIndex] = useState(null);

  return (
    <>
    <div className="project py-20 px-10 max-w-screen-xl">
       <div className="mt-[30px] text-center pb-7 md:pb-10 lg:pb-10">
            <h5 className="font-bold text-2xl md:text-4xl lg:text-4xl uppercase">
              Web page Design
            </h5>
            <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#bb7103] h-1"></div>
            <p className="text-center pt-3 text-[18px] rem md:px-[20%] px-2 ">
              Don t tire of doing little things for others, because sometimes{" "}
              <br /> those little things occupy the biggest part of their heart.
            </p>
          </div>

        <div className="project-container masonry w-[100%] mx-auto">
          {
            project?.map(project => {
            return  <>
              <div class="mItem relative overflow-hidden">
                  
                    <Image width={500} height={600} className=" w-[100%] h-[100%] design-image" src={project?.image} alt='design'/>
                     <div className="overlay-design-container hidden ">
                       <p className="underline text-[#c5c4c4] text-[14px] font-[700]">live site link</p>
                        <p className="text-[#e4e4e4] text-[12px] font-[700] pt-3"> Next.js, Tailwind Css, Html, Css, etc</p>
                     </div>
                 
                
               </div>
               
              </>
            })
          }
          
        </div>
    </div>
    </>
  )
}

export default Design;
