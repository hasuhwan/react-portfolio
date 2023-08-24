import Title from "../title";
import Contents from "../contents";
import { containerCssData } from "../common/commonCssData";
import { useMemo } from "react";
import { skillGradeData, skillData } from "./skillsData";

export default function Skills() {
  const color = useMemo(() => "blueColor", []);
  return (
    <div className={containerCssData}>
      <Title title="Skills" color={color} />
      <Contents color={color} direction="left">
        <div className="w-full flex gap-20 justify-center">
          <div className="flex flex-col items-center">
            <h1 className=" text-medium mb-3 drop-shadow-blueColor ">
              {skillGradeData[0]}
            </h1>
            <div className="grid gap-4 border-2 rounded-lg py-3 px-3">
              {skillData[skillGradeData[0]].map((data) => {
                return (
                  <div className="flex items-center">
                    {data.icon}
                    <span className=" text-textBold">{data.body}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {skillGradeData.slice(1).map((name) => {
              return (
                <div key={name} className="flex flex-col items-center">
                  <h1 className=" text-medium mb-3 drop-shadow-blueColor ">
                    {name}
                  </h1>
                  <div className="grid gap-4 border-2 rounded-lg py-3 px-3">
                    {skillData[name].map((data) => {
                      return (
                        <div key={data.body} className="flex items-center">
                          {data.icon}
                          <span className=" text-textBold">{data.body}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Contents>
    </div>
  );
}
