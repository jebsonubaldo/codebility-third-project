"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import close from "../../public/close.svg";
import burgerMenu from "../../public/hamburger-menu.svg";
import assets from "../assets/assets";


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-50">
        <div className="bg-transparent justify-between px-4 mx-auto lg:max-w-[93%] md:items-center md:flex md:px-8">
          <div className="bg-transparent">
            <div className="bg-transparent flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image className="bg-none" src={assets.navLogo} alt="" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={assets.closeIcon} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={assets.menuIcon}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`bg-transparent flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 items-center ${
                navbar ? "p-12 md:p-0 block !bg-[#000000]" : "hidden"
              }`}
            >
              <ul className="bg-transparent h-screen md:h-auto items-center justify-center md:flex gap-[20px]">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#890116]  border-[#890116]  md:hover:text-[#890116] md:hover:bg-transparent">
                  <Link href="#about" className="font-rogueFont" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#890116]  border-[#890116]  md:hover:text-[#890116] md:hover:bg-transparent">
                  <Link href="#blog" className="font-rogueFont" onClick={() => setNavbar(!navbar)}>
                    STORY
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#890116]  border-[#890116] md:hover:text-[#890116] md:hover:bg-transparent">
                  <Link href="#contact" className="font-rogueFont" onClick={() => setNavbar(!navbar)}>
                    WALLPAPERS
                  </Link>
                </li>
                <li className="">
                  <div className="lg:ml-[5rem] flex sm:justify-center sm:ml-0 sm:mt-[30px] xs:justify-center xs:ml-0 xs:mt-[30px] lg:mt-0 lg:justify-between items-center mb-4 ">
                    <ul className="flex gap-[3rem]  ">
                      <li>
                        <a href="">
                          <Image src={assets.twitter} alt="" className="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Image src={assets.facebook} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Image src={assets.linkedin} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    
    </>
  );
}