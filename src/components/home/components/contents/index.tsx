import { useMemo } from "react";
import bgNeon from "@images/bg-neon.png";
import type { IcontentsValue } from "src/types";

export default function Contents(props: IcontentsValue) {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url('${bgNeon}')`,
    };
  }, []);
  return (
    <div className="flex flex-col w-[90%] desktop:max-w-[1000px] justify-center items-center">
      <div
        className={`flex w-full justify-center items-center px-7 py-8 ${
          props.inView ? "border" : "border border-black"
        } rounded-lg ${
          props.inView
            ? `border-${props.color} drop-shadow-${props.color}`
            : null
        }    bg-center`}
        style={containerStyle}
      >
        {props.children}
      </div>
      {props.project && (
        <div className="h-[60px] w-full flex justify-center gap-[200px]">
          <div className="h-full w-[8px] bg-gradient-to-r from-silverColor via-whiteColor to-silverColor"></div>
          <div className="h-full w-[8px] bg-gradient-to-r from-silverColor via-whiteColor to-silverColor"></div>
        </div>
      )}
    </div>
  );
}
