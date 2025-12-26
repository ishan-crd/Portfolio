type Company = {
  logo: string;
  job: string;
  text: string[];
  client: string;
  techStack: string[];
};

type Props = {
  company: Company;
};

const JobPage: React.FC<Props> = ({ company }) => {
  const { logo, job, text, client, techStack } = company;
  const isEdwance = client === "Edwance.ai";
  const logoSize = isEdwance ? "w-[220px] h-[80px]" : "w-[110px] h-[40px]";

  return (
    <div className="w-full px-16 lg:px-32 xl:px-48 2xl:px-64 py-16 max-w-screen-2xl mx-auto">
      <div className="flex gap-20 items-start justify-between">
        {/* Left: Logo & Description */}
        <div className="flex-1">
          <img src={logo} alt="logo" className={`${logoSize} object-contain ${isEdwance ? 'mb-0' : ''}`} />
          <p className={`text-white text-3xl xl:text-3xl ${isEdwance ? 'mt-2' : 'mt-6'} mb-6 font-bold font-mono`}>
            {job}
          </p>
          <div
            style={{ fontFamily: "Montserrat" }}
            className="text-zinc-300 text-base xl:text-lg max-w-3xl leading-relaxed"
          >
            <p className="mb-5">{text[0]}</p>
            <p>{text[1]}</p>
          </div>
        </div>

        {/* Right: Client & Tech Stack */}
        <div
          className="min-w-[200px] max-w-xs text-white text-sm xl:text-base"
          style={{ fontFamily: "Montserrat" }}
        >
          <p className="font-black mb-1">CLIENT</p>
          <p className="mb-6 font-extralight">{client}</p>

          <p className="font-black mb-1">TECH STACK</p>
          <div className="space-y-1">
            {techStack.map((tech, index) => (
              <p key={index} className="font-extralight">
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;

