import PageBanner from "@/components/PageBanner/PageBanner";
import Image from "next/image";
import React from "react";

// images
import cycling from "@/assets/cycling.jpg";
import karate from "@/assets/karate.jpg";
import strong from "@/assets/strong.jpg";
import yoga from "@/assets/yoga.jpg";
import martial from "@/assets/martial.jpg";
import workout from "@/assets/workout.jpg";



const ClassesPage = () => {
  return (
    <>
      <div>
        <PageBanner title={"Classes"}></PageBanner>
      </div>
      {/* Classes Information Section */}
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-3 gap-6 my-14">
            {/* Cycling */}
        <div className="h-96 overflow-hidden relative ">
            <Image
              src={cycling}
              alt="cycling image"
              className="h-full w-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Cycling</h2>
                <p className="bg-orange-500 px-3 py-1 ">Monday: 9:00am-10:00am</p>
                <button className="my-3 text-center uppercase font-semibold bg-black text-white px-6 py-3 hover:bg-orange-500">
                Join Now
              </button>
            </div>
          </div>
          {/* Karate */}
        <div className="h-96 overflow-hidden relative ">
            <Image
              src={karate}
              alt="Karate image"
              className="h-full w-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Karate</h2>
                <p className="bg-orange-500 px-3 py-1 ">Monday: 9:00am-10:00am</p>
                <button className="my-3 text-center uppercase font-semibold bg-black text-white px-6 py-3 hover:bg-orange-500">
                Join Now
              </button>
            </div>
          </div>
          {/* Power */}
          <div className="h-96 overflow-hidden relative ">
            <Image
              src={strong}
              alt="strong image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Power</h2>
                <p className="bg-orange-500 px-3 py-1 ">Tuesday: 9:00am-10:00am</p>
                <button className="my-3 text-center uppercase font-semibold bg-black text-white px-6 py-3 hover:bg-orange-500">
                Join Now
              </button>
            </div>
          </div>
          {/* Meditation */}
          <div className="h-96 overflow-hidden relative ">
            <Image
              src={yoga}
              alt="yoga image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Meditation</h2>
                <p className="bg-orange-500 px-3 py-1 ">Thursday: 4:00pm-06:00pm</p>
                <button className="my-3 text-center uppercase font-semibold bg-black text-white px-6 py-3 hover:bg-orange-500">
                Join Now
              </button>
            </div>
          </div>
          {/* Martial Arts */}
          <div className="h-96 overflow-hidden relative ">
            <Image
              src={martial}
              alt="martial image"
              className=" w-full h-full object-cover hover:scale-110 duration-300 "
            ></Image>
            <div className="text-white absolute bottom-8 left-8 ">
                <h2 className="font-semibold text-3xl my-3">Martial Arts</h2>
                <p className="bg-orange-500 px-3 py-1 ">Saturday: 10:00am-11:00am</p>
                <button className="my-3 text-center uppercase font-semibold bg-black text-white px-6 py-3 hover:bg-orange-500">
                Join Now
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesPage;
