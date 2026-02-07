import React from "react";
import Advocat from "../../assets/Advocate.png";
import Advocat2 from "../../assets/Advocate2.png";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton";

const Advocate = () => {
  return (
    <div className="m-5">
      <div className="p-5 md:pt-5 md:flex justify-between items-center">
        <div className="w-full md:w-1/3 space-y-5 m-5">
          <h1 className="text-3xl font-bold">
            A Wealth of Experience To Heal And Help You.
          </h1>
          <p className="py-5 text-nutel">
            Professional doctor website offering appointments, medical services,
            expert advice, secure consultations, health information, and
            compassionate care designed to support patients and improve
            wellness.
          </p>
          <PrimaryButton className="bg-secondary px-7 py-4 text-black mr-6">
            See More
          </PrimaryButton>
        </div>

        <div className="w-full md:w-2/4 flex justify-center md:justify-end items-center  m-5">
        <div className="relative w-[490px] h-[510px]">
          <img src={Advocat2} alt="best medical, best doctor" />

        </div>
        <img
              className=" absolute left-[50%] w-[360px] h-[380px]"
              src={Advocat}
              alt="best medical, best doctor"
            />
          
          
        </div>
      </div>
    </div>
  );
};

export default Advocate;
