import { FC } from "react";

interface InfoPointProps {
  job: string;
  country: string;
  skills: string;
  hobby: string;
}

export const InfoPoint: FC<InfoPointProps> = ({
  job,
  country,
  skills,
  hobby,
}) => {
  return (
    <div>
      <h4>More Information:</h4>
      <p>Job : {job}</p>
      <p>Country : {country}</p>
      <p>Skills: {skills}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};
