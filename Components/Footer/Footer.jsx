import Link from "next/link";
import "./Footer.css";
import logo from "@/app/assets/navbar/logo.png";
import Image from "next/image";
export const Footer = () => {
  return (
    <>
      <footer className=" footer mt-[100px]">
        <div className=" w-[100%] flex justify-center items-center flex-col pt-5">
          <Image className="w-[150px] py-2 ps-2" src={logo} alt="" />
          <h1 className="text-center text-[16px] text-gray-500">
            ©2024 Copyright All Rights Reserved
          </h1>
        </div>

        <div className="absolute right-[400px] ">
          <div className="footer-gradient-rounded-top  "></div>
        </div>
        <div className="absolute left-[20px] ">
          <div className="footer-gradient-rounded-top  "></div>
        </div>
      </footer>
    </>
  );
};
