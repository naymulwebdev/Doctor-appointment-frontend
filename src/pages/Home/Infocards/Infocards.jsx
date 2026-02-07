import React from "react";
import service from "../../../assets/cata1.png";
import doctor from "../../../assets/cata2.png";
import car from "../../../assets/cata3.png";
import room from "../../../assets/cata4.png";
import Infocard from "./Infocard";

const Infocards = () => {
  const infoCardData = [
    {
      img: service,
      name: "24 Hours Service",
      des: "Lorem inpute simply dummy text of the printing and type website.",
      bg: "bg-white",
      circle: "bg-secondary",
    },
    {
      img: doctor,
      name: "Qualified Doctors",
      des: "Lorem inpute simply dummy text of the printing and type website.",
      bg: "bg-secondary",
      circle: "bg-white",
    },
    {
      img: car,
      name: "Emergency Care",
      des: "Lorem inpute simply dummy text of the printing and type website.",
      bg: "bg-white",
      circle: "bg-secondary",
    },
    {
      img: room,
      name: "Operation Theater",
      des: "Lorem inpute simply dummy text of the printing and type website.",
      bg: "bg-white",
      circle: "bg-secondary",
    },
  ];
  return (
    <div className="px-4 md:px-10 py-0 md:pt-10  pb-2 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {infoCardData?.map((info, i) => (
          <Infocard key={i} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Infocards;
