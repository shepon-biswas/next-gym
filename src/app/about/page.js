import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div>
        <PageBanner title={"About Us"}></PageBanner>
      </div>
      <div className="w-10/12 mx-auto my-14 ">
        <div>
          <h2 className="text-2xl font-bold text-center">About Us</h2>
          <p>
            At Gym and Fitness, we believe that fitness and wellbeing are the
            cornerstones of a full and vibrant life. Established in 2002, we
            began our journey as a family-owned business dedicated to providing
            exceptional gym equipment at affordable prices. But, we dreamed
            bigger than just being an ordinary fitness equipment supplier; we
            aspired to lead the industry. Two decades later, we are proud to
            have transformed Gym and Fitness into one of Australias premier
            online retailers of fitness equipment. We have moved beyond just
            supplying gear we have become advocates for fitness, wellbeing and
            life enrichment. Our commitment to excellence is reflected not only
            in the quality equipment we provide but also in the lives we have
            improved. Our real success lies in the thousands of customers we have
            empowered to live longer, more joyful, and healthier lives. We are
            more than just a fitness company we are your partners in health,
            your cheerleaders on the sideline, motivating you to reach your
            personal fitness goals. Embrace the fitness journey with us and see
            how it transforms your world. Join us in our mission to improve
            lives through fitness and wellness, because at Gym and Fitness, your
            health is our passion.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
