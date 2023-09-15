import { skillGradeData, skillData } from "./skillsData";

const Skills = ({ inView }: { inView: boolean }) => {
  return (
    <div className="w-full flex flex-col desktop:flex-row gap-6 desktop:gap-20 justify-center">
      <div className="flex flex-col items-center">
        <h1
          className={`text-medium mb-3 ${
            inView ? `drop-shadow-blueColor` : null
          } `}
        >
          {skillGradeData[0]}
        </h1>
        <div className="grid gap-4 border-2 rounded-lg py-3 px-3">
          {skillData[skillGradeData[0]].map((data) => {
            return (
              <div key={data.body} className="flex items-center">
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
              <h1
                className={`text-medium mb-3 ${
                  inView ? `drop-shadow-blueColor` : null
                }`}
              >
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
  );
};
export default Skills;
