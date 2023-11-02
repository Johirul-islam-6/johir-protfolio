import Link from "next/link";
import "./Footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <footer className=" footer mt-[100px]">
        <div className="footer-container py-8  w-[100%]  max-w-screen-xl flex md:flex-row justify-between items-center">
          <div className="footer_logo w-[45%] flex justify-start items-center ">
            <div>
              <Link
                href="/"
                className="flex items-center profile p-1  mt-[5px] relative z-50 "
              >
                <div className="logo-bg flex items-center font-bold text-2xl text-amber-500">
                  <img
                    className="w-[60px] py-2 ps-2"
                    src="https://i.ibb.co/CtBNX5V/Untitled-1.png"
                    alt=""
                  />
                  <span className="text-amber-700 mt-5 absolute ml-[55px] md:ml-[63px] text-[16px] md:text-[25px] ">
                    Protfolio
                  </span>
                </div>
                <p className="text-[16px] py-2 text-end mt-[70px] ms-5">
                  as a web developer
                </p>
              </Link>
            </div>
          </div>

          <div className="w-full footer-item flex flex-row justify-evenly items-center ">
            <div className="flex gap-20 justify-center items-center ">
              <ul>
                <li>
                  <a className="footer-link" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/review">
                    reviews
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="footer-link" href="/project">
                    project
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/design">
                    design
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-end">
                <ul className="Fab-Icon flex flex-wrap gap-5 text-[35px] text-[#fff]  pe-10">
                  <li>
                    <Link
                      href={"https://www.facebook.com/rasel2023boss"}
                      target="blank"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://www.linkedin.com/in/johirul-islam99/"}
                      target="blank"
                    >
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://twitter.com/Masti50678584"}
                      target="blank"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://github.com/Johirul-islam-6"}
                      target="blank"
                    >
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <FaEnvelope />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[400px]">
          <div className="footer-gradient-rounded-top  "></div>
        </div>
      </footer>
      <h1 className="text-end flex  justify-end w-[100%] max-w-screen-xl pe-1">
        ©2023 Copyright All Rights Reserved
      </h1>
    </>
  );
};
