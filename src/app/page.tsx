"use client"
import { useSession, useClerk } from "@clerk/nextjs";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import EditorSection from "./components/EditorSection";
import { BestSeller } from "./components/BestSeller";
import VitaClassic from "./components/VitaClassic";
import Universe from "./components/Universe";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";
import TopFourProducts from "./components/TopProduct";
import { ClerkProvider } from '@clerk/nextjs';

export default function Home() {

  return (
    <>
      <ClerkProvider>
        <NavBar />
      </ClerkProvider>
      <HeroSection />
      <EditorSection />
      <TopFourProducts />
      <BestSeller />
      <VitaClassic />
      <Universe />
      <FeaturedPosts />
      <Footer />
    </>
  );
}
