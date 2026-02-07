import React from "react";
import clockIcon from '../../../assets/clockIcon.png'
import messageBox from '../../../assets/message.png'

const Artical = ({news}) => {
    const {img, name, des} = news
  return (
    <artical>
      <div
        className= "mt-5 p-2 rounded-none md:p-8 card bg-base-100 card-xs shadow-sm"
      >
        <figure
          className=""
        >
          <img className="w-full me-1" src={img} alt="best doctors" />
        </figure>
        <div className="mt-4 card-body">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src={clockIcon} alt="clock" />
                    <p className="ms-1">10 sep, 2026</p>
                </div>
                <div className="flex items-center">
                    <img src={messageBox} alt="mbox" />
                    <p className="ms-1">3 comments</p>
                </div>
            </div>
          <h2 className="text-lg font-semibold">{name.slice(0,50)}</h2>
          <p>{des}</p>
        </div>
      </div>
    </artical>
  );
};

export default Artical;
