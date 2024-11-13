"use client"

import React, { useEffect, useState, useRef } from "react";
import assets from "../public/assets/assets";
import Image from "next/image";
import hero from "../public/assets/bg.jpg";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      let imageWidth = containerWidth * 1.94; // Base width multiplier
      let animationDistance = imageWidth - containerWidth;
      let duration = window.innerWidth <= 320 ? 0 : 13; // Disable for 320px
  
      // Special settings for exactly 320px
      if (window.innerWidth === 320) {
        imageWidth = containerWidth * 1.95 // Adjust width multiplier
        animationDistance = imageWidth - containerWidth;
        duration = 7; // Slow down animation for smoother effect
      }
  
      controls.start({
        x: [0, -animationDistance],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
      controls.set({ x: 0 });
    }
  }, [isMobile, controls]);
  

  // navigation animation
  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    const trailerSection = document.getElementById("trailer");
    if (trailerSection) {
      const targetPosition = trailerSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; 
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
    <div
      id="hero"
      ref={containerRef}
      className="content-div relative w-full flex md:items-end 2xs:bg-[20%] 2xs:items-center bg-center bg-cover z-0 lg:min-h-[170vh] 2xs:max-h-[130vh] xl:min-h-[170vh] desktopHd:min-h-[120vh] bg-no-repeat overflow-hidden xl:bg-top"
    >
      {isMobile ? (
        <motion.div
          animate={controls}
          className="absolute inset-0 w-[200%] h-full"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: " cover",
            backgroundRepeat: "repeat-x",
          }}
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
      )}
      <div className="absolute inset-0 bg-black opacity-60 overflow-hidden"></div>
      {/* Hero Section */}
      <section className="flex items-center justify-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 z-40 items-start 2xs:gap-5">
          <div className="col-span-1 p-[20px] md:p-[70px] lg:text-start xs:text-center 2xs:text-center 2xs:mt-6 xl:mt-0">
            <Image
              src={assets.heroTitle}
              className="w-full bg-cover bg-center"
              alt=""
            />
            <h3 className="font-semibold font-rogueFont text-white  lg:text-[1.6rem] xs:text-[2rem] xs:mt-[2rem] md:text-[1rem] 2xs:text-[1.4rem]">
              Two Heroes. One Unstoppable Adventure.
            </h3>
            <p className="text-white lg:text-[1.6rem]  xs:text-[1.3rem] md:text-[1rem] ">
              Join Deadpool and Wolverine in a multiverse-shattering showdown.
              Don't miss the epic team-up of the year - grab your tickets now
              for the blockbuster event everyone is talking about!
            </p>
            <div className="flex flex-col tablet:flex-row  gap-3 mt-[20px] xs:flex-col xs:justify-center xs:mt-[3rem] md:justify-center">
              <button className=" xs:min-w-[300px] md:!min-w-[200px] lg:!min-w-[300px] bg-[#890116] text-white font-bold py-[15px] md:py-[15px] px-[20px] md:!px-[10px] lg:!py-[20px] rounded-[40px] xs:text-[1.4rem] md:!text-[16px] lg:!text-xl">
                Avail your Tickets now
              </button>
              <button onClick={scrollToSection} className="xs:min-w-[300px] md:!min-w-[200px] lg:!min-w-[300px] text-white font-bold py-[12px]  md:py-[10px] px-[20px] md:!px-[10px] border-2 border-[#890116] rounded-[40px] hover:bg-[#890116] transition duration-300 ease-in-out xs:text-[1.4rem] md:!text-[16px] lg:!text-xl">
                Watch Trailer
              </button>
            </div>
          </div>
          <div className="hidden col-span-1 md:flex justify-center tablet:justify-end z-40">
            <Image
              src={assets.hero}
              className=" h-[300px]  md:w-[420px] md:h-[680px] lg:min-w-[530px] lg:min-h-[1000px] absolute bottom-0 right-0"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;