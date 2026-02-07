import React from "react";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import doctor1 from "../../../assets/doctor1.png";
import doctor2 from "../../../assets/doctor2.png";
import doctor3 from "../../../assets/doctor3.png";
import doctor4 from "../../../assets/doctor4.png";
import Expart from "./Expart";

const ExpertTeams = () => {
  const experts = [
    {
      img: doctor1,
      name: "Ficrat Cortez",
      designation: "Doctor",
    },
    {
      img: doctor2,
      name: "Harry Fort",
      designation: "Doctor",
    },
    {
      img: doctor3,
      name: "Alena Dangal",
      designation: "Doctor",
    },
    {
      img: doctor4,
      name: "Mariya",
      designation: "Doctor",
    },
  ];
  return (
    <div className="px-4 md:px-29 py-10 md:pb-20">
      <Sectiontitle
        title="Our Expert Team"
        des="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
      ></Sectiontitle>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {experts?.map((member, i) => (
          <Expart key={i} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ExpertTeams;
