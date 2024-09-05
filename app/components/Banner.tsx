import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex flex-col w-full h-[445px] relative mt-10 pt-96 overflow-hidden">
      <div className="absolute xxs:-bottom-16 xs:-bottom-36 sm:-bottom-52 sm:-right-80 md:-right-48 lg:-bottom-32 lg:right-0 2xl:right-[550px]">
        <Image
          src={'/img/content-2-img/Frame5845.png'}
          width={789}
          height={500}
          alt="Marvel Jesus"
          className="object-contain xxs:object-none w-full h-full"
        />
      </div>
      <div
        className="absolute xxs:-top-16 xs:-top-36 sm:-top-72 sm:-left-80 md:-left-48 lg:-bottom-36 lg:-left-10
      2xl:left-[550px]"
      >
        <Image
          src={'/img/content-2-img/Frame5844.png'}
          width={789}
          height={500}
          alt="wolvie"
          className="object-contain xxs:object-none w-full h-full"
        />
      </div>

      <div className="absolute inset-0  ">
        <Image
          src={'/img/content-2-img/movielogo.png'}
          width={324}
          height={231}
          alt="Marvel Logo"
          className="object-none w-full h-full"
        />
      </div>
    </div>
  );
}
