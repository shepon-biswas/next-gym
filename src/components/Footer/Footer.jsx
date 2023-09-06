import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-14 bg-slate-300">
        <div className=" w-10/12 mx-auto ">
          <div className=" grid grid-cols-4 gap-8">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold">Next GYM</h2>
                <p className="w-9/12 my-3">
                  Take your health and body to the next level with our
                  comprehensive program designed to help you reach your fitness
                  goals.
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  contact@next-gym.com
                </p>
                <p>
                  <span className="font-semibold">Call:</span> +0125456688
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3 underline underline-offset-8 decoration-orange-500">
                Important Links
              </h4>
              <ul className="space-y-3 ">
                <li>
                  <a
                    className="hover:text-orange-500 hover:font-semibold"
                    href="#"
                  >
                    Classes
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-orange-500 hover:font-semibold"
                    href="#"
                  >
                    Coaches
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-orange-500 hover:font-semibold"
                    href="#"
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-orange-500 hover:font-semibold"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3 underline underline-offset-8 decoration-orange-500">
                Working Hours
              </h4>
              <div className="space-y-3">
              <p className="font-semibold">Monday - Friday:</p>
              <p>7:00am - 21:00pm</p>
              <p className="font-semibold">Saturday:</p>
              <p>7:00am - 19:00pm</p>
              <p className="font-semibold">Sunday - Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
