import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import Image from "next/image";

import location from "@/assets/pin.png";
import hour from "@/assets/time.png";
import phone from "@/assets/phone.png";

const ContactPage = () => {
  return (
    <>
      <div>
        <PageBanner title={"Contact"}></PageBanner>
      </div>
      <div className="w-10/12 mx-auto my-14">
        {/* Title */}
            <h2 className="text-center text-2xl font-bold tracking-wide uppercase underline underline-offset-8 decoration-orange-500">get in touch</h2>
        <div className="my-14 grid grid-cols-2 gap-10">
          <div className="space-y-3 shadow-xl p-5 rounded-md">
            {/* Name input */}
            <div>
              <label>Name</label>
              <input
                className="w-full p-2 rounded-lg border "
                type="text"
                placeholder="name"
              ></input>
              <br></br>
            </div>
            {/* Email Input */}
            <div>
              <label>Email</label>
              <input
                className="w-full p-2 rounded-lg border "
                type="email"
                placeholder="email"
              ></input>
            </div>
            {/* Message input */}
            <div>
              <label>Your Massage</label>
              <textarea
                className="w-full p-2 rounded-lg border "
                placeholder="your massage"
              ></textarea>
            </div>
            {/* Sumbit button */}
            <button className="border px-4 py-2 bg-orange-500 text-white">
              Send Message
            </button>
          </div>
          <div className=" space-y-3">
            <div className="p-5 rounded-md bg-black text-white flex items-center gap-3">
              <div>
                <Image
                  src={location}
                  alt="location image"
                  className="w-20 h-20 object-fill bg-white rounded-full p-2 "
                ></Image>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Location</h2>
                <span>526 Abshire Row, West Alexzander, New Mexico</span>
              </div>
            </div>
            {/* Office Hour */}
            <div className="p-5 rounded-md bg-black text-white flex items-center gap-3">
              <div>
                <Image
                  src={hour}
                  alt="hour image"
                  className="w-20 h-20 object-fill bg-white rounded-full p-2 "
                ></Image>
              </div>
              <div>
              <h2 className="text-xl font-semibold">Office Hours</h2>
                <p>Mon-Fri (10am-5pm)</p>
                <span>Sunday (Closed)</span>
              </div>
            </div>
            {/* Contact */}
            <div className="p-5 rounded-md bg-black text-white flex items-center gap-3">
              <div>
                <Image
                  src={phone}
                  alt="hour image"
                  className="w-20 h-20 object-fill bg-white rounded-full p-2 "
                ></Image>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Phone & Email</h2>
                <p>Phone：+021585236655-58 </p>
                <span>Email: contact@next-gym.com</span>
                
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.262105919523!2d90.40614004662814!3d23.780680844350506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ebfc24eab%3A0xea7dab563f12457a!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1694034210152!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
