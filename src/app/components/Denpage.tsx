"use client";
import Image from "next/image";

export default function Denpage() {
  return (
    <div className="relative w-full mt-30 h-60 mb-70">
      {/* Retro dark bar with purple/blue blur */}
      <div className="absolute inset-0 bg-indigo-950/60 blur-3xl h-60 z-0" />

      {/* Images placed ABOVE the blur bar */}
      <div className="absolute inset-0 flex justify-center items-center gap-30 z-10">
        <Image
          src="/den/laptop.png"
          alt="den-laptop"
          width={693.375}
          height={430}
        />
        <Image src="/den/mobile.png" alt="den-mobile" width={220} height={413} />
        <Image src="/den/mobile2.png" alt="den-mobile2" width={220} height={413} />
      </div>
    </div>
  );
}


