"use client";
import Image from "next/image";
import image01 from "../../assets/design/01.png";
import image02 from "../../assets/design/02.png";
import image03 from "../../assets/design/03.png";
import image04 from "../../assets/design/04.png";
import image05 from "../../assets/design/05.png";
import image06 from "../../assets/design/06.png";
import image07 from "../../assets/design/07.png";
import image08 from "../../assets/design/08.png";
import image09 from "../../assets/design/09.png";
import image10 from "../../assets/design/10.png";
import image11 from "../../assets/design/11.png";
import image12 from "../../assets/design/12.png";

import image13 from "../../assets/design/l-1.png";
import image14 from "../../assets/design/l-3.png";
import image15 from "../../assets/design/l-4.png";
import image16 from "../../assets/design/l-5.png";
import image17 from "../../assets/design/l-2.png";
import image18 from "../../assets/design/l-6.png";
import image19 from "../../assets/design/l-7.png";
import image20 from "../../assets/design/l-8.png";
import image21 from "../../assets/design/l-9.png";

import "../../../node_modules/react-photo-view/dist/react-photo-view.css";

import "./Design.css";
import { useState } from "react";
const Design = () => {
  const project = [
    {
      id: "6",
      Link: "https://profound-cuchufli-b18a10.netlify.app",
      image: image18,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "Html, css, tailwind etc.",
    },
    {
      id: "7",
      Link: "https://mocdt.vercel.app/",
      image: image01,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "Next.js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "7",
      Link: "",
      image: image02,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },

    {
      id: "9",
      Link: "https://resell-book-store.vercel.app/",
      image: image03,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "10",
      Link: "https://mocdt.vercel.app/",
      image: image04,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },

    {
      id: "10",
      Link: "https://fifa-world-cup-2023.netlify.app/",
      image: image19,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "Html, css, Bootstrap etc.",
    },
    {
      id: "11",
      Link: "https://unitech-seven.vercel.app/",
      image: image05,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "10",
      Link: "https://zesty-cheesecake-7b2b33.netlify.app/",
      image: image21,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "JavaScript, css, tailwind etc.",
    },
    {
      id: "12",
      Link: "https://unitech-seven.vercel.app/ourCourses",
      image: image06,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },

    {
      id: "4",
      Link: "https://symphonious-crisp-e5f04f.netlify.app",
      image: image16,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "Html, css, Bootstrap etc.",
    },
    {
      id: "13",
      Link: "https://mocdt.vercel.app/",
      image: image07,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "14",
      Link: "https://gorgeous-snickerdoodle-0ac638.netlify.app/",
      image: image20,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "JavaScript, css, Bootstrap etc.",
    },
    {
      id: "3",
      Link: "https://johir100.netlify.app",
      image: image15,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "Html, Css, Bootstrap, ect",
    },
    {
      id: "14",
      Link: "https://mocdt.vercel.app/",
      image: image08,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },

    {
      id: "1",
      Link: "https://rasel-mocdt-mailer.netlify.app",
      image: image13,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, JavaScript, tailwind css ect",
    },
    {
      id: "2",
      Link: "https://wonderful-wisp-2f81f4.netlify.app",
      image: image14,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React,html, css, tailwind, etc.",
    },
    {
      id: "15",
      Link: "https://resell-book-store.vercel.app/",
      image: image09,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "16",
      Link: "https://unitech-seven.vercel.app/unitech-architctural",
      image: image10,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "Next.js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "17",
      Link: "",
      image: image11,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "18",
      Link: "",
      image: image12,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, Node.js, MongoDB, REST Api, ect",
    },
    {
      id: "5",
      Link: "https://sensational-sprite-162dc6.netlify.app",
      image: image17,
      paragrap:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology: "React.Js, css, tailwind etc.",
    },
  ];

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
          {project?.map((project) => {
            return (
              <>
                <div class="mItem relative overflow-hidden">
                  <Image
                    width={500}
                    height={600}
                    className=" w-[100%] h-[100%] design-image"
                    src={project?.image}
                    alt="design"
                  />
                  <div className="overlay-design-container hidden ">
                    <a
                      target="blank"
                      href={project?.Link ? project?.Link : "/"}
                      className="underline text-[#c5c4c4] text-[14px] font-[700]"
                    >
                      live site link
                    </a>
                    <p className="text-[#e4e4e4] text-[12px] font-[700] pt-3">
                      {" "}
                      {project?.technology}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Design;
