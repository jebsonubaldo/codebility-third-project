import Image from 'next/image';
import React from 'react';

export default function TEA() {
  return (
    <div className="relative flex flex-col mt-20">
      <div className="flex justify-center">
        <h2 className="font-hero text-5xl">THE EPIC ADVENTURE</h2>
      </div>
      <div className="flex flex-row">
        <div className="w-[676px] p-6 mt-44 ml-24 leading-9 font-normal">
          <p className="text-2xl font-normal">
            In Deadpool X Wolverine, the merc with a mouth teams up with the
            clawed mutant in an adventure like no other. With action, humor, and
            heart, this film brings together two of Marvel's most iconic
            anti-heroes in a thrilling and unpredictable journey that will test
            their limits and redefine their legacies.
          </p>
          <button className="bg-customRed rounded-[40px] p-4 text-lg font-bold mt-11">
            Explore the multiverse
          </button>
        </div>
        <Image
          src={'/img/content-3-img/comic.png'}
          width={623}
          height={900}
          alt="comic deadpool & wolverine"
        />
      </div>
      <Image
        src={'/img/content-3-img/Wolverine.png'}
        width={563}
        height={53}
        alt="wolverine"
        className="absolute bottom-1"
      />
    </div>
  );
}
