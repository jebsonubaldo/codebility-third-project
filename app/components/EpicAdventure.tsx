import Image from 'next/image';
import React from 'react';

export default function EpicAdventure() {
  return (
    <div className="relative flex flex-col mt-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl tracking-tight text-white sm:text-5xl" >Epic Adventure</h2>
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

          <a
            href="#"
            className="text-center mt-12 inline-block w-54 rounded-full bg-[#890116] px-8 py-3 text-base font-medium text-white hover:bg-[#a30a1e]"
          >
            Explore the multiverse
          </a>

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