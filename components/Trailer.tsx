import React from 'react';

export default function Trailer() {
  return (
    <div className="content-div flex flex-col items-center mt-10 ">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl tracking-tight text-white sm:text-5xl ">
          Official Trailer
        </h2>
      </div>
      <div className="xl:w-[959px] lg:w-[859px] md:w-[759px] sm:w-[659px]  ">
        <p className="xxs:text-base xs:text-lg sm:text-3xl lg:text-4xl xxs:mt-10 lg:mt-11">
          Watch the official Trailer for Deadpool X Wolverine
        </p>
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute w-full h-full "
            src="https://www.youtube.com/embed/73_1biulkYk?si=yAclGtdWjfhGwjlc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
