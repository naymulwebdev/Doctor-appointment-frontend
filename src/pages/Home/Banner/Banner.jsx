import React from "react";
import bg from "../../../assets/bannerimg.png";
import mobile from "../../../assets/mobile.png";
import doctodr from "../../../assets/doctor.png";



const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className=""
    >
      <div className="text-white px-30 py-20 ">
        <div className="px-4 md:px-29 py-0 md:py-20 min-h-screen md:flex justify-between items-center gap-5">
          <div className="w-1/1 md:2/4 space-y-5 ">
            <h1 className="text-3xl font-bold">
              A Wealth of Experience To Heal And Help You.
            </h1>
            <p className="py-5">
              Professional doctor website offering appointments, medical services, expert advice, secure consultations, health information, and compassionate care designed to support patients and improve wellness.
.
            </p>
            <button className="bg-secondary px-7 py-4 text-black mr-6">See More</button>
            <button className="bg-white px-7 py-4 text-black">Make an Appointment</button>
          </div>
          <div className="w-1/1 md:2/4 flex justify-center md:justify-end items-center relative">
            <img className=" " src={mobile} />
            <div className="absolute top-15 w-[232px] right-27 md:right-7 space-y-12">
              <img src={doctodr} alt="best medical, best doctor" />
              <div className="mx-5 space-y-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">Medisite website</h2>
              <button className="w-full bg-primary rounded-full p-5  text-center">Register Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
