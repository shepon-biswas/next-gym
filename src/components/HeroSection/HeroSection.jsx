import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/next-gym-banner.jpg"

const HeroSection = () => {
  return (
    <>
      <div>
        <Image
          src={BannerImg}
          alt="hero banner"
          className="[h-screen] w-full object-cover"
        />
      </div>
    </>
  );
};

export default HeroSection;
