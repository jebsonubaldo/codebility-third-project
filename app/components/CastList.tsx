import React from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

const people = [
    {
        name: 'Ryan Reynolds',
        character: 'Wade Wilson',
        source: '/images/wade.jpg'
    },
    {
        name: 'Hugh Jackman',
        character: 'Logan',
        source: '/images/logan.jpg'
    },
    {
        name: 'Emma Corrin',
        character: 'Cassandra Nova',
        source: '/images/cassandra.jpg'
    },
    {
        name: 'Dafne Keen',
        character: 'Laura',
        source: '/images/laura.jpg'
    },
];

export default function CastList() {
    return (
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h3 className="mt-2 text-xl tracking-tight text-white sm:text-2xl">Full Cast & Crew of</h3>
                <h2 className="text-xl tracking-tight text-white sm:text-6xl py-2">
                    <span className="text-[#890116]">Deadpool</span> x <span className="text-[#F99F2B]">Wolverine</span>
                </h2>
            </div>

            <div className="mx-auto max-w-6xl text-center mb-20">
                <ul role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
                    {people.map((person) => (
                        <li key={person.name} className="relative flex flex-col gap-6 xl:flex-row">
                            <div className="relative w-52">
                                <img
                                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                                    src={person.source}
                                    alt={person.character}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 rounded-2xl">
                                    <span className="text-white text-lg font-bold">{person.name}</span>
                                    <span className="text-gray-300 text-sm">{person.character}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-auto max-w-lg text-center">
                <nav className="flex items-center justify-between px-4 sm:px-0">
                    <div className="-mt-px flex w-0 flex-1">
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <img src="/images/spiderman-icon.png" alt="Spiderman Icon" />
                        </a>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-[#890116] px-4 pt-4 text-sm font-medium text-[#890116]"
                            aria-current="page"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            3
                        </a>
                        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                            ...
                        </span>
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            10
                        </a>
                    </div>
                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <a
                            href="#"
                            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                            <img src="/images/spiderman-icon.png" alt="Spiderman Icon" />
                            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </a>
                    </div>
                </nav>
            </div>
            <img
          src="/images/deadpool-decor.png"
          alt="Decorative Image"
          className="absolute bottom-0 right-0 w-560 h-18"
        />
        </div>

    );
}