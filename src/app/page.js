'use client'

import HeroSection from "@/components/HeroSection/HeroSection";
import Motive from "@/components/Motive/Motive";
import WeAreBest from "@/components/WeAreBest/WeAreBest";
import WhatWeOffer from "@/components/WhatWeOffer/WhatWeOffer";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

 const HomePage = () =>{
  return (
    <>
      <HeroSection></HeroSection>
      <Motive></Motive>
      <WhoWeAre></WhoWeAre>
      <WhatWeOffer></WhatWeOffer>
      <WeAreBest></WeAreBest>
    </>
  )
}
export default HomePage;