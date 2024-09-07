import React from "react";
import assets from "../assets/assets";
import Image from "next/image";
import hero from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
    className="relative w-full flex md:items-end 2xs:bg-[20%] xs:items-center  bg-center bg-cover z-0 min-h-[170vh] 2xs:min-h-[160vh] xl:min-h-[130vh] desktopHd:min-h-[120vh] bg-no-repeat overflow-hidden xl:bg-top"
    style={{ backgroundImage: `url(${hero.src})`, backgroundSize: "fit" }}
  >
    <div className="absolute inset-0 bg-black opacity-60 overflow-hidden"></div>
    {/* Hero Section */}
    <section className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 z-40 items-start 2xs:gap-5">
        <div className="col-span-1 p-[20px] md:p-[70px] lg:text-start xs:text-center 2xs:text-center 2xs:mt-6 xl:mt-0">
          <Image src={assets.heroTitle} className="w-full bg-cover bg-center" alt=''/>
          <h3 className="font-semibold font-rogueFont text-white  lg:text-[1.6rem] xs:text-[2rem] xs:mt-[2rem] md:text-[1rem] 2xs:text-[1.4rem]">
            Two Heroes. One Unstoppable Adventure.
          </h3>
          <p className="text-white lg:text-[1.6rem]  xs:text-[1.3rem] md:text-[1rem] ">
            Join Deadpool and Wolverine in a multiverse-shattering showdown. Don't miss the epic team-up of the year - grab your tickets now for the blockbuster event everyone is talking about!
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
        <div className="xl:absolute bottom-0 right-0 col-span-1 flex justify-center tablet:justify-end z-40">
          <Image src={assets.hero} className="h-[300px] 2xs xs:h-full 2xs:h-full 2xs:mt-9 md:h-[901px] desktopHd:w-full xl:w-[550px]" alt="" />
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Hero;
