const Denpage: React.FC = () => {
  return (
    <div className="relative w-full mt-30 h-60 mb-70">
      {/* Retro dark bar with purple/blue blur */}
      <div className="absolute inset-0 bg-indigo-950/60 blur-3xl h-60 z-0" />

      {/* Images placed ABOVE the blur bar */}
      <div className="absolute inset-0 flex justify-center items-center gap-30 z-10">
        <img
          src="/den/laptop.png"
          alt="den-laptop"
          className="w-[693.375px] h-[430px] object-contain"
        />
        <img src="/den/mobile.png" alt="den-mobile" className="w-[220px] h-[413px] object-contain" />
        <img src="/den/mobile2.png" alt="den-mobile2" className="w-[220px] h-[413px] object-contain md:hidden" />
      </div>
    </div>
  );
};

export default Denpage;

