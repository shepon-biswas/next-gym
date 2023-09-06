import Image from "next/image";
import React from "react";

import gymboy from "@/assets/gym-boy.png";
import bodyShape from "@/assets/body.png";
import tools from "@/assets/tools.png";
import bag from "@/assets/bag.png";
import bottle from "@/assets/bottle.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-14">
        <div className="my-14">
          <h1 className="uppercase tracking-widest font-bold text-2xl text-center underline underline-offset-8 decoration-black text-orange-500">
            who Choose Us
          </h1>
        </div>
        {/* facilities section */}
        <div className="grid grid-cols-2 gap-10 justify-between items-center">
          <div>
            <Image
              src={gymboy}
              alt="gymboy image"
              className="rounded-lg "
            ></Image>
          </div>
          <div className="px-5">
            <h1 className="text-4xl font-bold">
              We Can Give <span className="text-orange-500">A Shape</span> Of
              Your Body Here!
            </h1>
            <p className="my-5">
              At Next Gym, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 gap-2  justify-between justify-items-center place-items-center my-4">
              <div className="text-center p-5">
                <Image
                  src={bodyShape}
                  alt="trainer image"
                  className="w-20 h-20 inline-flex justify-center bg-slate-300 hover:bg-orange-500 duration-300 p-3 rounded-full"
                ></Image>
                <h4 className="font-semibold text-xl my-3">
                  Free Fitness Training
                </h4>
              </div>
              <div className="text-center p-5">
                <Image
                  src={tools}
                  alt="equipments image"
                  className="w-20 h-20 inline-flex justify-center bg-slate-300 hover:bg-orange-500 duration-300 p-3 rounded-full"
                ></Image>
                <h4 className="font-semibold text-xl my-3">
                  Modern Gym Equipments
                </h4>
              </div>
              <div className="text-center p-5">
                <Image
                  src={bag}
                  alt="gymcenter image"
                  className="w-20 h-20 inline-flex justify-center bg-slate-300 hover:bg-orange-500 duration-300 p-3 rounded-full"
                ></Image>
                <h4 className="font-semibold text-xl my-3">
                  Gym Bag Equipments
                </h4>
              </div>
              <div className="text-center p-5">
                <Image
                  src={bottle}
                  alt="gymcenter image"
                  className="w-20 h-20 inline-flex justify-center bg-slate-300 hover:bg-orange-500 duration-300 p-3 rounded-full"
                ></Image>
                <h4 className="font-semibold text-xl my-3">
                  Fresh Bottle Watter
                </h4>
              </div>
              {/* CTA */}
              
            </div>
            <button className="text-center uppercase font-semibold bg-black text-white px-6 py-3 hover:bg-orange-500">
                Take a tour
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
