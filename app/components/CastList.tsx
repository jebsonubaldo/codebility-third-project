import React from 'react';

const people = [
    {
        name: 'Ryan Reynolds',
        character: 'Wade Wilson',
        source: '/assets/images/wade.jpg'
    },
    {
        name: 'Hugh Jackman',
        character: 'Logan',
        source: '/assets/images/logan.jpg'
    },
    {
        name: 'Emma Corrin',
        character: 'Cassandra Nova',
        source: '/assets/images/cassandra.jpg'
    },
    {
        name: 'Dafne Keen',
        character: 'Laura',
        source: '/assets/images/laura.jpg'
    },
];

function CastList() {
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
        </div>

    );
}

export default CastList;
