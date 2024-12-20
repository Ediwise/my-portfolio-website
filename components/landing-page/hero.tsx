import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center sm:items-start pt-16 md:pt-24 lg:pt-[64px] pb-16 px-6 sm:px-16 lg:px-[200px] gap-16 self-stretch bg-white"
    >
      <div className="flex flex-col items-center sm:items-start gap-[56px]">
        <Image
          src="/edi.jpg"
          alt="Edward Aforji"
          width={500}
          height={500}
          className="w-2/5 sm:w-1/3 md:w-1/4 lg:w-2/5 xl:w-2/5 object-contain"
        />

        <div
          id="about"
          className="flex flex-col items-center sm:items-start w-full md:w-[379px] gap-[24px]"
        >
          <div className="flex flex-col items-center sm:items-start gap-2 self-stretch text-center sm:text-start">
            <p className="text-[#1D2939] font-inter text-3xl sm:text-4xl lg:text-5xl font-semibold lg:leading-[57.6px] leading-tight self-stretch">
              Hi, I am Edward Chinwi Aforji
            </p>

            <p className="text-[#475467] font-inter text-sm sm:text-base font-normal leading-relaxed lg:leading-[19.2px] self-stretch">
              Full-stack developer
            </p>
          </div>

          <button className="flex py-3 px-6  lg:py-[15px] lg:px-[27px] justify-center items-center rounded-lg lg:rounded-[16px] bg-gray-900">
            <Link
              className=" text-[#FFF] font-inter text-base font-medium leading-[19.2px]"
              href="#projects"
            >
              Check Out Projects
            </Link>
          </button>
        </div>
      </div>

      <p className="text-[#475467] font-inter text-sm sm:text-base font-normal leading-relaxed lg:leading-[24px] max-w-3xl text-center sm:max-w-full sm:text-start">
        I&apos;m a passionate full-stack developer specializing in building
        scalable and high-performance web applications. With expertise in both
        front-end and back-end technologies, I leverage tools such as React,
        Next.js, TypeScript, and Node.js to deliver seamless, responsive user
        experiences.
        <br />
        My focus is on creating clean, maintainable code while pushing the
        boundaries of web development. I enjoy solving complex problems and
        continuously improving my skill set to keep up with the latest
        technologies and best practices. Whether it&apos;s a personal project or
        collaboration with a team, I aim to deliver impactful results.
        <br />
        Driven by a love for learning and innovation, I seek out opportunities
        to contribute to exciting projects that challenge me and make a
        difference. Let&apos;s create something great together.
      </p>
    </section>
  );
};

export default Hero;
