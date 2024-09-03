import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex flex-col h-[445px] relative mt-10 pt-96 overflow-hidden">
      <div className="absolute -bottom-36 left-0">
        <Image
          src={'/img/content-2-img/Frame5844.png'}
          width={789}
          height={500}
          alt="wolvie"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute -bottom-32 right-0 ">
        <Image
          src={'/img/content-2-img/Frame5845.png'}
          width={789}
          height={500}
          alt="Marvel Jesus"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute inset-0">
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
