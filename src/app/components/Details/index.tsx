import info from "@/info.json";
import Education from "./Education";
import Skill from "./Skill";
import WorkingExperience from "./WorkingExperience";

const Details = () => {
  const { educations, experiences, skills } = info.details;

  return (
    <div className="w-full">
      <WorkingExperience info={experiences}></WorkingExperience>
      <Education info={educations}></Education>
      <Skill info={skills}></Skill>
    </div>
  );
};

export default Details;
