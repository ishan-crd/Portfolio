"use client";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full relative overflow-hidden ring-2 ring-zinc-800 flex-shrink-0">
          <Image
            src="/profpicsuit.png"
            alt="Ishan Gupta"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Profile Info */}
        <div className="text-center md:text-left mt-2">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Ishan Gupta
            </h1>
          </div>

          <h2 className="text-xl text-zinc-400 mb-6 font-mono">
            Full Stack Developer & UI/UX Designer
          </h2>

          {/* Links Section */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 font-mono">
              <a
                href="https://x.com/ishancrd"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200"
              >
                <div className="w-5 h-5 rounded bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-colors">
                  <svg
                    className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                  X
                </span>
              </a>

              <a
                href="https://github.com/ishan-crd"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200"
              >
                <div className="w-5 h-5 rounded bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-colors">
                  <svg
                    className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/ishan-gupta-5b0a20293/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200"
              >
                <div className="w-5 h-5 rounded bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-colors">
                  <svg
                    className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                  LinkedIn
                </span>
              </a>

              <a
                href="mailto:ishangupta3121@gmail.com"
                className="group flex items-center gap-2 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200"
              >
                <div className="w-5 h-5 rounded bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-colors">
                  <svg
                    className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>
        <a
          href="/IshanGupta-Resume.pdf"
          download
          className="hidden sm:flex ml-auto items-center gap-2 mt-3 text-sm text-zinc-400 hover:text-white transition-colors border border-zinc-700 px-3 py-1.5 rounded-md hover:bg-zinc-800 font-mono"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
