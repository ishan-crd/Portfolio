const Insydpage: React.FC = () => {
  return (
    <div className="relative w-full mt-30 h-60 mb-70">
      {/* Pink Bar */}
      <div className="absolute inset-0 bg-pink-800 blur-3xl h-60 z-0" />

      {/* Images placed ABOVE the pink bar */}
      <div className="absolute inset-0 flex justify-center items-center gap-30 z-10">
        <img src="/images/insyd/insyd1.png" alt="insyd1" className="w-[220px] h-[413px] object-contain" />
        <img src="/images/insyd/insyd2.png" alt="insyd2" className="w-[220px] h-[413px] object-contain" />
        <img src="/images/insyd/insyd3.png" alt="insyd3" className="w-[220px] h-[413px] object-contain" />
      </div>
    </div>
  );
};

export default Insydpage;

