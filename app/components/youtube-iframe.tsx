import React from 'react';

export default function Iframe() {
  return (
    <div className="w-[959] ">
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
  );
}
