import Image from "next/image";
import React from "react";

// images
import beginner from "@/assets/cycling.jpg";
import intermidiate from "@/assets/strong.jpg";
import professtional from "@/assets/workout.jpg";


const PricingPlan = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-[150px]">
        <div className="my-14">
          <h1 className="my-5 uppercase tracking-widest font-bold text-2xl text-center underline underline-offset-8 decoration-black text-orange-500">
            Ecxclusive Pricing Plan
          </h1>
          <p className="text-center w-2/6 mx-auto">
            Nexy Gym an unknown printer took a galley of type and scrambled make
            a type specimen book.
          </p>
        </div>
        {/* Pricing Plan card section */}
        <div>
          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className=" shadow-lg pb-5 ">
              <div className=" relative w-full h-72 text-center overflow-hidden">
                <Image
                  src={beginner}
                  alt="Plan one image"
                  className=" w-full h-full object-cover object-top text-center grayscale hover:grayscale-0 hover:scale-105 duration-300 "
                ></Image>
                <div className="text-center absolute bottom-0 left-28">
                  <h1 className="text-xl font-bold bg-white px-6 py-2">
                    Starter Pack
                  </h1>
                </div>
              </div>

              <div className="my-3 text-center">
                <p className="my-4">
                  <span className="font-bold text-4xl">$36</span> /month
                </p>
                <ul className="space-y-4">
                  <li>Free Hand</li>
                  <li>Gym Fitness</li>
                  <li>Weight Loss</li>
                  <li className="line-through">Personal Trainer</li>
                  <li>Cycling</li>
                </ul>
              </div>
            </div>
            {/* Card 2 */}
            <div className=" shadow-lg pb-5 ">
              <div className=" relative w-full h-72 text-center overflow-hidden">
                <Image
                  src={intermidiate}
                  alt="Plan one image"
                  className=" w-full h-full object-cover object-top text-center grayscale hover:grayscale-0 hover:scale-105 duration-300 "
                ></Image>
                <div className="text-center absolute bottom-0 left-28">
                  <h1 className="text-xl font-bold bg-white px-6 py-2">
                    Intermidiate
                  </h1>
                </div>
              </div>

              <div className="my-3 text-center">
                <p className="my-4">
                  <span className="font-bold text-4xl">$65</span> /month
                </p>
                <ul className="space-y-4">
                  <li>Free Hand</li>
                  <li>Gym Fitness</li>
                  <li>Weight Loss</li>
                  <li>Personal Trainer</li>
                  <li>Cycling</li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className=" shadow-lg pb-5 ">
              <div className=" relative w-full h-72 text-center overflow-hidden">
                <Image
                  src={professtional}
                  alt="Plan one image"
                  className=" w-full h-full object-cover object-top text-center grayscale hover:grayscale-0 hover:scale-105 duration-300 "
                ></Image>
                <div className="text-center absolute bottom-0 left-28">
                  <h1 className="text-xl font-bold bg-white px-6 py-2">
                  Professional
                  </h1>
                </div>
              </div>

              <div className="my-3 text-center">
                <p className="my-4">
                  <span className="font-bold text-4xl">$100</span> /month
                </p>
                <ul className="space-y-4">
                  <li>Free Hand</li>
                  <li>Gym Fitness</li>
                  <li>Weight Loss</li>
                  <li>Personal Trainer</li>
                  <li>Cycling</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
