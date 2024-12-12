"use client";

import Image from "next/image";
import About from "@/components/about";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <section
          id="home"
          className="min-h-screen p-8 bg-gray-900 text-white text-center flex flex-col md:flex-row items-center justify-center md:justify-between"
        >
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              <span className="block">Hi, I am</span>
              <span className="block text-4xl sm:text-5xl mt-2"> Edward Chinwi Aforji</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6">
              Full-stack Developer
            </p>
            <p>
              <a
                href="#projects"
                className="inline-block py-2 px-6 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
              >
                Check out my projects
              </a>
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/edi.jpg"
              alt="Edward Aforji"
              width={288}
              height={288}
              className="mx-auto md:mx-0 object-cover shadow-xl rounded-full border-4 border-white"
            />
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
