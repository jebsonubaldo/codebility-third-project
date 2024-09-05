import React from 'react';

export default function Trailer() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl tracking-tight text-white sm:text-5xl" >Official Trailer</h2>
      </div>
      <div className="w-[959]">
        <p className="text-3xl mt-24">
          Watch the official Trailer for Deadpool X Wolverine
        </p>
        <iframe
          width="959"
          height="560"
          src="https://www.youtube.com/embed/73_1biulkYk?si=yAclGtdWjfhGwjlc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
