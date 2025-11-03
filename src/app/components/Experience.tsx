const experiences = [
  {
    company: "Den.show",
    role: "Full Stack Developer - Intern",
    type: "Full Time",
    duration: "Completed",
    period: "",
    description: "Helped builing this Web3 Streaming Platform from scratch. Worked with various tech like Privy, Convex, and more. Also worked with streaming players like MuxPlayer, LiveKit, and more.",
  },
  {
    company: "Edwance.ai",
    role: "Front End Developer - Intern",
    type: "Full Time",
    duration: "Completed",
    period: "July 2025 - Ongoing",
    description: "Spearheading the end-to-end design and development of Edwance.ai’s landing page and dashboard, while driving the product’s growth from concept to a fully scaled service.",
  },
  {
    company: "Tangle",
    role: "Full Stack App Developer",
    type: "Freelance",
    duration: "Ongoing",
    period: "July 2025 - Ongoing",
    description: "Leading the development of Tangle’s MVP, from initial concept to a fully functional cross-platform app for a funded startup, covering both frontend and backend architecture.",
  },
  {
    company: "Gennext IT",
    role: "Full Stack Developer - Intern",
    type: "Full Time",
    duration: "Completed",
    period: "April 2025 - July 2025",
    description:
      "Architecting and developing scalable web applications for Gennext IT, focused on building robust, high-performance digital solutions for multiple clients.",
  },
  {
    company: "Insyd",
    role: "App Developer - Founder",
    type: "Full Time",
    duration: "Completed",
    period: "March 2025 - June 2025",
    description: "Designed and developed the Insyd app from the ground up, taking it from concept to a fully functional product, covering both frontend and backend.",
  },
  
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-mono mb-10">
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-zinc-800 pl-6 relative">
            {/* Timeline dot */}
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {exp.company}
                </h3>
                <span className="text-sm text-zinc-500">{exp.period}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                <span className="text-zinc-300">{exp.role}</span>
                <span className="hidden sm:block text-zinc-600">•</span>
                <span className="text-zinc-500">
                  {exp.type} · {exp.duration}
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
