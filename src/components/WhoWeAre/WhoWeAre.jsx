import React from "react";
import Image from "next/image";

import gymboy from "@/assets/gym-boy.png";
import trainer from "@/assets/trainer.png";
import equipments from "@/assets/equipments.png";
import gymcenter from "@/assets/gym-center.png";

const WhoWeAre = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-14">
        <div className="my-14">
          <h1 className="uppercase tracking-widest font-bold text-2xl text-center underline underline-offset-8 decoration-black text-orange-500">
            who we are
          </h1>
        </div>
        {/* facilities section */}
        <div className="grid grid-cols-2 gap-10 justify-between items-center">
          <div className="px-5">
            <h1 className="text-4xl font-bold">
              Take Your Health And Body To{" "}
              <span className="text-orange-500">Next Level</span>
            </h1>
            <p className="my-5">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="grid grid-cols-3 gap-2  justify-between justify-items-center place-items-center my-14">
              <div className="text-center p-5 ">
                <Image
                  src={trainer}
                  alt="trainer image"
                  className="w-20 h-20 inline-flex justify-center"
                ></Image>
                <h4 className="font-semibold text-xl my-3">Professinal Trainer</h4>
              </div>
              <div className="text-center p-5 border-x-2"><Image
                  src={equipments}
                  alt="equipments image"
                  className="w-20 h-20 inline-flex justify-center"
                ></Image>
                <h4 className="font-semibold text-xl my-3">Modern Equipments</h4>
                </div>
              <div className="text-center p-5">
                <Image
                  src={gymcenter}
                  alt="gymcenter image"
                  className="w-20 h-20 inline-flex justify-center"
                ></Image>
                <h4 className="font-semibold text-xl my-3">Fancy GYM Machines</h4>
                </div>
            </div>
          </div>
          <div className=" overflow-hidden">
            <Image
              src={gymboy}
              alt="gymboy image"
              className="rounded-lg  hover:scale-110 duration-300 hover:rounded-lg"
            ></Image>
          </div>
        </div>
        {/* CTA */}
        <button className="uppercase font-semibold bg-black text-white px-6 py-3 hover:bg-orange-500">Take a tour</button>
      </div>
    </>
  );
};

export default WhoWeAre;
