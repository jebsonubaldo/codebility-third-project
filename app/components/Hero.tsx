import React from "react";
import assets from "../assets/assets";
import Image from "next/image";
import hero from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
    className="flex md:items-end xs:items-center  bg-center bg-cover z-0 min-h-[170vh] bg-no-repeat opacity-4 overflow-hidden"
    style={{ backgroundImage: `url(${hero.src})`, backgroundSize: "fit" }}
  >
    <div className="absolute min-h-[170vh]  inset-0 bg-black opacity-50"></div>
    {/* Hero Section */}
    <section className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 z-40 items-start">
        <div className="col-span-1 p-[20px] md:p-[70px] xs:text-center ">
          <Image src={assets.heroTitle} className="w-full bg-cover bg-center" alt=''/>
          <h3 className="font-rogueFont text-white xs:text-[2rem] xs:mt-[2rem] md:text-[1rem]">
            Two Heroes. One Unstoppable Adventure.
          </h3>
          <p className="text-white xs:text-[2rem] md:text-[1rem]">
            Join Deadpool and Wolverine in a multiverse-shattering showdown. Don't miss the epic team-up of the year - grab your tickets now for the blockbuster event everyone is talking about!
          </p>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] mt-[20px] xs:flex-row xs:justify-center xs:mt-[3rem]">
            <button className="min-w-[244px] xs:min-w-[300px]  bg-[#890116] text-white font-bold py-[15px] md:py-[25px] px-[20px] rounded-[40px] xs:text-[1.4rem] md:text-[1rem]">
              Avail your Tickets now
            </button>
            <button className="min-w-[244px] xs:min-w-[300px] text-white font-bold py-[15px] xs:py-[30px] md:py-[25px] px-[20px] border-2 border-[#890116] rounded-[40px] hover:bg-[#890116] transition duration-300 ease-in-out xs:text-[1.4rem] md:text-[1rem]">
              Watch Trailer
            </button>
          </div>
        </div>
        <div className="col-span-1 flex justify-center md:justify-end z-40">
          <Image src={assets.hero} className="h-[300px] md:h-[901px] xs:h-full" alt="" />
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Hero;
