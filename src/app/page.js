'use client'

import Coaches from "@/components/Coaches/Coaches";
import HeroSection from "@/components/HeroSection/HeroSection";
import Motive from "@/components/Motive/Motive";
import PricingPlan from "@/components/PricingPlan/PricingPlan";
import WeAreBest from "@/components/WeAreBest/WeAreBest";
import WhatWeOffer from "@/components/WhatWeOffer/WhatWeOffer";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

 const HomePage = () =>{
  return (
    <>
      <HeroSection></HeroSection>
      <Motive></Motive>
      <WhoWeAre></WhoWeAre>
      <WhatWeOffer></WhatWeOffer>
      <WeAreBest></WeAreBest>
      <WhyChooseUs></WhyChooseUs>
      <Coaches></Coaches>
      <PricingPlan></PricingPlan>
    </>
  )
}
export default HomePage;