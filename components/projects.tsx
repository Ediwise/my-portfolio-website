import Image from 'next/image'; 

const projects = [
  {
    name: "DiscoverNow",
    url: "https://discovernow.xyz/",
    description: "A real-time web platform for discovering new products.",
    image: "/discovernow.png" 
  },
  {
    name: "AiutaConnect",
    url: "https://aiutaconnect.com/",
    description: "A web-based communication tool for businesses.",
    image: "/aiutaconnect.png"
  },
  {
    name: "Springwell",
    url: "https://main.d1kkb33dpj9nj5.amplifyapp.com/",
    description: "A project showcasing dynamic content management.",
    image: "/springwell.png"
  },
  {
    name: "Diamond Ocean Finance",
    url: "https://diamond-ocean-finance.vercel.app/",
    description: "A financial app designed for users to manage their investments.",
    image: "/diamond-ocean.png"
  },
  {
    name: "Honey Heaven",
    url: "https://honey-heaven.onrender.com/",
    description: "An e-commerce platform for honey-based products.",
    image: "/honey-heaven.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 pt-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 bg-white shadow-lg rounded-lg">
            {project.image && (
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                width={500} 
                height={300}
                className="mb-4 w-full h-48 object-cover rounded"
              />
            )}
            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
