"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

const people = [
    { name: 'Ryan Reynolds', character: 'Wade Wilson', source: '/images/wade.jpg' },
    { name: 'Hugh Jackman', character: 'Logan', source: '/images/logan.jpg' },
    { name: 'Emma Corrin', character: 'Cassandra Nova', source: '/images/cassandra.jpg' },
    { name: 'Dafne Keen', character: 'Laura', source: '/images/laura.jpg' },
    { name: 'Jon Favreau', character: 'Happy Hogan', source: '/images/happy.jpg' },
    { name: 'Morena Baccarin', character: 'Vanessa', source: '/images/vanessa.png' },
    { name: 'Wesley Snipes', character: 'Blade', source: '/images/blade.jpg' },
];

const VISIBLE_ITEMS = 5;

export default function CastList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = people.length;

    const handleNext = () => {
        if (currentIndex < totalPages - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handlePageChange = (index: number) => {
        setCurrentIndex(index);
    };

    const currentItems = people.slice(currentIndex, currentIndex + VISIBLE_ITEMS);

    return (
        <div className="bg-black relative px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h3 className="mt-2 text-xl tracking-tight text-white">Full Cast & Crew of</h3>
                <h2 className="text-4xl tracking-tight text-white sm:text-5xl mt-2">
                    <span className="text-[#890116]">Deadpool</span> x <span className="text-[#F99F2B]">Wolverine</span>
                </h2>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 my-20">
                {/* Adjust the ul to handle mobile scrolling */}
                <ul role="list" className="flex space-x-8 overflow-x-auto sm:overflow-visible pb-6">
                    {currentItems.map((person, index) => (
                        <li key={index} className="flex-none w-52 relative">
                            <motion.div 
                                className="relative"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    className="h-80 w-full rounded-2xl object-cover"
                                    src={person.source}
                                    alt={person.character}
                                />
                                <div className="text-center absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 rounded-b-2xl bg-gradient-to-t from-black/100 to-transparent">
                                    <span className="text-white text-lg font-bold">{person.name}</span>
                                    <span className="text-gray-300 text-md">{person.character}</span>
                                </div>
                            </motion.div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-auto max-w-md text-center">
                <nav className="flex items-center justify-between px-4 sm:px-0">
                    <div className="-mt-px flex w-0 flex-1">
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed"
                        >
                            <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <img src="/images/spiderman-icon.png" alt="Spiderman Icon" />
                        </button>
                    </div>
                    <div className="-mt-px flex justify-center space-x-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i)}
                                className={`inline-flex items-center border-t-2 px-2 sm:px-4 pt-4 text-sm font-medium ${currentIndex === i ? 'border-[#890116] text-[#890116]' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= totalPages - 1}
                            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed"
                        >
                            <img src="/images/spiderman-icon.png" alt="Spiderman Icon" />
                            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
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
