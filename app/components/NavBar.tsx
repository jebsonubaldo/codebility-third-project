"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import assets from "../../public/assets/assets";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTwitter, setHoveredTwitter] = useState(false);
  const [hoveredFacebook, setHoveredFacebook] = useState(false);
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const sections = ["hero", "story", "gallery"];
    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setNavbar(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // ms
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 shadow-gray-900 transition-all duration-300 lg:pb-4 ${
          scrolled
            ? "backdrop-blur-sm backdrop-brightness-75 bg-transparent/40"
            : ""
        }`}
      >
        <div className="bg-transparent justify-between px-4 mx-auto lg:max-w-[93%] md:items-center md:flex md:px-8">
          <div className="bg-transparent">
            <div className="bg-transparent flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" onClick={(e) => handleSmoothScroll(e, "hero")}>
                <Image
                  className="bg-none xl:mt-5 xs:mt-0 2xs:mt-0 xs:w-16 2xs:w-14 !cursor-pointer"
                  src={assets.navLogo}
                  alt=""
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden z-50">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src={assets.closeIcon}
                      width={30}
                      height={30}
                      alt="logo"
                      className=""
                    />
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
              className={`bg-transparent absolute top-0 w-full left-0 flex-1 pb-3 lg:mt-8  lg:p-4 md:block md:pb-0 md:mt-0 xs:mt-0 2xs:mt-0 items-center ${
                navbar ? "p-12 md:p-0 block !bg-[#000000]" : "hidden"
              }`}
            >
              <ul className="bg-transparent h-screen md:h-auto items-center justify-end md:flex gap-[20px] mt-2 ">
                <li className={`pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-[#890116] border-[#890116] md:hover:text-[#890116] md:hover:bg-transparent ${
                  activeSection === "hero" ? "text-[#890116]" : "text-white"
                }`}>
                  <Link href="#hero" className="font-hero" onClick={(e) => handleSmoothScroll(e, "hero")}>
                    HOME
                  </Link>
                </li>
                <li className={`pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-[#890116] border-[#890116] md:hover:text-[#890116] md:hover:bg-transparent ${
                  activeSection === "story" ? "text-[#890116]" : "text-white"
                }`}>
                  <Link href="#story" className="font-hero" onClick={(e) => handleSmoothScroll(e, "story")}>
                    STORY
                  </Link>
                </li>
                <li className={`pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-[#890116] border-[#890116] md:hover:text-[#890116] md:hover:bg-transparent ${
                  activeSection === "gallery" ? "text-[#890116]" : "text-white"
                }`}>
                  <Link href="#gallery" className="font-hero" onClick={(e) => handleSmoothScroll(e, "gallery")}>
                    Gallery
                  </Link>
                </li>
                <li className="ml-7">
                  <div className="lg:ml-[5rem] flex sm:justify-center sm:ml-0 sm:mt-[30px] xs:justify-center xs:ml-0 xs:mt-[30px] lg:mt-0 lg:justify-between items-center mb-4 2xs:justify-center 2xs:ml-0 2xs:mt-[30px]">
                    <ul className="flex gap-[3rem] mb-7 lg:mr-16">
                      {/* Twitter Icon */}
                      <li>
                        <a
                          href=""
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredTwitter(true)}
                          onMouseLeave={() => setHoveredTwitter(false)}
                        >
                          <Twitter
                            className="hover:text-[#890116]"
                            strokeWidth={0}
                            fill={hoveredTwitter ? "#890116" : "white"}
                          />
                        </a>
                      </li>

                      {/* Facebook Icon */}
                      <li>
                        <a
                          href=""
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredFacebook(true)}
                          onMouseLeave={() => setHoveredFacebook(false)}
                        >
                          <Facebook
                            strokeWidth={0}
                            fill={hoveredFacebook ? "#890116" : "white"}
                          />
                        </a>
                      </li>

                      {/* LinkedIn Icon */}
                      <li>
                        <a
                          href=""
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredLinkedIn(true)}
                          onMouseLeave={() => setHoveredLinkedIn(false)}
                        >
                          <Linkedin
                            strokeWidth={0}
                            fill={hoveredLinkedIn ? "#890116" : "white"}
                          />
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