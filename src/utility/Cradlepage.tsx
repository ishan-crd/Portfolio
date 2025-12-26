const Cradlepage: React.FC = () => {
  return (
    <div className="relative w-full mt-46 h-60 mb-70">
      {/* Bar */}
      <div className="absolute inset-0 h-60 z-0">
        <img
          src="/bg-image.jpg"
          alt="cradle-bg"
          className="w-full h-full object-cover blur-xl"
        />
      </div>
      {/* Images placed ABOVE the pink bar */}
      <div className="absolute inset-0 flex justify-center items-center gap-30 z-10">
        <img
          src="/images/cradle/cradle-laptop.png"
          alt="cradle-laptop"
          className="w-[693.375px] h-[430px] object-contain"
        />
        <img src="/images/cradle/cradle-phone.png" alt="cradle-phone" className="w-[220px] h-[413px] object-contain" />
      </div>
    </div>
  );
};

export default Cradlepage;

