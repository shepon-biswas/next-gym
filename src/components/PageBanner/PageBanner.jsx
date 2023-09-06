import React from "react";
import bannerImg from "@/assets/page-banner.jpeg";

const PageBanner = ({title}) => {
  return (
    <>
      <div>
        <div className=" bg-[url('https://i.ibb.co/NFQHsBp/wearebest.jpg')] grayscale">
          <div className=" py-28 w-10/12 mx-auto">
              <h2 className="font-extrabold text-white text-5xl text-center">
                {title}
              </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
