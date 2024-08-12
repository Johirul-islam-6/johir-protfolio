import React from "react";
import "./SkillCard.css";
import JavaScript from "../../../app/assets/skill/javss.png";
import matral from "../../../app/assets/skill/matral.png";
import jira from "../../../app/assets/skill/jira.png";
import postman from "../../../app/assets/skill/postman.png";
import GraphQL from "../../../app/assets/skill/graphQl.png";
import testing from "../../../app/assets/skill/testing.png";
import git from "../../../app/assets/skill/git.png";
import mySQl from "../../../app/assets/skill/sql.png";
import postSQL from "../../../app/assets/skill/postSQL.png";
import typescript from "../../../app/assets/skill/typescript.png";
import ReactJS from "../../../app/assets/skill/reacts.png";
import Redux from "../../../app/assets/skill/redux.png";
import MongoDb from "../../../app/assets/skill/Mongo.png";
import Node from "../../../app/assets/skill/note.png";
import Express from "../../../app/assets/skill/expresse.png";
import Tailwind from "../../../app/assets/skill/tail.png";
import BootStrap from "../../../app/assets/skill/bootstap.png";
// import Redux from "../../../app/assets/skill/matral.png";
import NextJS from "../../../app/assets/skill/n.png";
import Firebase from "../../../app/assets/skill/fire.png";
import Image from "next/image";
import { HeadingText } from "@/Components/untility/HeadingText/HeadingText";

const SkillsCard = () => {
  return (
    <>
      <div id="services" className="">
        <div className="mt-[100px] text-center pb-7 md:pb-10 lg:pb-10">
          <HeadingText
            title1={"Development Skills"}
            title2={"Development Skills"}
          />
        </div>

        <div className="mt-[40px]">
          <>
            {/* show only sm to md */}
            <div className="grid grid-cols-2  xl:grid-cols-6 md:hidden auto-cols-max gap-x-5 gap-y-8 w-[100%] bg-balck md:px-10  items-center ">
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Javascript</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={JavaScript}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">React.JS</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={ReactJS}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">MongoDB</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={MongoDb}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Firebase</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Firebase}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Node.js</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Node}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Express.js</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Express}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Next.js</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={NextJS}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Tailwind</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Tailwind}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Bootstrap</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={BootStrap}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[22px]">Redux</h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Redux}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    TypeScript
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={typescript}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Material
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={matral}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    postSQL
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={postSQL}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    MySQl
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={mySQl}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    GraphQL
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={GraphQL}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Testing
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={testing}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    gitHub
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={git}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Jira
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={jira}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Postman
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={postman}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* show only md to lg */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:hidden auto-cols-max gap-x-5 gap-y-8 w-[100%] bg-balck md:px-10  items-center">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[20px] font-bold">
                    Javascript
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={JavaScript}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    React.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={ReactJS}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[20px] font-bold">
                    MongoDB
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={MongoDb}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Firebase
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Firebase}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    Node.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Node}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Express.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Express}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Next.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={NextJS}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    Tailwind
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Tailwind}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="SkillCArd border10px">
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    BootStrap
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={BootStrap}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Redux
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Redux}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* --xl show only-- */}
            <div
              id="xldiv"
              className="hidden xl:grid xl:grid-cols-5 gap-x-5 gap-y-8 w-[100%] items-center"
            >
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[20px] font-bold">
                    Javascript
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={JavaScript}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    React.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={ReactJS}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-2 text-[20px] font-bold">
                    MongoDB
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={MongoDb}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Firebase
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Firebase}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    Node.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Node}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Express.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Express}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Next.js
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={NextJS}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    Tailwind
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Tailwind}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-4 text-[20px] font-bold">
                    BootStrap
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={BootStrap}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Redux
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={Redux}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    TypeScript
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={typescript}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Material
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={matral}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    postSQL
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={postSQL}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    MySQl
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={mySQl}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    GraphQL
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={GraphQL}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Testing
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={testing}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    gitHub
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={git}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Jira
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={jira}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="SkillCArd border10px"
              >
                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                  <h1 className="text-white pl-3 text-[20px] font-bold">
                    Postman
                  </h1>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="w-[100px] xl:h-[75px] md:h-[74px] h-[71px]"
                      src={postman}
                      alt=""
                    />
                  </div>
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
