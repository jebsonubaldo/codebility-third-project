import Image from 'next/image';
import Icon from './components/content-1-icon';
import Iframe from './components/youtube-iframe';
import ClipDandW from './components/imageClip';
import TEA from './components/TEA';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <main className="flex items-center justify-center">
        <div className="w-[1440px]">
          <Image
            src="/img/content-1-img/deadpool.png"
            width={397}
            height={171}
            alt="Marvel Jesus"
          />
          <div className="shadow-top-bottom p-20 gap-12">
            <h2 className="flex items-center justify-center text-2xl">
              In partnership with
            </h2>
            <Icon />
          </div>
          <div className="flex flex-col items-center mt-10">
            <h2 className="font-hero text-5xl">OFFICIAL TRAILER</h2>
            <Iframe />
          </div>
          <ClipDandW />
          <TEA />
        </div>
      </main>
      <Footer />
    </>
  );
}
