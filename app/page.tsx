"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Partnership from "../components/Partnership";
import Trailer from "../components/Trailer";
import Banner from "../components/Banner";
import EpicAdventure from "../components/EpicAdventure";
import CastList from "../components/CastList";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
 
  
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-black">
        <Partnership />
        <Trailer />
        <Banner />
        <EpicAdventure />
      </div>
      <CastList />
      <Gallery />
      <Footer />
    </main>
  );
}
