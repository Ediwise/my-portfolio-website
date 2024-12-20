import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center pt-16 lg:pt-[120px] pb-16 lg:px-[200px] px-6 sm:px-16 gap-4 self-stretch bg-[#F2F2F2]"
    >
      <p className="text-[#1D2939] font-inter text-2xl sm:text-3xl font-semibold leading-tight ">
        Contact Me
      </p>
      <p className="text-[#475467] text-center font-inter text-sm sm:text-base leading-relaxed font-normal lg:leading-[24px]">
        {" "}
        Feel free to reach out to me through any of the following platforms.
        I&apos;d love to connect with you!
      </p>
      <div className="flex items-start md:gap-4 gap-6 mt-4">
        <Link
          href="https://github.com/Ediwise"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#101828] hover:text-blue-500 transition-colors duration-300"
        >
          <FaGithub className="text-2xl sm:text-3xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/editech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#101828] hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl sm:text-3xl" />
        </Link>
        <Link
          href="mailto:caforji@gmail.com"
          className="text-[#101828] hover:text-blue-500 transition-colors duration-300"
        >
          <FaEnvelope className="text-2xl sm:text-3xl" />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
