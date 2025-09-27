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
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
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
