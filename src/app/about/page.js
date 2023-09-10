import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import Image from "next/image";

import missionImg from "@/assets/martial.jpg";
import visionImg from "@/assets/strong.jpg";

const AboutPage = () => {
  return (
    <>
      <div>
        <PageBanner title={"About Us"}></PageBanner>
      </div>
      <div className="w-10/12 mx-auto my-14">
        <h2 className=" my-14  text-2xl font-bold text-center uppercase underline underline-offset-8 decoration-orange-500">
          our mission
        </h2>
        <div className="grid grid-cols-2 gap-10 items-center ">
          <div>
            <p className="text-justify">
              At NEXT-GYM, our mission is to inspire, empower, and transform
              lives through fitness. We are committed to providing a welcoming
              and supportive environment where individuals of all fitness levels
              can achieve their health and wellness goals. Our dedicated team of
              fitness professionals and state-of-the-art facilities are here to
              guide, motivate, and educate our members on their journey to a
              healthier, happier, and more active life.
            </p>
          </div>
          <div className="overflow-hidden">
            <Image
              src={missionImg}
              alt="mission image"
              className="w-full h-96 rounded-md object-cover object-top hover:scale-110 duration-300 hover:rounded-lg"
            ></Image>
          </div>
        </div>
        {/* Our Vision */}
        <h2 className=" my-14  text-2xl font-bold text-center uppercase underline underline-offset-8 decoration-orange-500">
          our mission
        </h2>
        <div className="grid grid-cols-2 gap-10 items-center ">
        <div className="overflow-hidden">
            <Image
              src={visionImg}
              alt="Vision image"
              className="w-full h-96 rounded-md object-cover object-top hover:scale-110 duration-300 hover:rounded-lg"
            ></Image>
          </div>
          <div>
            <p className="text-justify">
              At NEXT-GYM, our mission is to inspire, empower, and transform
              lives through fitness. We are committed to providing a welcoming
              and supportive environment where individuals of all fitness levels
              can achieve their health and wellness goals. Our dedicated team of
              fitness professionals and state-of-the-art facilities are here to
              guide, motivate, and educate our members on their journey to a
              healthier, happier, and more active life.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AboutPage;
