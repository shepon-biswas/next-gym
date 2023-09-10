import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div>
        <PageBanner title={"About Us"}></PageBanner>
      </div>
      <div className="w-10/12 mx-auto my-14">
        <div>
          <h2 className="text-2xl font-bold text-center">About Us</h2>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
