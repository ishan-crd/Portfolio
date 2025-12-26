const GennextPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-20 bg-black relative pb-20">
      {/* Laptop Section */}
      <div className="relative w-[600px] h-[400px] flex items-center justify-center">
        {/* Background Circles */}
        <div className="absolute w-[500px] h-[390px] rounded-full bg-[#891415] blur-2xl z-0" />
        {/* Image */}
        <img
          src="/gennext1.png"
          alt="laptop"
          className="w-[554.6px] h-[370px] z-10 object-contain"
        />
      </div>

      {/* Phone Section */}
      <div className="relative w-[300px] h-[500px] flex items-center justify-center">
        {/* Background Circles */}
        <div className="absolute w-[220px] h-[420px] rounded-full bg-[#891415] blur-2xl z-0" />
        {/* Image */}
        <img
          src="/gennext2.png"
          alt="phone"
          className="w-[220px] h-[413px] z-10 object-contain"
        />
      </div>
    </div>
  );
};

export default GennextPage;

