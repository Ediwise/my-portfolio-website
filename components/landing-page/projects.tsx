import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "DiscoverNow",
    url: "https://discovernow.xyz/",
    description: "A real-time web platform for discovering new products.",
    image: "/discovernow.png",
    tools: " Next.js",
    tools1: "TypeScript",
    tools2: "TailwindCSS",
  },
  {
    name: "AiutaConnect",
    url: "https://aiutaconnect.com/",
    description: "A web-based communication tool for businesses.",
    image: "/aiutaconnect.png",
    tools: "Next.js",
    tools1: "TypeScript",
    tools2: "TailwindCSS",
  },
  {
    name: "Springwell",
    url: "https://main.d1kkb33dpj9nj5.amplifyapp.com/",
    description: "A project showcasing dynamic content management.",
    image: "/springwell.png",
    tools: " Next.js",
    tools1: "TypeScript",
    tools2: "TailwindCSS",
  },
  {
    name: "Diamond Ocean Finance",
    url: "https://diamond-ocean-finance.vercel.app/",
    description:
      "A financial app designed for users to manage their investments.",
    image: "/diamond-ocean.png",
    tools: "Next.js",
    tools1: "JavaScript",
    tools2: "TailwindCSS",
  },
  {
    name: "Honey Heaven",
    url: "https://honey-heaven.onrender.com/",
    description: "An e-commerce platform for honey-based products.",
    image: "/honey-heaven.png",
    tools: " HTML",
    tools1: " JavaScript",
    tools2: " TailwindCSS",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-16 self-stretch items-start pt-16 pb-16 px-6 sm:px-16 lg:pt-[120px] lg:px-[200px] bg-[#F2F2F2]"
    >
      <p className="text-[#1D2939] font-inter text-2xl sm:text-3xl font-semibold leading-tight lg:leading-[28.8px]">
        Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 self-stretch">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col p-4 bg-white shadow-lg rounded-2xl lg:items-center items-start lg:gap-[12px]"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                width={256.5}
                height={169}
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
            )}
            <div className="flex flex-col items-start gap-4 w-full lg:gap-[10.911px]">
              <div className="grid grid-cols-3 gap-3 w-full lg:gap-[9.232px]">
                <div className="flex py-2 px-3 lg:py-[3.357px] lg:px-[10.072px] justify-center items-center lg:gap-[6.714px] rounded-full lg:rounded-[20.143px] border-[#98A2B3] border-[0.839px]">
                  <p className="text-[#475467] font-inter text-xs font-medium lg:leading-[18px]">
                    {project.tools}
                  </p>
                </div>
                <div className="flex py-2 px-3 lg:py-[3.357px] lg:px-[10.072px] justify-center items-center lg:gap-[6.714px] rounded-full lg:rounded-[20.143px] border-[#98A2B3] border-[0.839px]">
                  <p className="text-[#475467] font-inter text-xs font-medium lg:leading-[18px]">
                    {project.tools1}
                  </p>
                </div>
                <div className="flex py-2 px-3 lg:py-[3.357px] lg:px-[10.072px] justify-center items-center lg:gap-[6.714px] rounded-full lg:rounded-[20.143px] border-[#98A2B3] border-[0.839px]">
                  <p className="text-[#475467] font-inter text-xs font-medium lg:leading-[18px]">
                    {project.tools2}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 w-full g:gap-[6.714px]">
                <p className="text-[#101828] font-raleway text-lg font-medium leading-[24px] self-stretch">
                  {project.name}
                </p>
                <p className="text-[#475467] font-inter text-sm sm:text-base font-normal h-[63px]">
                  {project.description}
                </p>
              </div>
            </div>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex py-3 px-8 lg:py-[13.429px] lg:px-[53.715px] justify-center items-center gap-[6.714px] rounded-[20.143px] bg-[#7F56D9] w-full"
            >
              <p className="text-[#F3F4F6] text-center font-raleway text-[13.429px] font-normal leading-[20.143px]">
                Visit Project
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M6.60718 4.76843L10.6072 8.76843L6.60718 12.7684"
                  stroke="white"
                  strokeWidth="1.66667"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
