import React from "react";
import "./SkillCard.css";
import JavaScript from "../../../app/assets/skill/javss.png";
import ReactJS from "../../../app/assets/skill/reacts.png";
import Redux from "../../../app/assets/skill/redux.png";
import MongoDb from "../../../app/assets/skill/Mongo.png";
import Node from "../../../app/assets/skill/note.png";
import Express from "../../../app/assets/skill/expresse.png";
import Tailwind from "../../../app/assets/skill/tail.png";
import BootStrap from "../../../app/assets/skill/bootstap.png";
import MatarialUi from "../../../app/assets/skill/matral.png";
import NextJS from "../../../app/assets/skill/n.png";
import Firebase from "../../../app/assets/skill/fire.png";
import Image from "next/image";

const SkillsCard = () => {
  return (
    <>
      <div id="services" className="">
        <div className="mt-[100px] text-center pb-7 md:pb-10 lg:pb-10">
          <h5 className="font-bold text-2xl md:text-4xl lg:text-4xl uppercase">
            Working Skill
          </h5>
          <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#bb7103] h-1"></div>
        </div>

        <div className="mt-[40px]">
          <>
            {/* --xl show only-- */}
            <div className="grid md:grid-cols-4 xl:grid-cols-6 gap-y-10 items-center justify-center  Skill-container md:px-5">
              <div className="SkillCArd border10px">
                <div className=" flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg ">
                  <h1 className="text-white pl-2 text-[20px] font-bold">
                    Javascript
                  </h1>
                  <Image height={80} className="" src={JavaScript} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    React.js
                  </h1>
                  <Image height={80} className="" src={ReactJS} alt="" />
                </div>
              </div>

              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-2 text-[20px] font-bold">
                    MongoDB
                  </h1>
                  <Image height={80} className="" src={MongoDb} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Firebase
                  </h1>
                  <Image height={80} className="" src={Firebase} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    Node.js
                  </h1>
                  <Image height={80} className="" src={Node} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Express.js
                  </h1>
                  <Image height={80} className="" src={Express} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Next.js
                  </h1>
                  <Image height={80} className="" src={NextJS} alt="" />
                </div>
              </div>
              <div data-aos-easing="linear" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    Tailwind
                  </h1>
                  <Image height={80} className="" src={Tailwind} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    BootStrap
                  </h1>
                  <Image height={80} className="" src={BootStrap} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Mataril
                  </h1>
                  <Image height={80} className="" src={MatarialUi} alt="" />
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Prisma
                  </h1>
                  {/* <Image height={80} className="" src={MatarialUi} alt="" /> */}
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    End-Design
                  </h1>
                  {/* <Image height={80} className="" src={MatarialUi} alt="" /> */}
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    postgresql
                  </h1>
                  {/* <Image height={80} className="" src={MatarialUi} alt="" /> */}
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px hight-bg">
                  <h1 className="text-white pl-3 text-[20px] font-bold">SQL</h1>
                  {/* <Image height={80} className="" src={MatarialUi} alt="" /> */}
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
