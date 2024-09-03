import Image from 'next/image';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Partnership from './components/Partnership';
import Trailer from './components/Trailer';
import Banner from './components/Banner';
import EpicAdventure from './components/EpicAdventure';
import CastList from './components/CastList';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex items-center justify-center">
        <div className="w-[1440px]">
          <Image
            src="/img/content-1-img/deadpool.png"
            width={397}
            height={171}
            alt="Marvel Jesus"
          />

          <Partnership />
          <Trailer />
          <Banner />
          <EpicAdventure />
        </div>
      </main>
      <CastList />
      <Gallery />
      <Footer />
    </>
  );
}
