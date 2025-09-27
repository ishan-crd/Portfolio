import Image from "next/image";
const projects = [
  {
    title: "Cradle Clothing",
    desc: "Completely responsive E-Commerce platform for modern gym aparrel selling along with complete design and checkout.",
    image: "/cradle.png",
    tech: ["React.js", "Javascript", "Material-UI"],
  },
  {
    title: "Insyd",
    desc: "Revolutionary clubbing access app making nightlife more inclusive and accessible for everyone, with real-time venue information.",
    image: "/insyd-black.png",
    tech: ["React Native", "Typescript", "Nativewind"],
  },
  {
    title: "Tangle",
    desc: "Led the end-to-end design and development of Tangle's MVP, transforming the idea from concept to a functional, user-ready product.",
    image: "/tangle-des.png",
    tech: ["React Native", "Typescript", "Nativewind"],
  },
  {
    title: "Edwance.ai",
    desc: "End-to-end design and development of Edwance.ai's landing page and dashboard, while driving the product's growth from concept to a fully scaled service.",
    image: "/edwance-landing.png",
    tech: ["Next.js", "Typescript", "Tailwind CSS"],
  },
  {
    title: "Gennext IT",
    desc: "Designed and developed the official company website with modern, responsive frontend focusing on clear user flows and intuitive navigation to enhance user engagement.",
    image: "/gennextit.png",
    tech: ["React.js", "JavaScript", "Framer"],
  },
  {
    title: "Unmesa.ai",
    desc: "Designed and developed a comprehensive AI-powered platform that revolutionizes how businesses interact with artificial intelligence, featuring intuitive UI and powerful functionality.",
    image: "/unmesa/Unmesa-laptop.png",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mb-10">
      <h2
        style={{ fontFamily: "Montserrat" }}
        className="text-2xl font-bold text-white mb-10 text-center"
      >
        Tech Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            {/* Project Image */}
            <div className="aspect-video bg-zinc-800 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
