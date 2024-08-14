"use client";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWindowClose } from "react-icons/fa";
import Link from "next/link";
import "./Layout.css";
import logo from "@/app/assets/navbar/logo.png";
import linkend from "../../app/assets/linkend.jpg";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#fff]   transition ease transform duration-300`;

  // navbar scrilling

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 6) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        <navbar
          className={`${
            isFixed ? "fixed scrolled" : ""
          } navbar z-[10000000] fixed top-0 flex justify-between py-[2px] `}
        >
          <ul className="max-w-screen-xl navbar flex justify-between py-[2px] relative z-[100000]">
            {/* <!-- logo --> */}
            <Link href="/" className="flex items-center profile p-1  mt-[0px] ">
              <div className="logo-bg flex items-center font-bold text-2xl text-amber-500">
                <Image
                  width={0}
                  height={0}
                  className="w-[100px] md:ps-2"
                  src={logo}
                  alt=""
                />
              </div>
              {/* <Image src={logo} className="h-11  mr-1.5" alt="Flowbite Logo" /> */}
            </Link>

            {/* <!-- navigation content menu --> */}
            <nav className="nav font-semibold text-lg hidden lg:block">
              <ul className="flex items-center">
                <li className="px-4  duration-200 cursor-pointer  active">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#projects"
                  >
                    project
                  </Link>
                </li>
                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#services"
                  >
                    Services
                  </Link>
                </li>

                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#reviews"
                  >
                    Reviews
                  </Link>
                </li>
                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="pe-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="https://www.linkedin.com/in/johirul-islam99/"
                    target="blank"
                  >
                    <Image width={25} height={16} src={linkend} alt="" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ----------------- only small and mid size Display start --------------- */}

            <div className="drawer py-2 lg:hidden  justify-end ">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content ">
                {/* Page content here */}
                <label
                  onClick={() => setIsOpen(!isOpen)}
                  htmlFor="my-drawer"
                  className="z-[1000]"
                >
                  <div
                    className="flex flex-col h-9 w-12 py-[3px] rounded justify-center items-center group "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div
                      className={`${genericHamburgerLine} ${
                        isOpen
                          ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        isOpen
                          ? "opacity-0"
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        isOpen
                          ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </label>
              </div>
              <div className="drawer-side ">
                <label
                  onClick={() => setIsOpen(false)}
                  htmlFor="my-drawer"
                  className="drawer-overlay"
                ></label>

                <ul className="menu px-4 w-80 min-h-full  text-base-content bg-[#020312] pt-10">
                  <div className="flex justify-between ">
                    <h1 className="text-white text-[18px] text-[600]"></h1>

                    <label
                      onClick={() => setIsOpen(false)}
                      htmlFor="my-drawer"
                      className="z-[10]"
                    >
                      <div className="flex flex-col h-9 w-12 rounded justify-center items-center group">
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </label>
                  </div>

                  {/* Sidebar content here */}
                  <ul className="flex flex-col gap-3  items-start">
                    <li className="px-4  duration-200 cursor-pointer  active">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/design"
                      >
                        design
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/project"
                      >
                        project
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/services"
                      >
                        Services
                      </Link>
                    </li>

                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/reviews"
                      >
                        Reviews
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </ul>
          {/* ----------------- only small and mid size Display end --------------- */}
        </navbar>
      </div>
    </>
  );
};
