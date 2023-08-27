import Image from "next/image";
import React from "react";

import cycling from "@/assets/cycling.jpg";
import karate from "@/assets/karate.jpg";
import strong from "@/assets/strong.jpg";
import yoga from "@/assets/yoga.jpg";
import martial from "@/assets/martial.jpg";
import workout from "@/assets/workout.jpg";

const WhatWeOffer = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-14 pt-8">
        <div className="my-14">
            <h4 className="uppercase tracking-widest font-bold text-2xl text-center underline underline-offset-8 decoration-black text-orange-500">our featured classes</h4>
            <h2 className="uppercase font-bold text-3xl text-center my-8">
            We Are Offering Best Flexible Classes
            </h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className=" max-h-72 col-span-2 overflow-hidden relative ">
            <Image
              src={cycling}
              alt="cycling image"
              className="h-full w-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Cycling</h2>
                <span className="bg-orange-500 px-3 py-1 ">Monday: 9:00am-10:00am</span>
            </div>
          </div>
          {/* Karate */}
          <div className="max-h-72 overflow-hidden relative ">
            <Image
              src={karate}
              alt="karate image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Karate</h2>
                <span className="bg-orange-500 px-3 py-1 ">Friday: 9:00am-10:00am</span>
            </div>
          </div>
          {/* Power */}
          <div className="max-h-72 overflow-hidden relative ">
            <Image
              src={strong}
              alt="strong image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Power</h2>
                <span className="bg-orange-500 px-3 py-1 ">Tuesday: 9:00am-10:00am</span>
            </div>
          </div>
          {/* Meditation */}
          <div className="max-h-72 overflow-hidden relative ">
            <Image
              src={yoga}
              alt="yoga image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Meditation</h2>
                <span className="bg-orange-500 px-3 py-1 ">Thursday: 4:00pm-06:00pm</span>
            </div>
          </div>
          {/* Martial Arts */}
          <div className="max-h-72 overflow-hidden relative ">
            <Image
              src={martial}
              alt="martial image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Martial Arts</h2>
                <span className="bg-orange-500 px-3 py-1 ">Saturday: 10:00am-11:00am</span>
            </div>
          </div>
          {/* Workout */}
          <div className="col-span-2 max-h-72 overflow-hidden relative ">
            <Image
              src={workout}
              alt="workout image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Workout</h2>
                <span className="bg-orange-500 px-3 py-1 ">Sunday: 10:00am-11:00am</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
