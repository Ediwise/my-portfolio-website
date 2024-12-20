"use client";

import Navbar from "./navbar";
import Hero from "@/components/landing-page/hero";
import Frontend from "@/components/landing-page/frontend";
import Backend from "@/components/landing-page/backend";
import Projects from "@/components/landing-page/projects";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Frontend />
      <Backend />
      <Projects />
      <Footer />
    </div>
  );
}
