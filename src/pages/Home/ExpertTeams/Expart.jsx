import React from "react";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import tw from "../../../assets/tw.png";
import lin from "../../../assets/lin.png";
import { Link } from "react-router-dom";

const Expart = ({ member }) => {
  const { img, name, designation } = member;
  return (
    <div className="bg-base-100 card-xs mt-10">
      <figure className="bg-secondary flex justify-center pt-15 ">
        <img className="w-[200px] h-[210px]" src={img} alt="best doctors" />
      </figure>
      <div className="mt-4 card-body text-center">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-primary text-lg">{designation}</p>
      </div>
      <div className=" flex justify-between my-5 mx-10 ">
        <Link>
          <img
            className="h-[28px] w-[28px] rounded-full bg-secondary flex items-center justify-center mx-2"
            src={facebook}
            alt=""
          />
        </Link>
        <Link>
          <img
            className="h-[28px] w-[28px] rounded-full bg-secondary flex items-center justify-center mx-2"
            src={google}
            alt=""
          />
        </Link>
        <Link>
          <img
            className="h-[28px] w-[28px] rounded-full bg-secondary flex items-center justify-center mx-2"
            src={tw}
            alt=""
          />
        </Link>
        <Link>
          <img
            className="h-[28px] w-[28px] rounded-full bg-secondary flex items-center justify-center mx-2"
            src={lin}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Expart;
