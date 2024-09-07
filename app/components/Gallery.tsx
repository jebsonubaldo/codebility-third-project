const images = [
    {
        title: 'IMG_4985.HEIC',
        source: '/images/gallery-1.png'
    },
    {
        title: 'IMG_4985.HEIC',
        source: '/images/gallery-2.png'
    },
    {
        title: 'IMG_4985.HEIC',
        source: '/images/gallery-3.png'
    },
    {
        title: 'IMG_4985.HEIC',
        source: '/images/gallery-4.png'
    },
]

export default function Gallery() {
    return (
        <div className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl tracking-tight text-white sm:text-5xl py-12" >Gallery</h2>
                </div>

                <div className="mx-auto max-w-3xl lg:mx-0">
                    <h3 className="mt-2 text-xl tracking-tight text-white">Wallpaper Gallery</h3>
                    <p className="mt-1 mb-6 text-md leading-8 text-[#ECE4E4] text-opacity-75">
                        Visit our gallery page to explore and download free wallpapers for your phone and PC.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {images.map((image) => (
                        <li key={image.title}>
                            <img className=" h-full w-full rounded-2xl object-cover" src={image.source} alt="" />
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
        </div>
    )
}
