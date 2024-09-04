import Image from 'next/image';

export default function Icon() {
  const images = [
    {
      src: '/img/content-1-img/marvel.png',
      width: 196,
      height: 112,
    },
    {
      src: '/img/content-1-img/ps5.png',
      width: 172,
      height: 115,
    },
    {
      src: '/img/content-1-img/netflix.png',
      width: 176,
      height: 112,
    },
    {
      src: '/img/content-1-img/xbox.png',
      width: 125,
      height: 104,
    },
    {
      src: '/img/content-1-img/DisneyPlus.png',
      width: 190,
      height: 112,
    },
  ];

  return (
    <div className="flex space-x-4 items-center justify-center mt-10">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            alt={`Logo ${index + 1}`}
            width={image.width}
            height={image.height}
            className="object-contain m-4"
          />
        </div>
      ))}
    </div>
  );
}
