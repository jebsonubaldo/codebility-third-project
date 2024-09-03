import React from 'react';

const files = [
    {
        title: 'IMG_4985.HEIC',
        source: '/assets/images/gallery-1.png'
    },
    {
        title: 'IMG_4985.HEIC',
        source: '/assets/images/gallery-2.png'
    },
    {
        title: 'IMG_4985.HEIC',
        source: '/assets/images/gallery-3.png'
    },
    {
        title: 'IMG_4985.HEIC',
        source: '/assets/images/gallery-4.png'
    },
];

export default function Gallery() {
    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-4xl tracking-tight text-white sm:text-5xl py-12" >Gallery</h2>
            </div>

            <div>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h3 className="mt-2 text-xl tracking-tight text-white sm:text-2xl">Wallpaper Gallery</h3>
                    <p className="mt-1 mb-6 text-sm md:text-md leading-8 text-[#ECE4E4] text-opacity-75">
                        Visit our gallery page to explore and download free wallpapers for your phone and PC.
                    </p>


                </div>
            </div>

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {files.map((file) => (
                    <li key={file.source} className="relative">
                        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                            <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">View details for {file.title}</span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mx-auto max-w-2xl text-center">
                <a
                    href="#"
                    className="mt-12 inline-block w-48 rounded-full bg-[#890116] px-8 py-3 text-base font-medium text-white hover:bg-[#a30a1e]"
                >
                    Visit Gallery
                </a>

            </div>
        </div>



    );
}