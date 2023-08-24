import Title from "../title";
import Contents from "../contents";
import { useMemo } from "react";
import { containerCssData } from "../common/commonCssData";
import { introduceTextArr } from "./introduceData";

export default function Introduce() {
  const color = useMemo(() => "purpleColor", []);
  return (
    <div className={containerCssData}>
      <Title title={"Front-end Developer"} color={color} />
      <Contents color={color} direction="left">
        <div className="flex flex-col items-center">
          {introduceTextArr.map((text) => {
            return (
              <span key={text} className="text-text mb-1">
                {text}
              </span>
            );
          })}
        </div>
      </Contents>
    </div>
  );
}
