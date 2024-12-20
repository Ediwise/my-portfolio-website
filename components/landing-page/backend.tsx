import Image from "next/image";

const backendSkills = [
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Nest.js", icon: "/nestjs.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "PostgreSQL", icon: "/postgresql.svg" },
];

const Backend = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-start pt-16 px-6 sm:px-16 lg:pt-[120px] pb-16 lg:px-[200px] gap-16 self-stretch bg-white"
    >
      <p className="text-[#1D2939] font-inter text-2xl sm:text-3xl font-semibold leading-tight lg:leading-[28.8px]">
        Backend Development
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-16 self-stretch">
        {backendSkills.map((skill, idx) => (
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

export default Backend;
