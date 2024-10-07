"use client"

import React, { useEffect, useState, useRef } from "react";
import assets from "../../public/assets/assets";
import Image from "next/image";
import hero from "../../public/assets/bg.jpg";
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
      const imageWidth = containerWidth * 2; // The background image is set to 200% width
      const animationDistance = imageWidth - containerWidth;

      controls.start({
        x: [-0, -animationDistance],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
      controls.set({ x: 0 }); // Reset position for large screens
    }
  }, [isMobile, controls]);

  return (
    <div
      id="hero"
      ref={containerRef}
      className="content-div relative w-full flex md:items-end 2xs:bg-[20%] 2xs:items-center bg-center bg-cover z-0 min-h-[170vh] 2xs:min-h-[160vh] xl:min-h-[130vh] desktopHd:min-h-[120vh] bg-no-repeat overflow-hidden xl:bg-top"
    >
      {isMobile ? (
        <motion.div
          animate={controls}
          className="absolute inset-0 w-[200%] h-full"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: " 100%",
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
            <div className="flex flex-col tablet:flex-row  gap-[20px] md:gap-[40px] mt-[20px] xs:flex-col xs:justify-center xs:mt-[3rem]">
              <button className="min-w-[244px] xs:min-w-[300px]  bg-[#890116] text-white font-bold py-[15px] md:py-[25px] px-[20px] rounded-[40px] xs:text-[1.4rem] md:text-[1rem]">
                Avail your Tickets now
              </button>
              <button className="min-w-[244px] xs:min-w-[300px] text-white font-bold py-[12px]  md:py-[25px] px-[20px] border-2 border-[#890116] rounded-[40px] hover:bg-[#890116] transition duration-300 ease-in-out xs:text-[1.4rem] md:text-[1rem]">
                Watch Trailer
              </button>
            </div>
          </div>
          <div className=" col-span-1 flex justify-center tablet:justify-end z-40">
            <Image
              src={assets.hero}
              className=" h-[300px] hidden md:block md:w-[480px] md:h-[901px] desktopHd:w-full xl:w-[550px] absolute bottom-0 right-0"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;