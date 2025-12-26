const Edwancepage: React.FC = () => {
  return (
    <div className="relative w-full mt-30 h-60 mb-70 flex justify-center items-center">
      {/* Background blur */}
      <div className="absolute inset-0 bg-orange-500/45 blur-3xl h-60 z-0" />

      {/* Image */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <img
          src="/images/edwance/edwance-landingnobg.png"
          alt="edwance-landing"
          className="w-full max-w-4xl h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Edwancepage;

