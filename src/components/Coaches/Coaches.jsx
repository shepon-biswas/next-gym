import Image from "next/image";
import React from "react";

// images
import trainer1 from "@/assets/trainer1.png";
import trainer2 from "@/assets/trainer2.png";
import trainer3 from "@/assets/trainer3.png";

const Coaches = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-[150px]">
        <div className="my-14">
          <h1 className="my-5 uppercase tracking-widest font-bold text-2xl text-center underline underline-offset-8 decoration-black text-orange-500">
            Meet our coaches
          </h1>
          <p className="text-center w-2/6 mx-auto">
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
        </div>
        {/* Trainer Div Section */}
        <div className="grid grid-cols-3 gap-6 items-center content-center ">
          {/* Trainer one div */}
          <div className=" shadow-lg p-5 rounded-sm">
            <div className="w-96 h-96 text-center overflow-hidden">
              <Image
                src={trainer1}
                alt="trainer image"
                className=" w-full h-full object-cover object-top text-center grayscale hover:grayscale-0 hover:scale-105 duration-300 "
              ></Image>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-xl mt-3">David Lewis</h1>
              <p>Yoga Trainer</p>
              <button className="px-6 py-2 bg-orange-500 my-3 rounded-sm text-white">
                Contact
              </button>
            </div>
          </div>
          <div className=" shadow-lg p-5 rounded-sm">
            <div className="w-96 h-96 text-center overflow-hidden">
              <Image
                src={trainer2}
                alt="trainer image"
                className=" w-full h-full object-cover object-top text-center grayscale hover:grayscale-0 hover:scale-105 duration-300 "
              ></Image>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-xl mt-3">David Jonathon</h1>
              <p>Fitness Trainer</p>
              <button className="px-6 py-2 bg-orange-500 my-3 rounded-sm text-white">
                Contact
              </button>
            </div>
          </div>
          <div className=" shadow-lg p-5 rounded-sm">
            <div className="w-96 h-96 text-center overflow-hidden">
              <Image
                src={trainer3}
                alt="trainer image"
                className=" w-full h-full object-cover object-top text-center grayscale hover:grayscale-0 hover:scale-105 duration-300 "
              ></Image>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-xl mt-3">Maria Costa</h1>
              <p>Personal Trainer</p>
              <button className="px-6 py-2 bg-orange-500 my-3 rounded-sm text-white">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coaches;
