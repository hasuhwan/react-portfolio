import Title from "../title";
import Contents from "../contents";
import { useMemo } from "react";

import { containerCssData } from "../common/commonCssData";
import { archivingDataArr, archivingDataObj } from "./archivingData";
import MiddleDot from "./middleDot";
export default function Archiving() {
  const color = useMemo(() => "greenColor", []);

  return (
    <div className={containerCssData}>
      <Title title="Archiving" color={color} />
      <Contents color={color} direction="right">
        <div className="w-full flex items-center justify-between">
          {archivingDataArr.map((keyword) => {
            const data = archivingDataObj[keyword];
            return (
              <div
                key={keyword}
                className="w-1/2 h-full flex flex-col items-center   "
              >
                <div className="flex justify-center items-center leading-none mb-6">
                  {data.icon}
                  <h1 className={`text-medium drop-shadow-${color}`}>
                    {keyword}
                  </h1>
                </div>
                <div className="flex flex-col  justify-center">
                  <ul className="w-full">
                    {data.contents.map((content, idx) => {
                      return (
                        <li className="text-text" key={idx}>
                          {" "}
                          <MiddleDot>{content}</MiddleDot>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Contents>
    </div>
  );
}
