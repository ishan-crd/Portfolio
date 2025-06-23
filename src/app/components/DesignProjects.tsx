import Image from "next/image";
const designProjects = [
  {
    title: "Rest & Cafe",
    desc: "Complete design system and UI kit for the resturant supporting menu app, featuring modern components, color schemes, and user flow documentation.",
    image: "/rest&cafe.png",
    tools: ["Figma", "Photoshop"],
    figma:
      "https://www.figma.com/design/pd3DvLbekmIsdz0ic8C9rM/Restaurant-Web-App?node-id=0-1&t=LNkORtLE8MN3lvIa-1",
  },
  {
    title: "Enactus - Miranda",
    desc: "Comprehensive website design for the Miranda College Enactus society, featuring a fully functional ecommerce platform which includes responsive layouts.",
    image: "/enactus.png",
    tools: ["Figma", "Photoshop"],
    figma:
      "https://www.figma.com/design/Bf7tXreNFlH2jfTPIapcGe/Enactus?node-id=0-1&t=yqKDRcXiRPK5jkue-1",
  },
  {
    title: "Insyd",
    desc: "Revolutionary clubbing access app making nightlife more inclusive and accessible for everyone, with real-time venue information.",
    image: "/insyd.png",
    tools: ["Figma", "Photoshop", "Illustrator"],
    figma:
      "https://www.figma.com/design/tAXWp4ZSh1s9nchCPdSjds/insyd?node-id=13-223&t=fe7MaALs2exsvtJZ-1",
  },
  {
    title: "Gennext IT",
    desc: "Complete brand identity and visual design for sustainability tracking app, including logo design, color palette, and marketing materials.",
    image: "/gennextit.png",
    tools: ["Figma", "Adobe photoshop"],
    figma:
      "https://www.figma.com/proto/QEEHxRhUpf7mjBaDz6KUcz/Untitled?node-id=1-3&p=f&t=ttJGV21BoRzyEtqs-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1",
  },
];

export default function DesignProjects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-5 pb-25">
      <h2 className="text-2xl font-bold text-white mb-10 text-center font-mono">
        Design Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {designProjects.map((project, index) => (
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
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    title="Figma"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                        fill="#0ACF83"
                      />
                      <path
                        d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                        fill="#A259FF"
                      />
                      <path
                        d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                        fill="#F24E1E"
                      />
                      <path
                        d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
                        fill="#FF7262"
                      />
                      <path
                        d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                        fill="#1ABCFE"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Design Tools */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md"
                  >
                    {tool}
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
