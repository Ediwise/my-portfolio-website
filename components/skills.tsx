import Image from 'next/image';

const frontendSkills = [
  { name: 'Next.js', icon: '/nextjs.svg' },
  { name: 'React', icon: '/reactjs.svg' },
  { name: 'TypeScript', icon: '/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/tailwindcss.svg' },
  { name: 'CSS 3', icon: '/css3.svg' },
  { name: 'HTML 5', icon: '/html5.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
];

const backendSkills = [
  { name: 'Node.js', icon: '/nodejs.svg' },
  { name: 'Nest.js', icon: '/nestjs.svg' },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'PostgreSQL', icon: '/postgresql.svg' },
  { name: 'Git', icon: '/git.svg' },
];

const Skills = () => {
  return (
    <section id="skills" className="p-8 pt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

      {/* Frontend Skills Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {frontendSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={skill.icon}
                alt={`Icon for ${skill.name}`}
                width={48}
                height={48}
                className="mb-2"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Skills Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {backendSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={skill.icon}
                alt={`Icon for ${skill.name}`}
                width={48}
                height={48}
                className="mb-2"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
