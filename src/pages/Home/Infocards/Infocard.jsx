import React from "react";

const Infocard = ({ info }) => {
  const { img, name, des, bg, circle } = info;
  return (
    <div className={`${bg} cardiInfo p-2 md:p-8 card bg-base-100 card-xs shadow-sm`}>
      <figure className={`${circle} cardCircle w-17 h-17  rounded-full mx-auto`}>
        <img className="h-10 w-10" src={img} alt="best doctors" />
      </figure>
      <div className="mt-4 card-body text-center">
        <h2 className="text-lg font-semibold text-center">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Infocard;
