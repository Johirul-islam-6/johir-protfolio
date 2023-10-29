import Image from "next/image";
import project1 from '@/app/assets/project/01.jpg'
import './project.css'
 const Project = () => {

  const project = [
    {
      id: "1",
      name : "Ema Jon today",
      image : project1,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : project1,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : project1,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    },
    {
      id: "1",
      name : "Ema Jon today",
      image : project1,
      paragrap :  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius accusamus expedita delectus ipsum itaque!",
      technology : "React.Js, Node.js, MongoDB, REST Api, ect"
    }
  ]

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

        <div className="project-container grid md:grid-cols-2 gap-8 w-[90%] mx-auto">
          {
            project?.map(project => {
            return  <>
              <div className="project-card flex flex-row justify-between items-center gap-3">
            <h1 className="project-title text-start flex flex-wrap w-[50%]">{project?.name}</h1>
            <div className="w-[50%] flex justify-end">
               <Image className="image-roted rounded-[10px]" width={250} height={130} src={project?.image} alt="" />
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

export default Project;
