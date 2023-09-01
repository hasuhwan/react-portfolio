import Title from "../title";
import Contents from "../contents";
import { containerCssData } from "../common/commonCssData";
import { forwardRef, useMemo, ForwardedRef } from "react";
import { aboutData } from "./aboutData";

const About = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const color = useMemo(() => "redColor", []);
  return (
    <div className={containerCssData} ref={ref}>
      <div className="w-full h-[50px]"></div>
      <Title title="About" color={color} />
      <Contents color={color}>
        <div className="flex flex-col  desktop:grid grid-cols-3">
          {aboutData.map((data) => {
            return (
              <div
                key={data.title}
                className="flex leading-none items-center py-7"
              >
                {data.icon}
                <div className="ml-4">
                  <h1 className="text-textBold mb-2">{data.title}</h1>
                  <span className="text-text">{data.body}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Contents>
    </div>
  );
});

export default About;
