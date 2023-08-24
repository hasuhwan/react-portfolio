import Title from "../title";
import Contents from "../contents";
import { containerCssData } from "../common/commonCssData";
import { useMemo } from "react";
import { aboutData } from "./aboutData";

export default function About() {
  const color = useMemo(() => "redColor", []);
  return (
    <div className={containerCssData}>
      <Title title="About" color={color} />
      <Contents color={color} direction="right">
        <div className="grid grid-cols-3">
          {aboutData.map((data) => {
            return (
              <div
                key={data.title}
                className="flex leading-none items-center py-7"
              >
                {data.icon}
                <div>
                  <h1 className="text-textBold text-whiteColor mb-2">
                    {data.title}
                  </h1>
                  <span className="text-whiteColor text-text">{data.body}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Contents>
    </div>
  );
}
