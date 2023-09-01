import Title from "../title";
import Contents from "../contents";
import { useMemo, forwardRef, ForwardedRef } from "react";

import { containerCssData } from "../common/commonCssData";
import { archivingDataArr, archivingDataObj } from "./archivingData";
import MiddleDot from "./middleDot";
const Archiving = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const color = useMemo(() => "greenColor", []);

  return (
    <div className={containerCssData} ref={ref}>
      <div className="w-full h-[50px]"></div>
      <Title title="Archiving" color={color} />
      <Contents color={color}>
        <div className="w-full flex flex-col gap-10 desktop:flex-row desktop:gap-0 items-center justify-between">
          {archivingDataArr.map((keyword) => {
            const data = archivingDataObj[keyword];
            return (
              <a
                href={data.link} // 이동하고자 하는 외부 페이지의 URL
                rel="noopener noreferrer" // 보안을 위한 속성
                key={keyword}
                className="w-full  desktop:w-1/2   h-full flex flex-col items-center hover:cursor-pointer hover:drop-shadow-whiteColor   "
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
              </a>
            );
          })}
        </div>
      </Contents>
    </div>
  );
});
export default Archiving;
