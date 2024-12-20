import Image from "next/image";

const frontendSkills = [
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "React", icon: "/reactjs.svg" },
  { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "HTML 5", icon: "/html5.svg" },
  { name: "CSS 3", icon: "/css3.svg" },
];

const Frontend = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-start pt-16 px-6 sm:px-16 lg:pt-[120px] pb-16 lg:px-[200px] gap-16 self-stretch bg-white"
    >
      <p className="text-[#1D2939] font-inter text-2xl sm:text-3xl font-semibold leading-tight lg:leading-[28.8px]">
        Frontend Development
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-16 self-stretch">
        {frontendSkills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-start gap-4">
            <Image
              src={skill.icon}
              alt={`Icon for ${skill.name}`}
              width={64}
              height={64}
              className="mb-2"
            />
            <p className="text-[#000] font-inter text-sm sm:text-base font-semibold lg:leading-[19.2px]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frontend;
